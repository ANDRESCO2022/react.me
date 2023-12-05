import React from 'react';

import { FaLinkedinIn } from 'react-icons/fa6';
import CV from '../assets/Carlos Andres Cordoba Rodriguez.pdf';
import { VscGithub } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

export const Socials = () => {
	const { t, i18n } = useTranslation('global');
	return (
		<div className="header_socials">
			<a href="https://www.linkedin.com/in/andres-cordoba-sistemas/" target="_blank">
				<FaLinkedinIn className="header_social-icon" />
			</a>
			<a href="https://github.com/ANDRESCO2022" target="_blank">
				<VscGithub className="header_social-icon" />
			</a>
			<a href={CV} download className="btn " target="_blank">
				{t('social.SocialButtonCv')}
			</a>
		</div>
	);
};
