import NewsCard from "./NewsCard";

function LatestNews({ articles }) {
  if (!articles?.length) return null;

  return (
    <section className="latest-news">

      <div className="latest-header">

        <h2>Latest News</h2>

      </div>

      <div className="latest-grid">

        {articles.map((article) => (
          <NewsCard
            key={article.article_id}
            article={article}
          />
        ))}

      </div>

    </section>
  );
}

export default LatestNews;