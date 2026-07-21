import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-[var(--border-color)] bg-[var(--bg-card)] transition-colors">
      <div className="w-full max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center gap-6">
        <div className="font-serif text-2xl font-bold text-[#b30000]">
          <Link to="/">Neuzy</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-muted)]">
          <Link to="/" className="hover:text-[#b30000] transition-colors">Home</Link>
          <Link to="/category/general" className="hover:text-[#b30000] transition-colors">General</Link>
          <Link to="/category/business" className="hover:text-[#b30000] transition-colors">Business</Link>
          <Link to="/category/technology" className="hover:text-[#b30000] transition-colors">Technology</Link>
          <Link to="/category/sports" className="hover:text-[#b30000] transition-colors">Sports</Link>
        </div>

        <div className="w-full border-t border-[var(--border-color)] pt-4 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Neuzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;