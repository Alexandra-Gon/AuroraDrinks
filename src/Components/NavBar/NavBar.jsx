import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navBar">
      <div className="navBarContainer">
      <div className="logoAndTextNavbar">
        <Link to="/">
          <img
            className="logo"
            src={require("../../Img/logo.png")}
            alt="Logo"
          />
        </Link>
        <p>
          The art of making beverages full of life | Expression - Taste - Life | High-quality beverages
        </p>
      </div>
      <nav>
        <ul className="linkNavbarContainer">
          <Link className="linkNavbar" to="/">DRINKS</Link>
          <Link className="linkNavbar" to="/about">ABOUT</Link>
          <Link className="linkNavbar" to="/blog">BLOG</Link>
          <Link className="linkNavbar" to="/contact">CONTACT</Link>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default NavBar;
