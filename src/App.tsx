import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { fetchGallery, Photo } from "./galleryServise";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectPhoto, setSelectPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Функція для відкриття модального вікна з зображенням
  function isOpenModal(image: Photo): void {
    setSelectPhoto(image);
    setOpenModal(true);
  }

  // Функція для закриття модального вікна
  function onCloseModal(): void {
    setSelectPhoto(null);
    setOpenModal(false);
  }

  // Функція для пошуку
  const handleSearch = (term: string): void => {
    setSearchTerm(`${term}/${Date.now()}`);
    setPage(1);
    setPhotos([]);
  };

  // Виконання запиту до API при зміні сторінки або пошукового терміну
  useEffect(() => {
    if (searchTerm === "") return;

    async function getPhoto() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchGallery(searchTerm.split("/")[0], page);
        if (data.length === 0) {
          toast.error("Sorry, there are no images matching your search query. Please try again!");
          return;
        }
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } catch {
        setError(true);
        toast.error("Something went wrong please reload again!");
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery images={photos} onClickImage={isOpenModal} />
      {loading && <Loader loading={loading} />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage(page + 1)}>Load more</LoadMoreBtn>
      )}
      <ImageModal isOpen={openModal} onClose={onCloseModal} image={selectPhoto} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;