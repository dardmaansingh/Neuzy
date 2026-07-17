function NewsCard({ article }) {
  return (
    <article className="news-card">

      <div className="news-image">

        <img
          src={
            article.image_url ||
            "https://placehold.co/500x300?text=No+Image"
          }
          alt={article.title}
        />

      </div>

      <div className="news-content">

        <span className="news-source">
          {article.source_name}
        </span>

        <h3 className="news-title">
          {article.title}
        </h3>

        <p className="news-description">
          {article.description}
        </p>

        <a
          className="news-link"
          href={article.link}
          target="_blank"
          rel="noreferrer"
        >
          Read More →
        </a>

      </div>

    </article>
  );
}

export default NewsCard;