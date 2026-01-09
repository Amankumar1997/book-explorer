import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../features/books/booksSlice";
const SearchForm = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
  });
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = false;

    for (let [key, val] of Object.entries(form)) {
      if (val && val.trim() && !isValid) {
        isValid = true;
      }
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      alert("Please enter at least one field");
      return;
    }
    dispatch(fetchBooks(form));

  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={form.genre}
        onChange={handleChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
