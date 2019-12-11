import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <a href="#a">Logo</a>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/produtos">Produto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
