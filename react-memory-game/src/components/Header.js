import React from "react";

const Header = () => (

<nav className="navbar navbar-expand-sm bg-success navbar-dark fixed-top justify-content-center">

  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link">React Memory Game</a>
    </li>
    <li className="nav-item active">
      <a className="nav-link">Click an image to begin!</a>
    </li>
    <li className="nav-item active">
      <a className="nav-link">Current Score: 0 | Best Score: 0</a>
    </li>
  </ul>
</nav>

);

export default Header;
