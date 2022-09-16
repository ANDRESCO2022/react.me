import React from 'react';
import '../styles/about.css';
import ME_ABOUT from '../assets/pefil 2.jpg';
import FaAward from '../assets/univeridad.jfif';
import BsFolderPlus from '../assets/logo_academlo 5.jpg';
import BsFundation from '../assets/fimlm.png';
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
							<img src={FaAward} alt="about_icon" />
							<h5> University Education</h5>
						</article>
						<article className="about_card">
							<img src={BsFolderPlus} alt="about_icon" />

							<h5> Studies</h5>
						</article>
						<article className="about_card">
							<img src={BsFundation} alt="about_icon" />
							<h5> Studies</h5>
						</article>
					</div>
					<p>
						Web developer, systems engineer with practice in technologies such as Javascript, Html, React.js, React-redux, Css; Backend development in
						Node,js, SQL database query, Postgres, MongoDB.
					</p>
				</div>
				<a href="#contact" className="btn btn-primary">
					Let's Talk
				</a>
			</div>
		</section>
	);
};

export default About;
