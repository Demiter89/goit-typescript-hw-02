import css from "./ImageCard.module.css";

// Опис типу для image
interface Image {
  id: string;
  urls: {
    small: string;
  };
  description: string | null;
  likes: number;
  user: {
    location: string | null;
  };
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.description || 'Image'}
        onClick={() => onClick(image)}
      />
      <div className={css.info}>
        <div className={css.infolist}>
          <span className={css.infoitem}>Likes: </span>
          <span className={css.item}>{image.likes}</span>
        </div>
        <div className={css.infolist}>
          <span className={css.infoitem}>Location: </span>
          <span className={css.item}>
            {image.user.location || "Location unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;