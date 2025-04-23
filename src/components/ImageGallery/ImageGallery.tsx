import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";

interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  onClickImage: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClickImage }) => {
  return (
    <div className={css.containergallery}>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} className={css.itemgallery}>
            <ImageCard image={image} onClick={onClickImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;