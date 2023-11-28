import React from 'react';
import CV from '../assets/Cv-en.pdf';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const Cv = () => {
	return (
		<div className="cv">
			<a href={CV} download className="btn ">
				Download Cv
			</a>

			<a href="#contact" className="btn btn-primary">
				Let's Talk
			</a>
		</div>
	);
};
