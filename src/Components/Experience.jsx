import React from "react";
import "../styles/experince.css";
// import { IoLogoHtml5 } from "react-icons/io";
// import { SiJavascript } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";

// import { SiRedux } from "react-icons/si";
// import { DiPostgresql } from "react-icons/di";
// import { DiNodejs } from "react-icons/di";
// import { AiOutlineConsoleSql } from "react-icons/ai";
import react from "../assets/react.png"
import html from "../assets/html.png"
import javascript from "../assets/Js.png"
import Redux from "../assets/redux.png"
import css from "../assets/css.png"
import Postgres from "../assets/postgres.png"
import Node from "../assets/node.png"
import Sql from "../assets/sql.png"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} alt="experience_details-icon" />
              <h4>HTML</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <img src={javascript} alt="experience_details-icon" />
              <h4>Javascript</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <img src={react} alt="experience_details-icon" />
              <h4>React</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <img src={Redux} alt="experience_details-icon" />
              <h4>Redux</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <img src={css} alt="experience_details-icon" />
              <h4>Css</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={Postgres} alt="experience_details-icon" />
              <h4>Postgres</h4>
              <small className="text-ligth">Basic</small>
            </article>
            <article className="experience_details">
              <img src={Node} alt="experience_details-icon" />
              <h4>Node.js</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <img src={Sql} alt="experience_details-icon" />
              <h4>Sql</h4>
              <small className="text-ligth">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
