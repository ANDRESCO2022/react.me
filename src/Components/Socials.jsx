import React from 'react';

import { FaLinkedinIn } from 'react-icons/fa6';
import CV from '../assets/Carlos Andres Cordoba Rodriguez.pdf';
import { VscGithub } from 'react-icons/vsc';

export const Socials = () => {
	return (
		<div className="header_socials">
			<a href="https://www.linkedin.com/in/andres-cordoba-sistemas/">
				<FaLinkedinIn className="header_social-icon" />
			</a>
			<a href="https://github.com/ANDRESCO2022">
				<VscGithub className="header_social-icon" />
			</a>
			<a href={CV} download className="btn ">
				Download Cv
			</a>
		</div>
	);
};
