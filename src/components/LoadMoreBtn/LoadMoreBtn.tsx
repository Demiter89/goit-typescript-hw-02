import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void; // тип для функції, що викликається при кліку
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.loadmorecontainer}>
      <button className={css.btnloadmore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}