import React from 'react';
import '../styles/about.css';
import ME_ABOUT from '../assets/pefil 2.jpg';
import University from '../assets/Logo_de_Uniremington.png';
import Bootcam from '../assets/logo_academlo.png';
import FIMLM from '../assets/fimlm.png';
import { useTranslation } from 'react-i18next';
export const About = () => {
	const { t, i18n } = useTranslation('global');
	return (
		<section id="about">
			<h5>{t('about.AboutTitle')}</h5>
			<h2>{t('about.AboutTitles')}</h2>

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
								target="_blank"
							>
								<img className="about_card-img" src={University} alt="Uniremington" />
							</a>
							<h5> {t('about.AboutRemington')}</h5>
						</article>
						<article className="about_card">
							<a
								href="https://www.academlo.com/"
								target="_blank"
								title="Campus • Academlo"
							>
								<img className="about_card-img" src={Bootcam} alt="Acaddemlo" />
							</a>
							<h5>{t('about.AboutBootcam')}</h5>
						</article>
						<article className="about_card">
							<a href="https://fimlm.org/Campus" title="Campus • FIMLM" target="_blank">
								<img className="about_card-img" src={FIMLM} alt="Campus FIMLM" />
							</a>

							<h5> {t('about.AboutFIMLM')}</h5>
						</article>
					</div>
					<p>{t('about.AboutDescriptionProfile')}</p>
				</div>
				<a href="#contact" className="btn btn-primary">
					{t('about.AboutTalk')}
				</a>
			</div>
		</section>
	);
};
