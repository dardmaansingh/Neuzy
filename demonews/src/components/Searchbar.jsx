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
    <form className="flex items-center border border-[var(--border-color)] bg-[var(--bg-card)] rounded overflow-hidden" onSubmit={handleSubmit}>
      <input
        className="w-48 sm:w-64 px-3 py-2 text-sm bg-transparent outline-none text-[var(--text-main)] placeholder:text-[var(--text-muted)]"
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="bg-[#b30000] hover:bg-[#8f0000] text-white px-3 py-2 text-sm transition-colors" type="submit" aria-label="Search">
        🔍
      </button>
    </form>
  );
}

export default Searchbar;