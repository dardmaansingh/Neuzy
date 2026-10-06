function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-2 my-12">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 text-sm border border-[var(--border-color)] bg-[var(--bg-card)] rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#b30000] hover:text-white transition-colors"
      >
        ← Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm border border-[var(--border-color)] rounded transition-colors ${
            currentPage === page
              ? "bg-[#b30000] text-white font-bold"
              : "bg-[var(--bg-card)] hover:bg-[#b30000] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 text-sm border border-[var(--border-color)] bg-[var(--bg-card)] rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#b30000] hover:text-white transition-colors"
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
