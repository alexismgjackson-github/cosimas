import { NavLink } from "react-router-dom";
import "./Header.css";

import { useState } from "react";

export default function Header() {
  const activeStyle = {
    color: "#F5A56C",
    textDecoration: "underline",
  };

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

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
          >
            Cart
          </NavLink>
        </div>

        <div className="header-mobile-and-tablet-view">
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <img
              src="public/assets/icons/cart.svg"
              alt="Shopping cart icon"
              aria-label="Go to shopping cart"
            />
          </NavLink>
          <div className="hamburger-menu">
            <button className="hamburger-btn" onClick={handleClick}>
              <img
                src="public/assets/icons/hamburger.svg"
                alt="Hamburger menu icon"
                aria-label="Open or close hamburger menu"
              />
            </button>
            {toggle ? (
              <div className="hamburger-overlay">
                <div className="hamburger-content">
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
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
