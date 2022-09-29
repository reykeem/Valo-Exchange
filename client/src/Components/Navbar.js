import React from "react";
import "../styles/navbar.css";
import search from "../assets/search.png";

function Navbar(props) {
  const { handleLoginClick, handleSignupClick, handleLoggedIn } = props;

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
          <div className="log-in">
            <a href="#" onClick={() => handleLoginClick()} id="login-link">
              Log In
            </a>
            <a href="#" onClick={() => handleSignupClick()} id="signup-link">
              Sign Up
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
