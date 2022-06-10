import React from "react";
import "../styles/about.css";
import ME_ABOUT from "../assets/80-removebg-preview.png";
import { FaAward } from "react-icons/fa";
import { BsFolderPlus } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2> About Me</h2>

      <div className="container about_container">
        <div className="about__me">
          <img src={ME_ABOUT} alt="about-img" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5> Experience</h5>
              <small>3 years of experience</small>
            </article>
            <article className="about_card">
              <BsFolderPlus className="about_icon" />
              <h5> Projects</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            dolorem itaque velit voluptatem reiciendis, vel quaerat quae
            eligendi, ullam deserunt quibusdam amet eos placeat odit accusamus,
            unde sunt delectus possimus? ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt expedita adipisci quae eum. Officiis
            error quaerat minima velit, commodi fugiat.
          </p>
        </div>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  );
};

export default About;
