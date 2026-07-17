function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <section className="featured">

      <div className="featured-header">

        <h2>Editor's Pick</h2>

      </div>

      <article className="featured-card">

        <div className="featured-image">

          <img
            src={
              article.image_url ||
              "https://placehold.co/800x500?text=No+Image"
            }
            alt={article.title}
          />

        </div>
        <div className="featured-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a
            href={article.link}
            target="_blank"
            rel="noreferrer"
          >
            Read Story →
          </a>

        </div>

      </article>

    </section>
  );
}

export default FeaturedArticle;