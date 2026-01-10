import { useSelector } from "react-redux";
import BookCard from "../../components/BookCard";

const BookList = ({ books }) => {
  const favorites = useSelector((state) => state.favorites);

  if (!books.length) {
    return <p>No books found.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.some((fav) => fav.id === book.id)}
        />
      ))}
    </div>
  );
};

export default BookList;
