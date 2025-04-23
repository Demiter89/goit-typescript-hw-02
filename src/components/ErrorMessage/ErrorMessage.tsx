import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: boolean;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={css.error}>
      <p className={css.texterror}>
        Whoops there was an error, please reload the page!{" "}
      </p>
    </div>
  );
}