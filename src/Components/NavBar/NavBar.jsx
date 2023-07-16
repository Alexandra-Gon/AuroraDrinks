import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header
      className="navbar p-0 mw-100"
      style={{ backgroundColor: "#440000" }}
    >
      <div className="container-fluid row m-0 p-0">
        <Link className="col-2 img-fluid rounded mx-auto d-block" to="/">
          <img
            className="logo"
            src={require("../../Img/logo.png")}
            alt="Logo"
          />
        </Link>

        <div className="text-center text-white col p-0">
          <p className="mt-3 mb-1 mr-3 d-block p-2">
            <b>AURORA DRINKS</b> <br />
            <br /> The art of making beverages full of life | Expression - Taste
            - Life | High-quality beverages
          </p>
          <nav className="nav row">
            <ul className="m-0 mb-0 col-8 col-sm-10 p-0 mt-5">
              <Link
                to="/"
                className="link link-underline link-underline-opacity-0 link-light"
              >
                DRINKS
              </Link>
              <Link
                to="/about"
                className="link link-underline link-underline-opacity-0 link-light"
              >
                ABOUT
              </Link>
              <Link
                to="/blog"
                className="link link-underline link-underline-opacity-0 link-light"
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="link link-underline link-underline-opacity-0 link-light"
              >
                CONTACT
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
