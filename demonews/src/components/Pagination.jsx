import React from "react";

function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  return (
    <div className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`pagination-btn ${currentPage <= 1 ? "disabled" : ""}`}
      >
        ← Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`pagination-btn ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`pagination-btn ${currentPage >= totalPages ? "disabled" : ""}`}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
