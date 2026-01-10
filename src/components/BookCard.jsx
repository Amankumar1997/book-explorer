import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";
import { Link } from "react-router"; 
import React from "react";

const BookCard = ({ book, isFavorite }) => {
  const dispatch = useDispatch();
  const info = book.volumeInfo;

  return (
    <div className="book-card">
      <img src={info.imageLinks?.thumbnail} alt={info.title} />

      <div className="info">
        <h3 className="title" title={info.title}>{info.title}</h3>
        <p className="authors">{info.authors?.join(", ") || "Unknown Author"}</p>
      </div>

      <div className="actions">
        <Link 
          to={`/book/${book.id}`} 
          className="view-details"
        >
          View Details
        </Link>

        {isFavorite ? (
          <button 
            className="favorite-btn remove" 
            onClick={() => dispatch(removeFavorite(book.id))}
          >
            Remove
          </button>
        ) : (
          <button 
            className="favorite-btn add" 
            onClick={() => dispatch(addFavorite(book))}
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(BookCard, (prev, next) => {
  return prev.book.id === next.book.id && prev.isFavorite === next.isFavorite;
});
