import React from 'react';
import '../styles/header.css';
import { Socials, Nav } from '../Components';

export const Header = () => {
	return (
		<header>
			<Nav />
			<div className="container header_container">
				<h5>Hello I'm</h5>
				<h1>Carlos Andres Cordoba</h1>
				<h5 className="text-light">Systems Engineer, FullStack Developer</h5>
				<Socials />
				<a href="#contact" className="scroll_down">
					Scroll Down
				</a>
			</div>
			<div></div>
		</header>
	);
};
