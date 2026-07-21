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

  const fetchCategoryArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCategoryNews(category);
      setArticles(data.results || []);
    } catch (err) {
      setError(err.message || `Failed to fetch ${category} news.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchCategoryArticles();
  }, [category]);

  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Category";

  // Calculate pagination slice
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage) || 1;

  return (
    <MainLayout>
      <div className="category-page page-container">
        <div className="category-header page-header">
          <h1 className="page-title">
            {formattedCategory} News
          </h1>
        </div>

        {loading && <LoadingSkeleton count={6} />}

        {error && <ErrorMessage message={error} onRetry={fetchCategoryArticles} />}

        {!loading && !error && articles.length === 0 && (
          <div className="error">
            <h2>No Articles Found</h2>
            <p>No news available for the "{formattedCategory}" category right now.</p>
          </div>
        )}

        {!loading && !error && currentArticles.length > 0 && (
          <>
            <div className="latest-grid">
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