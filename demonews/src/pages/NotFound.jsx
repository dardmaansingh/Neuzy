import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function NotFound() {
  return (
    <MainLayout>
      <div className="text-center py-24 px-4">
        <h1 className="text-7xl font-serif font-bold text-[#b30000] mb-2">404</h1>
        <h2 className="font-serif text-2xl font-bold mb-3">Page Not Found</h2>
        <p className="text-[var(--text-muted)] text-base mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#b30000] hover:bg-[#8f0000] text-white font-semibold px-6 py-3 rounded shadow transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </MainLayout>
  );
}

export default NotFound;