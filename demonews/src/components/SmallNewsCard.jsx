function SmallNewsCard({ article }) {
  return (
    <article className="small-card">

      <div className="small-card-image">

        <img
          src={
            article.image_url ||
            "https://placehold.co/120x90?text=No+Image"
          }
          alt={article.title}
        />

      </div>

      <div className="small-card-content">
        <h4>{article.title}</h4>
        <span>{article.source_name}</span>

      </div>

    </article>
  );
}

export default SmallNewsCard;