import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { BookSearch } from "../book/BookSearch";
import { useEffect } from "react";

export const NavBar = (searchTermState) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
  }, [searchTermState])
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo-link">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>
        <button
          className="navbar__menu-btn"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span className="navbar__menu-icon"></span>
        </button>
      </div>
      <ul className={`navbar__list ${showMenu ? "navbar__list--show" : ""}`}>
        <li className="navbar__item">
          <Link className="nav-link" to="/books">
            Books
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="nav-link" to="/mybooks">
            My Books
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="nav-link" to="/bookform">
            Create Book
          </Link>
        </li>
        <li className="navbar__item">
          <BookSearch />
        </li>
        {localStorage.getItem("lu_token") !== null ? (
          <li className="nav-item">
            <button
              className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("lu_token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
