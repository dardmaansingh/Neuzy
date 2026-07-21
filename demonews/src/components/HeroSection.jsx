import { Link } from "react-router-dom";

function HeroSection({ article }) {
  if (!article) return null;

  const articleId = article.article_id || article.title;

  return (
    <section className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg overflow-hidden transition-colors">
      <div className="w-full h-80 sm:h-96 md:h-[450px] overflow-hidden">
        <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
          <img
            src={
              article.image_url ||
              "https://placehold.co/900x500?text=No+Image"
            }
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="p-6">
        <span className="text-[#b30000] font-bold text-xs uppercase tracking-wider">
          Breaking News
        </span>

        <h2 className="my-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }} className="hover:text-[#b30000] transition-colors">
            {article.title}
          </Link>
        </h2>

        <p className="text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>

        <Link
          to={`/article/${encodeURIComponent(articleId)}`}
          state={{ article }}
          className="text-[#b30000] font-semibold hover:underline"
        >
          Read Full Story →
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;