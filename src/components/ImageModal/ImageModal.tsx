import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FC } from "react";

// Тип для зображення
interface Image {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  user: {
    location: string | null;
  };
  urls: {
    regular: string;
  };
}

interface ImageModalProps {
  onClose: () => void;
  image: Image | null;
}

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ onClose, image }) => {
  const isOpen = Boolean(image);

  return (
    <Modal
      isOpen={isOpen}
      className={css.modal}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
    >
      {image && (
        <div className={css.cardmodal}>
          <img
            className={css.imgmodal}
            src={image.urls.regular}
            alt={image.description || "Image"}
          />
          <div className={css.infomodal}>
            <div className={css.infolistmodal}>
              <span className={css.infoitemmodal}>Likes: </span>
              <span className={css.itemmodal}>{image.likes}</span>
            </div>
            <div className={css.infolistmodal}>
              <span className={css.infoitemmodal}>Location: </span>
              <span className={css.itemmodal}>
                {image.user.location || "Location unknown"}
              </span>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;