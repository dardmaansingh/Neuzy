import { Link } from "react-router-dom";

function FeaturedArticle({ article }) {
  if (!article) return null;

  const articleId = article.article_id || article.title;

  return (
    <section className="my-12">
      <div className="mb-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">Editor's Pick</h2>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b border-[var(--border-color)]">
        <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden">
          <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }}>
            <img
              src={
                article.image_url ||
                "https://placehold.co/800x500?text=No+Image"
              }
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-snug">
            <Link to={`/article/${encodeURIComponent(articleId)}`} state={{ article }} className="hover:text-[#b30000] transition-colors">
              {article.title}
            </Link>
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-6 line-clamp-4">
            {article.description}
          </p>
          <Link
            to={`/article/${encodeURIComponent(articleId)}`}
            state={{ article }}
            className="text-[#b30000] font-semibold hover:underline w-fit"
          >
            Read Story →
          </Link>
        </div>
      </article>
    </section>
  );
}

export default FeaturedArticle;