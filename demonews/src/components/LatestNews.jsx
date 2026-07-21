import NewsCard from "./NewsCard";

function LatestNews({ articles }) {
  if (!articles?.length) return null;

  return (
    <section className="my-12">
      <div className="mb-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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