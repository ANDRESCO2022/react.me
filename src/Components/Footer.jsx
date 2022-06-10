/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/footer.css";
import {BsFacebook} from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return <footer>
  <ul className="linksPage">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
  </ul>
  <div className = "footer_socials">
  <a href="https://facebook.com"><BsFacebook/></a>
  <a href="https://linkedIn.com"><FaLinkedinIn/></a>
  </div>
  <div className = "footer_copyright">
  <small>&copy; Andresco2022 all right reserved.</small>

  </div>
  
  </footer>;
};

export default Footer;