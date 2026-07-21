import { Link } from "react-router-dom";

function SmallNewsCard({ article }) {
  if (!article) return null;

  const articleId = article.article_id || article.title;

  return (
    <article className="grid grid-cols-[100px_1fr] gap-3 py-3 border-b border-[var(--border-color)] last:border-b-0">
      <div className="w-full h-20 rounded overflow-hidden">
        <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
          <img
            src={
              article.image_url ||
              "https://placehold.co/120x90?text=No+Image"
            }
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="font-serif text-sm font-semibold leading-snug line-clamp-2 mb-1">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }} className="hover:text-[#b30000] transition-colors">
            {article.title}
          </Link>
        </h4>
        <span className="text-xs text-[var(--text-muted)]">{article.source_name || article.source_id || "Trending"}</span>
      </div>
    </article>
  );
}

export default SmallNewsCard;