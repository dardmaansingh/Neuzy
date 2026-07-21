import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function NewsCard({ article }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) return null;

  const articleId = article.article_id || article.title;
  const bookmarked = isBookmarked(articleId);

  return (
    <article className="news-card">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleBookmark(article);
        }}
        aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        className={`card-bookmark-btn ${bookmarked ? "saved" : ""}`}
        title={bookmarked ? "Remove Bookmark" : "Save Bookmark"}
      >
        {bookmarked ? "🔖" : "📑"}
      </button>

      <div className="news-image">
        <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
          <img
            src={
              article.image_url ||
              "https://placehold.co/500x300?text=No+Image"
            }
            alt={article.title}
          />
        </Link>
      </div>

      <div className="news-content">
        <span className="news-source">
          {article.source_name || article.source_id || "Neuzy News"}
        </span>

        <h3 className="news-title">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
            {article.title}
          </Link>
        </h3>

        <p className="news-description">
          {article.description}
        </p>

        <Link
          className="news-link"
          to={`/article/${encodeURIComponent(articleId)}`}
          state={{ article }}
        >
          Read Story →
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;