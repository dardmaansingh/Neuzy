import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../context/Themecontext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-card)] border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4 h-[75px] flex items-center justify-between">
        <div className="text-3xl font-serif font-bold text-[#b30000] hover:text-[#8f0000] tracking-tight transition-colors">
          <Link to="/">Neuzy</Link>
        </div>

        <div className="flex items-center gap-4">
          <Searchbar />

          <Link
            to="/bookmarks"
            className="text-xl p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="View Bookmarks"
          >
            🔖
          </Link>

          <button
            className="w-10 h-10 border border-[var(--border-color)] bg-[var(--bg-card)] rounded-lg text-base flex items-center justify-center hover:opacity-80 transition-opacity"
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