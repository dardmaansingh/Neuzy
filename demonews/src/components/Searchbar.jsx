function Searchbar() {
  return (
    <form className="search-form">

      <input
        className="search-input"
        type="text"
        placeholder="Search news..."
      />

      <button
        className="search-btn"
        type="submit"
      >
        🔍
      </button>

    </form>
  );
}

export default Searchbar;