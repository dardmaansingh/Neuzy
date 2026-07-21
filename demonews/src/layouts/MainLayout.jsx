import Navbar from "../components/Navbar";
import CategoryBar from "../components/Categorybar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <Navbar />
      <CategoryBar />
      <main className="w-full max-w-[1280px] mx-auto px-4 py-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;