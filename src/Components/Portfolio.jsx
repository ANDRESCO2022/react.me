import React from "react";
import "../styles/portfolio.css";
import Ecommerce from "../assets/ecommerce.png";
import Pokedesk from "../assets/pokedesk.png";
import Rick from "../assets/rick.png";
import { BsGithub } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Ecommerce} alt="ecommerce" />
          </div>
          <h3> Ecommerce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            perferendis.
          </p>
          <a
            href="https://github.com/ANDRESCO2022/ecommers.git"
            className="btn"
          >
            <BsGithub />
          </a>
          <a
            href="https://first-ecommers.netlify.app/"
            className="btn btn-primary"
          >
            Demo/ <SiWebmoney />
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Pokedesk} alt="pokedesk" />
          </div>
          <h3> React Pokedesk</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            perferendis.
          </p>
          <a
            href="https://github.com/ANDRESCO2022/pokedesk.git"
            className="btn"
          >
            <BsGithub />
          </a>
          <a
            href="https://yourpokedesk.netlify.app"
            className="btn btn-primary"
          >
            Demo/
            <SiWebmoney />
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Rick} alt="rick" />
          </div>
          <h3> Rck and Morty</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            perferendis.
          </p>
          <a
            href="https://github.com/ANDRESCO2022/RickAndMorty.git"
            className="btn"
          >
            <BsGithub />
          </a>
          <a
            href="https://rickandmorthy-app.netlify.app/"
            className="btn btn-primary"
          >
            Demo/ <SiWebmoney />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
