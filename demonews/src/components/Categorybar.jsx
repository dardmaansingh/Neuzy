import { Link } from "react-router-dom";

const categories = [
  "general",
  "business",
  "technology",
  "sports",
  "entertainment",
  "health",
  "science",
];

function CategoryBar() {
  return (
    <nav className="bg-[var(--bg-card)] border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4 py-3 flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="text-sm font-medium uppercase text-[var(--text-muted)] hover:text-[#b30000] transition-colors"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default CategoryBar;