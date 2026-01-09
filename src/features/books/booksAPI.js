import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBooksAPI = async ({ title, author, genre }) => {
  let query = "";

  if (title) query += `intitle:${title}`;
  if (author) query += `+inauthor:${author}`;
  if (genre) query += `+subject:${genre}`;

  const response = await axios.get(`${BASE_URL}?q=${query}&maxResults=20`);
  return response.data.items || [];
};
