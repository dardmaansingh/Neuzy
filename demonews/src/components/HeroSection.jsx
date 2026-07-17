function HeroSection({ article }) {
  if (!article) return null;

  return (
    <section>
      <h1>Breaking News</h1>

      <img
        src={
          article.image_url ||
          "https://placehold.co/900x500?text=No+Image"
        }
        alt={article.title}
        width="600"
      />

      <h2>{article.title}</h2>

      <p>{article.description}</p>

      <a
        href={article.link}
        target="_blank"
        rel="noreferrer"
      >
        Read Full Story
      </a>

      <hr />
    </section>
  );
}

export default HeroSection;