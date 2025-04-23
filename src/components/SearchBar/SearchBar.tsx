import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { FaSearch } from "react-icons/fa";
import { FC } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

interface FormValues {
  searchInput: string;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const trimmedTerm = values.searchInput.trim();

    actions.resetForm();
    if (trimmedTerm === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSearch(trimmedTerm);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ searchInput: "" }} onSubmit={handleSubmit}>
        <Form className={css.searchform}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchInput"
            className={css.input}
          />
          <button type="submit" className={css.btnsearch}>
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;