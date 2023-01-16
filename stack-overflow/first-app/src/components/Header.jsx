import React from "react";
import "../styles/header.css";
import "../styles/main.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src="./images/stack-logo.png" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#" className="smallText">
                About
              </a>
            </li>
            <li>
              <a href="#" className="smallText">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="smallText">
                For Teams
              </a>
            </li>
          </ul>
        </nav>
        <input type="text" placeholder=" Search..." />
        <div id="btns">
          <button className="lightBtn smallText">Log In</button>
          <button className="blueBtn smallText">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
