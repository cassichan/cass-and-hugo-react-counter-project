import React from "react";
import "./menubar.css";

export default function Menubar() {
  return (
    <nav id="menubar">
      <p id="menubar-text">
        <li className="nav-item">About</li>
        <li className="nav-item">News</li>
        <li className="nav-item">Photos</li>
        <li className="nav-item">Contact</li>
      </p>
      <p id="menubar-pic-container">
        <img
          id="menubar-cat"
          src="cat-3374422_960_720.jpeg"
          alt="A striped grey cat with bright yellow eyes"
        ></img>
      </p>
    </nav>
  );
}
