import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="page-wrapper">
      <div className="search-page">
        {favorites && favorites.length ? (
          <div className="books-grid">
            {favorites.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={favorites.some((fav) => fav.id === book.id)}
              />
            ))}
          </div>
        ) : (
          <div>No favorites found</div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
