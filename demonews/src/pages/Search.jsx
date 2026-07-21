import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/NewsCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import { searchNews } from "../services/newsApi";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    if (!query) {
      setArticles([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const results = await searchNews(query);
      setArticles(results);
    } catch (err) {
      setError(err.message || "Failed to search news articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [query]);

  return (
    <MainLayout>
      <div className="search-page page-container">
        <h1 className="page-title">
          {query ? `Search Results for "${query}"` : "Search News"}
        </h1>

        {!query && (
          <p className="page-subtitle">
            Please enter a keyword in the search bar above to find articles.
          </p>
        )}

        {loading && <LoadingSkeleton count={6} />}

        {error && <ErrorMessage message={error} onRetry={fetchResults} />}

        {!loading && !error && query && articles.length === 0 && (
          <div className="error">
            <h2>No Results Found</h2>
            <p>We couldn't find any news matching "{query}". Try another search term!</p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
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

export default Search;