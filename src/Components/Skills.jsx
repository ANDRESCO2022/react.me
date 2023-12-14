import { useState } from 'react';
import { sliderData } from '../data/sliderDta';
import '../styles/skills.css';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/avatar.png';

export const Skills = () => {
	const [i, setI] = useState(0);
	const { t, i18n } = useTranslation('global');

	return (
		<section id="skills">
			<h2>{t('skills.SkillsTitle')}</h2>

			<div className="slider container">
				{sliderData.map((itemSlider) => (
					<span
						style={{
							'--i': i + itemSlider.id,
						}}
						key={itemSlider.id}
					>
						<img src={itemSlider.image} alt={itemSlider.textAlt} />
					</span>
				))}
			</div>
			<img className="skill_avatar" src={avatar} alt="" />
		</section>
	);
};
