import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/NewsCard";
import { useBookmarks } from "../context/BookmarkContext";

function Bookmark() {
  const { bookmarks } = useBookmarks();

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mb-8 border-b-2 border-[var(--border-color)] pb-3">
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Bookmarked News 🔖
          </h1>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            Your saved articles for offline or later reading.
          </p>
        </div>

        {bookmarks.length === 0 ? (
          <div className="text-center py-20 px-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]">
            <h2 className="font-serif text-2xl font-bold text-[#b30000] mb-3">No Bookmarks Saved Yet</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base">
              Click the bookmark icon (🔖) on any news article card across Neuzy to save it here!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((article, index) => (
              <NewsCard key={article.article_id || index} article={article} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Bookmark;