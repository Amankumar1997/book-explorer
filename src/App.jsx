import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar"
const BookDetailsPage = lazy(() => import("./pages/BookDetailsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

function App() {
  return (
    <>
    <Navbar/>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
