import React from "react";
import "../styles/navbar.css";
import search from "../assets/search.png";

function Navbar(props) {
  const { handleLoginClick } = props;

  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <li>
          <a href="#">Logo</a>
        </li>
        <img src={search} id="search" />
        <input id="search-bar" type="text" />
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Rewards</a>
        </li>
        <li>
          <a href="#" onClick={() => handleLoginClick()}>
            Log In
          </a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
