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

  const [searchedQuery, setSearchedQuery] = useState(query);

  if (query !== searchedQuery) {
    setSearchedQuery(query);
    setLoading(Boolean(query));
    setError(null);
    if (!query) {
      setArticles([]);
    }
  }

  const handleRetry = () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    searchNews(query)
      .then((results) => setArticles(results))
      .catch((err) => setError(err.message || "Failed to search news articles."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!query) return;

    let ignore = false;
    searchNews(query)
      .then((results) => {
        if (!ignore) {
          setArticles(results);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message || "Failed to search news articles.");
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <MainLayout>
      <div className="py-6">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          {query ? `Search Results for "${query}"` : "Search News"}
        </h1>

        {!query && (
          <p className="text-[var(--text-muted)] text-base">
            Please enter a keyword in the search bar above to find articles.
          </p>
        )}

        {loading && <LoadingSkeleton count={6} />}

        {error && <ErrorMessage message={error} onRetry={handleRetry} />}

        {!loading && !error && query && articles.length === 0 && (
          <div className="text-center py-16 px-4">
            <h2 className="font-serif text-2xl font-bold text-[#b30000] mb-2">No Results Found</h2>
            <p className="text-[var(--text-muted)]">We couldn't find any news matching "{query}". Try another search term!</p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
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

export default Search;