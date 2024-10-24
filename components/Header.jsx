import { NavLink } from "react-router-dom";
import "./Header.css";

import { useState, useEffect } from "react";

export default function Header() {
  const activeStyle = {
    color: "#F5A56C",
    textDecoration: "underline",
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header>
      <NavLink className="logo" to="/">
        Cosima's
      </NavLink>
      <nav className="header-nav">
        <div className="header-desktop-view">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="cart-icon"
          >
            Cart
          </NavLink>
        </div>

        <div className="header-mobile-and-tablet-view">
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="cart-icon"
          >
            <img
              src="assets/icons/cart.svg"
              alt="Shopping cart icon"
              aria-label="Go to shopping cart"
            />
          </NavLink>
          <div className="hamburger-menu">
            <button className="hamburger-btn" onClick={handleClick}>
              <img
                src="assets/icons/hamburger.svg"
                alt="Hamburger menu icon"
                aria-label="Open hamburger menu"
              />
            </button>
            <div className={`hamburger-overlay ${isOpen ? "show" : "hide"} `}>
              <div className="hamburger-header">
                <button className="close-hamburger-btn" onClick={handleClick}>
                  <img
                    src="assets/icons/close-hamburger.svg"
                    alt="Close menu icon"
                    aria-label="Close hamburger menu"
                  />
                </button>
              </div>
              <div className="hamburger-content">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  onClick={handleClick}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/menu"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  onClick={handleClick}
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>{" "}
        </div>
      </nav>
    </header>
  );
}
