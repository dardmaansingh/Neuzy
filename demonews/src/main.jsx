import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/Themecontext";
import { BookmarkProvider } from "./context/BookmarkContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);