import React from "react";

function ErrorMessage({ message = "Something went wrong while fetching news.", onRetry }) {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="font-serif text-3xl font-bold text-[#b30000] mb-3">Oops!</h2>
      <p className="text-[var(--text-muted)] text-base max-w-md mx-auto">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-5 py-2.5 bg-[#b30000] hover:bg-[#8f0000] text-white font-medium text-sm rounded shadow transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
