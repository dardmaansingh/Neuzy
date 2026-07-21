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
      <div className="trending-page page-container">
        <div className="page-header">
          <h1 className="page-title">
            Trending Headlines 🔥
          </h1>
          <p className="page-subtitle">
            The top stories generating conversations right now.
          </p>
        </div>

        {loading && <LoadingSkeleton count={6} />}

        {error && <ErrorMessage message={error} onRetry={fetchTrending} />}

        {!loading && !error && (
          <div className="latest-grid">
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