Book Finder App (React + Redux Toolkit)
A modern book search application built with React, Redux Toolkit, and React Router that allows users to search books using the Google Books API, view details, and manage their favorites.

Features

1.  Search books by Title, Author, or Genre
2.  Fetches data from Google Books API
3.  Add & remove books from Favorites
4.  Multi-page navigation using React Router
5.  State management using Redux Toolkit
6.  Unit testing with Vitest & React Testing Library

Testing Strategy

1. Form submission test
2. API call mocking using Axios
3. UI rendering validation
4. Redux state validation

Favorites Logic
Favorites are managed via a dedicated Redux slice:

1. addFavorite(book)
2. removeFavorite(bookId)


This project shows:
1. Real-world Redux architecture
2. API handling
3. Routing
4. Component-based design
5. Unit testing
6) Production-ready project structure

Installation
git clone https://github.com/Amankumar1997/book-explorer.git or git@github.com:Amankumar1997/book-explorer.git
cd book-explorer
npm install
npm run dev

Run Tests
npx vitest --watch
