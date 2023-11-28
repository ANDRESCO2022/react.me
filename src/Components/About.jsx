import React from 'react';
import '../styles/about.css';
import ME_ABOUT from '../assets/pefil 2.jpg';
import University from '../assets/Logo_de_Uniremington.png';
import Bootcam from '../assets/logo_academlo.png';
import FIMLM from '../assets/fimlm.png';
export const About = () => {
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
							<a
								href="https://www.uniremington.edu.co/"
								title="university • Uniremington"
							>
								<img className="about_card-img" src={University} alt="Uniremington" />
							</a>
							<h5> University Education</h5>
						</article>
						<article className="about_card">
							<a href="https://www.academlo.com/" title="Campus • Academlo">
								<img className="about_card-img" src={Bootcam} alt="Acaddemlo" />
							</a>
							<h5> Web full stacks</h5>
						</article>
						<article className="about_card">
							<a href="https://fimlm.org/Campus" title="Campus • FIMLM">
								<img className="about_card-img" src={FIMLM} alt="Campus FIMLM" />
							</a>

							<h5> Web development</h5>
						</article>
					</div>
					<p>
						Web developer, systems engineer with practice in technologies such as
						Javascript, Html, React.js, React-redux, Css; Backend development in Node,js,
						SQL database query, Postgres, MongoDB.
					</p>
				</div>
				<a href="#contact" className="btn btn-primary">
					Let's Talk
				</a>
			</div>
		</section>
	);
};
