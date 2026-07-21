import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SmallNewsCard from "../components/SmallNewsCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useBookmarks } from "../context/BookmarkContext";
import { getTopNews } from "../services/newsApi";

function Article() {
  const { id } = useParams();
  const location = useLocation();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const [article, setArticle] = useState(location.state?.article || null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(!location.state?.article);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getTopNews();
        const results = data.results || [];

        if (!article) {
          const found = results.find(
            (item) => item.article_id === id || encodeURIComponent(item.title) === id
          );
          setArticle(found || results[0] || null);
        }

        setRelatedArticles(results.filter((item) => item.article_id !== id).slice(0, 5));
      } catch (err) {
        console.error("Error loading article data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="page-container">
          <LoadingSkeleton count={1} />
        </div>
      </MainLayout>
    );
  }

  if (!article) {
    return (
      <MainLayout>
        <div className="error error-padding-large">
          <h2>Article Not Found</h2>
          <p>We couldn't find the article you were looking for.</p>
          <Link to="/" className="article-back-link">
            ← Back to Homepage
          </Link>
        </div>
      </MainLayout>
    );
  }

  const articleId = article.article_id || article.title;
  const bookmarked = isBookmarked(articleId);

  return (
    <MainLayout>
      <div className="article-page page-container">
        <div className="article-grid">
          {/* Main Article Content */}
          <article className="main-article">
            <div className="article-top-bar">
              <span className="article-source-tag">
                {article.source_name || article.source_id || "Neuzy Exclusive"}
              </span>
              <button
                onClick={() => toggleBookmark(article)}
                className={`bookmark-toggle-btn ${bookmarked ? "saved" : ""}`}
              >
                {bookmarked ? "🔖 Saved" : "📑 Save Bookmark"}
              </button>
            </div>

            <h1 className="article-title">
              {article.title}
            </h1>

            <div className="article-meta">
              <span>Published: {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "Recent"}</span>
              {article.creator && <span> | By {Array.isArray(article.creator) ? article.creator.join(", ") : article.creator}</span>}
            </div>

            {article.image_url && (
              <div className="article-img-wrapper">
                <img
                  src={article.image_url}
                  alt={article.title}
                />
              </div>
            )}

            <div className="article-content">
              <p className="article-lead">
                {article.description}
              </p>
              {article.content && (
                <p className="article-paragraph">
                  {article.content}
                </p>
              )}
            </div>

            {article.link && (
              <div className="article-publisher-box">
                <h4>Read Original Publication</h4>
                <p>
                  View the full unabridged story directly on the publisher's official website.
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="article-publisher-btn"
                >
                  Visit Publisher Site ↗
                </a>
              </div>
            )}
          </article>

          {/* Related Articles Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-header">
              <h2>Related News</h2>
            </div>
            <div className="sidebar-content">
              {relatedArticles.map((relArticle, idx) => (
                <SmallNewsCard key={relArticle.article_id || idx} article={relArticle} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}

export default Article;