/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/footer.css';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
	return (
		<footer>
			<ul className="linksPage">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer_socials">
				<a href="https://www.facebook.com/andres.cordoba.560">
					<BsFacebook />
				</a>
				<a href="hhttps://www.linkedin.com/in/andres-cordoba-sistemas/">
					<FaLinkedinIn />
				</a>
				<a href="https://github.com/ANDRESCO2022">
					<FaGithub />
				</a>
			</div>
			<div className="footer_copyright">
				<small>&copy; Andresco2022 all right reserved.</small>
			</div>
		</footer>
	);
};
