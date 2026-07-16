import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import Bookmark from "./pages/Bookmark";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;