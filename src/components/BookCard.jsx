import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";
import { Link } from "react-router";

const BookCard = ({ book, isFavorite }) => {
  const dispatch = useDispatch();
  const info = book.volumeInfo;

  return (
    <div>
      <img src={info.imageLinks?.thumbnail} alt={info.title} />
      <h3>{info.title}</h3>
      <p>{info.authors?.join(", ")}</p>

      <Link to={`/book/${book.id}`}>View Details</Link>

      {isFavorite ? (
        <button onClick={() => dispatch(removeFavorite(book.id))}>Remove</button>
      ) : (
        <button onClick={() => dispatch(addFavorite(book))}>Favorite</button>
      )}
    </div>
  );
};

export default BookCard;
