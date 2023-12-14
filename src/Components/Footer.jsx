import '../styles/footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t, i18n } = useTranslation('global');
	return (
		<footer>
			<ul className="linksPage">
				<li>
					<a href="#">{t('footer.FooterHome')}</a>
				</li>
				<li>
					<a href="#about">{t('footer.FooterAbout')}</a>
				</li>
				<li>
					<a href="#services">{t('footer.FooterServices')}</a>
				</li>
				<li>
					<a href="#experience">{t('footer.FooterExperience')}</a>
				</li>
				<li>
					<a href="#portfolio">{t('footer.FooterPortfolio')}</a>
				</li>
				<li>
					<a href="#contact">{t('footer.FooterContact')}</a>
				</li>
				<li>
					<a href="#skills">{t('footer.FooterSkill')}</a>
				</li>
			</ul>
			<div className="footer_socials">
				<a href="hhttps://www.linkedin.com/in/andres-cordoba-sistemas/" target="_blank">
					<FaLinkedinIn />
				</a>
				<a href="https://github.com/ANDRESCO2022" target="_blank">
					<FaGithub />
				</a>
			</div>
			<div className="footer_copyright">
				<small>&copy;{t('footer.FooterRigt')} </small>
			</div>
		</footer>
	);
};
