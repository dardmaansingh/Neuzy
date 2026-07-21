import SmallNewsCard from "./SmallNewsCard";

function Sidebar({ articles }) {
  if (!articles?.length) return null;

  return (
    <aside className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 transition-colors">
      <div className="border-b-2 border-[var(--border-color)] pb-3 mb-4">
        <h2 className="font-serif text-2xl font-bold">Trending</h2>
      </div>

      <div className="flex flex-col">
        {articles.map((article) => (
          <SmallNewsCard
            key={article.article_id}
            article={article}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;