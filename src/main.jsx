import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/styles/index.css";
import "./assets/styles/navbar.css";
import "./assets/styles/search.css";
import './assets/styles/book-details.css'
import './assets/styles/book-card.css'
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./app/store";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
