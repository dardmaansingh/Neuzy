import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function NewsCard({ article }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) return null;

  const articleId = article.article_id || article.title;
  const bookmarked = isBookmarked(articleId);

  return (
    <article className="relative flex flex-col bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg overflow-hidden pb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleBookmark(article);
        }}
        aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-lg z-10 shadow transition-all ${
          bookmarked ? "bg-[#b30000] text-white" : "bg-white/90 text-gray-900 hover:bg-white"
        }`}
        title={bookmarked ? "Remove Bookmark" : "Save Bookmark"}
      >
        {bookmarked ? "🔖" : "📑"}
      </button>

      <div className="w-full h-52 overflow-hidden">
        <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
          <img
            src={
              article.image_url ||
              "https://placehold.co/500x300?text=No+Image"
            }
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[#b30000] text-xs font-bold uppercase mb-2">
          {article.source_name || article.source_id || "Neuzy News"}
        </span>

        <h3 className="font-serif text-lg font-bold leading-snug mb-2 line-clamp-2">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }} className="hover:text-[#b30000] transition-colors">
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>

        <Link
          className="text-[#b30000] font-semibold text-sm hover:underline mt-auto"
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