import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <div className="navbar-logo">
          <Link to="/">Neuzy</Link>
        </div>

        <div className="navbar-right">

          <Searchbar />

          <button
            className="theme-btn"
            aria-label="Toggle Theme"
          >
            🌙
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;