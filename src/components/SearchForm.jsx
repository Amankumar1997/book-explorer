import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
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
