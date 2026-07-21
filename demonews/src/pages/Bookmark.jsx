import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/NewsCard";
import { useBookmarks } from "../context/BookmarkContext";

function Bookmark() {
  const { bookmarks } = useBookmarks();

  return (
    <MainLayout>
      <div className="bookmark-page page-container">
        <div className="page-header">
          <h1 className="page-title">
            Bookmarked News 🔖
          </h1>
          <p className="page-subtitle">
            Your saved articles for offline or later reading.
          </p>
        </div>

        {bookmarks.length === 0 ? (
          <div className="error error-padding-large">
            <h2>No Bookmarks Saved Yet</h2>
            <p className="error-margin-text">
              Click the bookmark icon (🔖) on any news article card across Neuzy to save it here!
            </p>
          </div>
        ) : (
          <div className="latest-grid">
            {bookmarks.map((article, index) => (
              <NewsCard key={article.article_id || index} article={article} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Bookmark;