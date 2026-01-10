import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { STATUS } from "../app/constants";
import { fetchBookById } from "../features/books/booksSlice";

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    (state) => state.books.bookDetails
  );
  useEffect(() => {
    dispatch(fetchBookById(id));
  }, []);

  if (status === STATUS.LOADING) {
    return <div>loadin....</div>;
  }

  if (!data) {
    return <p>Book details not found.</p>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const {
    title,
    authors,
    publisher,
    publishedDate,
    description,
    pageCount,
    language,
    imageLinks,
    industryIdentifiers,
    maturityRating,
    previewLink,
  } = data.volumeInfo;

  return (
    <div class="page-wrapper">
      <div className="book-details">
        <button onClick={() => navigate(-1)}>⬅ Back</button>

        <div className="book-header">
          <img
            src={imageLinks?.thumbnail}
            alt={title}
            style={{ width: "200px" }}
          />

          <div>
            <h1>{title}</h1>
            <p>
              <strong>Author:</strong> {authors?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher || "N/A"}
            </p>
            <p>
              <strong>Published:</strong> {publishedDate || "N/A"}
            </p>
            <p>
              <strong>{` Links:  `}</strong>
              <a href={previewLink} target="_blank" rel="noreferrer">
                Preview Book
              </a>
            </p>

            <br />
          </div>
        </div>

        <section>
          <h3>Description</h3>
          <p>{description || "No description available."}</p>
        </section>

        <section>
          <h3>Book Details</h3>
          <ul>
            <li>
              <strong>Page Count:</strong> {pageCount || "N/A"}
            </li>
            <li>
              <strong>Language:</strong> {language?.toUpperCase() || "N/A"}
            </li>
            <li>
              <strong>Maturity Rating:</strong> {maturityRating}
            </li>

            {industryIdentifiers?.map((id) => (
              <li key={id.identifier}>
                <strong>{id.type}:</strong> {id.identifier}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BookDetailsPage;
