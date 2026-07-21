import React from "react";

function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-4 animate-pulse">
          <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-md mb-4" />
          <div className="w-1/3 h-5 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
          <div className="w-11/12 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
          <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
