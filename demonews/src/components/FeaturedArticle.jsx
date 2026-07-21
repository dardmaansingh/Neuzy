import { Link } from "react-router-dom";

function FeaturedArticle({ article }) {
  if (!article) return null;

  const articleId = article.article_id || article.title;

  return (
    <section className="featured">
      <div className="featured-header">
        <h2>Editor's Pick</h2>
      </div>

      <article className="featured-card">
        <div className="featured-image">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
            <img
              src={
                article.image_url ||
                "https://placehold.co/800x500?text=No+Image"
              }
              alt={article.title}
            />
          </Link>
        </div>

        <div className="featured-content">
          <h3>
            <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
              {article.title}
            </Link>
          </h3>
          <p>{article.description}</p>
          <Link
            to={`/article/${encodeURIComponent(articleId)}`}
            state={{ article }}
          >
            Read Story →
          </Link>
        </div>
      </article>
    </section>
  );
}

export default FeaturedArticle;