import '../styles/experince.css';
import alcaldia from '../assets/Alcaldia.png';
import todosistemas from '../assets/todosistemas.png';

export const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience_container">
				<div className="experience_cards">
					<article className="experience_card">
						<a href="https://www.pasto.gov.co/">
							<img src={alcaldia} alt="logo-alcaldia" className="experience_card-img" />
						</a>
					</article>
					<article className="experience_card">
						<a href="https://www.todosistemassti.co/">
							<img
								src={todosistemas}
								alt="logo-todositemas"
								className="experience_card-img"
							/>
						</a>
					</article>
				</div>
			</div>
		</section>
	);
};
