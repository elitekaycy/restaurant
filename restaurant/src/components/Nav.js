import React from "react";
import LogoName from "../images/LogoName.svg";
function Nav() {
  return (
    <nav className="nav">
      <img
        src={LogoName}
        alt="logoname"
        width="200px"
        height="auto"
        id="logo-img"
      />
      <ul className="list" id="list">
        <li>
          <a href="/App">Home</a>
        </li>
        <li>
          <a href="./Menu.js">Menu</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
      </ul>
      <h1 className="welcome">
        Welcom to KITCHEN <span id="kk">KING!</span>
      </h1>
      <br /> <br />
    </nav>
  );
}

export default Nav;
