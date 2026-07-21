import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage("neuzy_bookmarks", []);

  const isBookmarked = (articleId) => {
    if (!articleId) return false;
    return bookmarks.some((item) => item.article_id === articleId || item.title === articleId);
  };

  const addBookmark = (article) => {
    if (!article) return;
    const id = article.article_id || article.title;
    if (!isBookmarked(id)) {
      setBookmarks((prev) => [...prev, article]);
    }
  };

  const removeBookmark = (articleId) => {
    setBookmarks((prev) =>
      prev.filter((item) => item.article_id !== articleId && item.title !== articleId)
    );
  };

  const toggleBookmark = (article) => {
    if (!article) return;
    const id = article.article_id || article.title;
    if (isBookmarked(id)) {
      removeBookmark(id);
    } else {
      addBookmark(article);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}

export default BookmarkContext;
