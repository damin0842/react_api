import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header__left">
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>

      <h1 className="header__center">
        <Link to="/">API site</Link>
      </h1>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/Youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/Movie">Movie</Link>
          </li>
          <li>
            <Link to="/Unsplash">Unsplash</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
