import "../styles/Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/denim">Denim</Link>
            <Link to="/shop" className="orange">
              The Gift Shop
            </Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="logo">
          <h1 className="heading-1">DosTonShop</h1>
        </div>

        <div className="right">
          <div className="search">
            <i className="search icon"></i>
            <button className="sch-btn">Search</button>
          </div>

          <div className="right-buttons">
            <button>
              <Link to="/login">Log In</Link>
            </button>
            <button>
              <Link to="/sign-up">Sign-Up</Link>
            </button>
            <i className="shopping basket icon"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
