import Navbar from "../components/Navbar";
import CategoryBar from "../components/Categorybar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>

      <Navbar />
      <CategoryBar />
      <main className="main-container">
        {children}
      </main>
      <Footer />

    </>
  );
}

export default MainLayout;