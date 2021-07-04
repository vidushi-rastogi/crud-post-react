import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Post<span>Watch</span></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/delete">Remove</Link>
        <Link to="/update">Update</Link>
        <Link to="/create" className="addPost">+</Link>
      </div>
    </nav>
  );
}

export default Navbar;
