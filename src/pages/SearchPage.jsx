import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const { items, status } = useSelector((state) => state.books);
  const favorites = useSelector((state) => state.favorites);

  return (
  <div class="page-wrapper">
    <div className="search-page">
      <div className="search-form-wrapper">
        <SearchForm />
      </div>

      {status === "loading" && <p className="loading-text">Loading...</p>}

      <div className="books-grid">
        {items.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFavorite={favorites.some((fav) => fav.id === book.id)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchPage;
