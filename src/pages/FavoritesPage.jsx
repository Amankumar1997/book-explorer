import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((book) => (
        <BookCard key={book.id} book={book} isFavorite />
      ))}
    </div>
  );
};

export default FavoritesPage;
