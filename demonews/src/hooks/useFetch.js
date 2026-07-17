import { useState, useEffect } from "react";

function useFetch(fetchFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFunction();

        setData(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [fetchFunction]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;