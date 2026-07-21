import { Link } from "react-router-dom";

function SmallNewsCard({ article }) {
  if (!article) return null;

  const articleId = article.article_id || article.title;

  return (
    <article className="small-card">
      <div className="small-card-image">
        <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
          <img
            src={
              article.image_url ||
              "https://placehold.co/120x90?text=No+Image"
            }
            alt={article.title}
          />
        </Link>
      </div>

      <div className="small-card-content">
        <h4>
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
            {article.title}
          </Link>
        </h4>
        <span>{article.source_name || article.source_id || "Trending"}</span>
      </div>
    </article>
  );
}

export default SmallNewsCard;