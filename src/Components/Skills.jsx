import { useState } from 'react';
import { sliderData } from '../data/sliderDta';
import '../styles/skills.css';

export const Skills = () => {
	const [i, setI] = useState(0);

	return (
		<section id="skills">
			<h2>What Skills I have</h2>

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
		</section>
	);
};
