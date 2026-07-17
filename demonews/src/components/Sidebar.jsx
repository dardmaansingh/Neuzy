import SmallNewsCard from "./SmallNewsCard";

function Sidebar({ articles }) {
  if (!articles?.length) return null;

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h2>Trending</h2>
      </div>

      <div className="sidebar-content">

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