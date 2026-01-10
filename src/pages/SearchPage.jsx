import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import { STATUS } from "../app/constants";

const SearchPage = () => {
  const { data, status, error } = useSelector((state) => state.books.books);
  const favorites = useSelector((state) => state.favorites);
  return (
    <div class="page-wrapper">
      <div className="search-page">
        <div className="search-form-wrapper">
          <SearchForm />
        </div>

        {status === STATUS.LOADING && (
          <p className="loading-text">Loading...</p>
        )}
        {error ? <div>{error}</div> : <></>}

        {data && data.length ? (
          <div className="books-grid">
            {data?.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={favorites.some((fav) => fav.id === book.id)}
              />
            ))}
          </div>
        ) : (
          <>
            <div>No data found</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
