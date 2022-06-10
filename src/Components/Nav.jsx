/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/nav.css";
 import  {AiOutlineHome} from "react-icons/ai"
 import {RiUserSearchLine} from "react-icons/ri"
 import { BiBook } from "react-icons/bi";
 import { RiServiceLine } from "react-icons/ri";
 import { BiMessageAltDetail } from "react-icons/bi";
 import { BsBookFill } from "react-icons/bs";
 import { useState } from "react";

  
const Nav = () => {
const [active, setActive] = useState('#') 
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <RiUserSearchLine />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <BsBookFill />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};




export default Nav;
