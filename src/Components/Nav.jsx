/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { RiUserSearchLine } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageAltDetail } from 'react-icons/bi';
import { BsBookFill } from 'react-icons/bs';
import { useState } from 'react';

export const Nav = () => {
	const [active, setActive] = useState('#');
	return (
		<nav>
			<a
				href="#"
				onClick={() => setActive('#')}
				className={active === '#' ? 'active' : ''}
				tooltip="Home"
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActive('#about')}
				className={active === '#about' ? 'active' : ''}
				tooltip="About"
			>
				<RiUserSearchLine />
			</a>
			<a
				href="#services"
				onClick={() => setActive('#services')}
				className={active === '#services' ? 'active' : ''}
				tooltip="Services"
			>
				<RiServiceLine />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActive('#portfolio')}
				className={active === '#portfolio' ? 'active' : ''}
				tooltip="Portfolio"
			>
				<BsBookFill />
			</a>
			<a
				href="#skills"
				onClick={() => setActive('#skills')}
				className={active === '#skills' ? 'active' : ''}
				tooltip="Skills"
			>
				<BiBook />
			</a>
			<a
				href="#experience"
				onClick={() => setActive('#experience')}
				className={active === '#experience' ? 'active' : ''}
				tooltip="Experience"
			>
				<BiBook />
			</a>
			<a
				href="#contact"
				onClick={() => setActive('#contact')}
				className={active === '#contact' ? 'active' : ''}
				tooltip="Contact"
			>
				<BiMessageAltDetail />
			</a>
		</nav>
	);
};
