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
    <nav className="category-bar">

      <div className="category-container">

        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="category-link"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}

      </div>

    </nav>
  );
}

export default CategoryBar;