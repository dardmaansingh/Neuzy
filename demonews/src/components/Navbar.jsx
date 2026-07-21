import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../context/Themecontext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Neuzy</Link>
        </div>

        <div className="navbar-right">
          <Searchbar />

          <Link
            to="/bookmarks"
            className="bookmark-nav-link"
            title="View Bookmarks"
          >
            🔖
          </Link>

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;