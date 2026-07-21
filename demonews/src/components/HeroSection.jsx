import { Link } from "react-router-dom";

function HeroSection({ article }) {
  if (!article) return null;

  const articleId = article.article_id || article.title;

  return (
    <section className="hero">
      <div className="hero-image">
        <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
          <img
            src={
              article.image_url ||
              "https://placehold.co/900x500?text=No+Image"
            }
            alt={article.title}
          />
        </Link>
      </div>

      <div className="hero-content">
        <span className="hero-tag">Breaking News</span>

        <h2 className="hero-title">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
            {article.title}
          </Link>
        </h2>

        <p className="hero-description">{article.description}</p>

        <Link
          to={`/article/${encodeURIComponent(articleId)}`}
          state={{ article }}
          className="hero-link"
        >
          Read Full Story →
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;