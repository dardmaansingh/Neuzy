import { useEffect } from "react";

function useInfiniteScroll(callback, isFetching = false) {
  useEffect(() => {
    function handleScroll() {
      if (isFetching) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 150) {
        callback();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, isFetching]);
}

export default useInfiniteScroll;
