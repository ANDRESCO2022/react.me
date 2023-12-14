import '../styles/header.css';
import { Socials, Nav } from '../Components';
import { useTranslation } from 'react-i18next';
import ME_ABOUT from '../assets/pefil 2.png';
export const Header = () => {
	const { t, i18n } = useTranslation('global');

	return (
		<header>
			<Nav />
			<div className="container header_container">
				<h5>{t('header.Hello')}</h5>
				<h1>Carlos Andrés Córdoba</h1>
				<div className="header__me">
					<img src={ME_ABOUT} alt="header-img" />
					<h5 className="text-light">{t('header.Profession')}</h5>
					<Socials />
				</div>
				<a href="#contact" className="scroll_down">
					{t('header.ButtonScroll')}
				</a>
			</div>
		</header>
	);
};
