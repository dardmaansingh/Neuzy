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

        setArticle((prev) => {
          if (!prev) {
            const found = results.find(
              (item) => item.article_id === id || encodeURIComponent(item.title) === id
            );
            return found || results[0] || null;
          }
          return prev;
        });

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
        <div className="py-6">
          <LoadingSkeleton count={1} />
        </div>
      </MainLayout>
    );
  }

  if (!article) {
    return (
      <MainLayout>
        <div className="text-center py-16 px-4">
          <h2 className="font-serif text-3xl font-bold text-[#b30000] mb-3">Article Not Found</h2>
          <p className="text-[var(--text-muted)] mb-6">We couldn't find the article you were looking for.</p>
          <Link to="/" className="text-[#b30000] font-bold hover:underline">
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
      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          <article className="w-full">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#b30000] font-bold text-xs uppercase tracking-wider">
                {article.source_name || article.source_id || "Neuzy Exclusive"}
              </span>
              <button
                onClick={() => toggleBookmark(article)}
                className={`px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  bookmarked ? "bg-[#b30000] text-white" : "bg-black/5 dark:bg-white/10 text-[var(--text-main)] hover:bg-black/10"
                }`}
              >
                {bookmarked ? "🔖 Saved" : "📑 Save Bookmark"}
              </button>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
              {article.title}
            </h1>

            <div className="text-xs sm:text-sm text-[var(--text-muted)] pb-4 mb-6 border-b border-[var(--border-color)]">
              <span>Published: {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "Recent"}</span>
              {article.creator && <span> | By {Array.isArray(article.creator) ? article.creator.join(", ") : article.creator}</span>}
            </div>

            {article.image_url && (
              <div className="w-full max-h-[500px] overflow-hidden rounded-lg mb-6">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="text-base sm:text-lg leading-relaxed text-[var(--text-main)] mb-8">
              <p className="font-medium text-lg sm:text-xl mb-6 leading-relaxed">
                {article.description}
              </p>
              {article.content && (
                <p className="mb-6 leading-relaxed">
                  {article.content}
                </p>
              )}
            </div>

            {article.link && (
              <div className="bg-[var(--bg-card)] p-6 rounded-lg border-l-4 border-[#b30000] shadow-sm">
                <h4 className="font-bold text-base mb-2">Read Original Publication</h4>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  View the full unabridged story directly on the publisher's official website.
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#b30000] hover:bg-[#8f0000] text-white px-5 py-2.5 text-sm font-semibold rounded transition-colors"
                >
                  Visit Publisher Site ↗
                </a>
              </div>
            )}
          </article>

          <aside className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 h-fit">
            <div className="border-b-2 border-[var(--border-color)] pb-3 mb-4">
              <h2 className="font-serif text-2xl font-bold">Related News</h2>
            </div>
            <div className="flex flex-col">
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