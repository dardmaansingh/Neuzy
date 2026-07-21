import React from "react";

function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="latest-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="news-card skeleton-card">
          <div className="skeleton skeleton-img" />
          <div className="skeleton skeleton-text-short" />
          <div className="skeleton skeleton-text-title" />
          <div className="skeleton skeleton-text-line" />
          <div className="skeleton skeleton-text-line-half" />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
