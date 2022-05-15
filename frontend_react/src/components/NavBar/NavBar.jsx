import React from "react";

import { images } from "../../constants";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {["home", "about", "contact", "work", "skills"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
