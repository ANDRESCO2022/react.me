import React from "react";
import "../styles/experince.css";
import { IoLogoHtml5 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";

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
              <IoLogoHtml5 className="experience_details-icon" />
              <h4>HTML</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">            
              <SiJavascript className="experience_details-icon" />
              <h4>Javascript</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <SiReact className="experience_details-icon" />
              <h4>React</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <SiRedux className="experience_details-icon" />
              <h4>Redux</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icon" />
              <h4>Css</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <DiPostgresql className="experience_details-icon" />
              <h4>Postgres</h4>
              <small className="text-ligth">Basic</small>
            </article>
            <article className="experience_details">
              <DiNodejs className="experience_details-icon" />
              <h4>Node</h4>
              <small className="text-ligth">Intermediate</small>
            </article>
            <article className="experience_details">
              <AiOutlineConsoleSql className="experience_details-icon" />
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
