import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import { Photo } from "../../galleryServise";

interface ImageGalleryProps {
  images: Photo[];
  onClickImage: (image: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClickImage }) => {
  return (
    <div className={css.containergallery}>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} className={css.itemgallery}>
            <ImageCard image={image} onClick={() => onClickImage(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;