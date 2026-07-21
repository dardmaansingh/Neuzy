import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/NewsCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import { getTopNews } from "../services/newsApi";

function Trending() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrending = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopNews();
      setArticles(data.results || []);
    } catch (err) {
      setError(err.message || "Failed to fetch trending news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mb-8 border-b-2 border-[var(--border-color)] pb-3">
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Trending Headlines 🔥
          </h1>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            The top stories generating conversations right now.
          </p>
        </div>

        {loading && <LoadingSkeleton count={6} />}

        {error && <ErrorMessage message={error} onRetry={fetchTrending} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={article.article_id || index} article={article} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Trending;