import React from "react";

import { Link, NavLink } from "react-router-dom";

import navImage from "../../assets/image.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-info">
        <h1>crud app</h1>
        <img src={navImage} alt="" />
      </div>
      <ul className="links">
        <li className="nav-item">
          <NavLink exact to="/" className="link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" className="link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contact" className="link">
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="/users/add" className="links link-btn">
        Add User
      </Link>
    </nav>
  );
};

export default Navbar;
