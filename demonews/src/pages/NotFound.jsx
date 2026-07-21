import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function NotFound() {
  return (
    <MainLayout>
      <div className="error error-padding-xlarge">
        <h1 className="error-404-code">404</h1>
        <h2>Page Not Found</h2>
        <p className="error-margin-text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="error-404-btn">
          Return to Homepage
        </Link>
      </div>
    </MainLayout>
  );
}

export default NotFound;