import React from "react";

function ErrorMessage({ message = "Something went wrong while fetching news.", onRetry }) {
  return (
    <div className="error">
      <h2>Oops!</h2>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-btn">
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
