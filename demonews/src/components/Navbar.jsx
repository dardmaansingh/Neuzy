import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <Link to="/" >Home</Link> |{" "}
            <Link to="/category/general" >Category</Link> |{" "}
            <Link to="/trending" >Trending</Link> |{" "}
            <Link to="/bookmarks" >Bookmarks</Link> |{" "}
            <Link to="/about" >About</Link>
        </nav>
    );
}

export default Navbar;