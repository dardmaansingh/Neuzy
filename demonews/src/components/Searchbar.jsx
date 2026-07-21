import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="search-btn" type="submit" aria-label="Search">
        🔍
      </button>
    </form>
  );
}

export default Searchbar;