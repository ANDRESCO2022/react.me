import React from "react";
import "../styles/header.css";
import Cv from "../Components/Cv"
import Socials from "../Components/Socials"
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Carlos Andres Cordoba</h1>
        <h5 className="text-light">
          Systems Engineer, FullStack Developer 
        </h5>
        <Cv />

        <Socials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
