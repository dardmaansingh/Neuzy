import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <Link to="/">Neuzy</Link>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/category/general">General</Link>
          <Link to="/category/business">Business</Link>
          <Link to="/category/technology">Technology</Link>
          <Link to="/category/sports">Sports</Link>
        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Neuzy. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;