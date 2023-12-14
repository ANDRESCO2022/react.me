import '../styles/nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { RiUserSearchLine } from 'react-icons/ri';
import { BiMessageAltDetail } from 'react-icons/bi';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { VscBriefcase } from 'react-icons/vsc';
import { GrServices } from 'react-icons/gr';

export const Nav = () => {
	const [active, setActive] = useState('#');
	const { t, i18n } = useTranslation('global');
	return (
		<nav>
			<a
				href="#"
				onClick={() => setActive('#')}
				className={active === '#' ? 'active' : ''}
				tooltip={t('nav.NavHome')}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActive('#about')}
				className={active === '#about' ? 'active' : ''}
				tooltip={t('nav.NavAbout')}
			>
				<RiUserSearchLine />
			</a>
			<a
				href="#services"
				onClick={() => setActive('#services')}
				className={active === '#services' ? 'active' : ''}
				tooltip={t('nav.NavServices')}
			>
				<GrServices />
			</a>
			<a
				href="#experience"
				onClick={() => setActive('#experience')}
				className={active === '#experience' ? 'active' : ''}
				tooltip={t('nav.NavExperience')}
			>
				<VscBriefcase />
			</a>
			<a
				href="#skills"
				onClick={() => setActive('#skills')}
				className={active === '#skills' ? 'active' : ''}
				tooltip={t('nav.NavSkills')}
			>
				<GiSkills />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActive('#portfolio')}
				className={active === '#portfolio' ? 'active' : ''}
				tooltip={t('nav.NavPortfolio')}
			>
				<GrProjects />
			</a>
			<a
				href="#contact"
				onClick={() => setActive('#contact')}
				className={active === '#contact' ? 'active' : ''}
				tooltip={t('nav.NavContact')}
			>
				<BiMessageAltDetail />
			</a>
		</nav>
	);
};
