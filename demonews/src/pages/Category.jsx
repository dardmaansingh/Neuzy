import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/NewsCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";
import { getCategoryNews } from "../services/newsApi";

function Category() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 6;

  const [prevCategory, setPrevCategory] = useState(category);

  if (category !== prevCategory) {
    setPrevCategory(category);
    setCurrentPage(1);
    setLoading(true);
    setError(null);
  }

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    getCategoryNews(category)
      .then((data) => setArticles(data.results || []))
      .catch((err) => setError(err.message || `Failed to fetch ${category} news.`))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let ignore = false;
    getCategoryNews(category)
      .then((data) => {
        if (!ignore) {
          setArticles(data.results || []);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message || `Failed to fetch ${category} news.`);
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
  }, [category]);

  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Category";

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage) || 1;

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mb-8 border-b-2 border-[var(--border-color)] pb-3">
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            {formattedCategory} News
          </h1>
        </div>

        {loading && <LoadingSkeleton count={6} />}

        {error && <ErrorMessage message={error} onRetry={handleRetry} />}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-16 px-4">
            <h2 className="font-serif text-2xl font-bold text-[#b30000] mb-2">No Articles Found</h2>
            <p className="text-[var(--text-muted)]">No news available for the "{formattedCategory}" category right now.</p>
          </div>
        )}

        {!loading && !error && currentArticles.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.map((article, idx) => (
                <NewsCard key={article.article_id || idx} article={article} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Category;