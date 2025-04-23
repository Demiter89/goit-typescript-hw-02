import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

interface LoaderProps {
  loading: boolean;
  color?: string;
  size?: number;
}

export default function Loader({ loading, color = "#00FF88", size = 50 }: LoaderProps) {
  return (
    <div className={css.loader}>
      <ClipLoader
        className={css.loading}
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}