import { ReactNode } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  children: ReactNode;
}

export default function LoadMoreBtn({ onClick, children }: LoadMoreBtnProps) {
  return (
    <div className={css.loadmorecontainer}>
      <button className={css.btnloadmore} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}