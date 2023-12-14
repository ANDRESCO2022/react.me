import '../styles/experince.css';
import alcaldia from '../assets/Alcaldia.png';
import todosistemas from '../assets/todosistemas.png';
import { useTranslation } from 'react-i18next';

export const Experience = () => {
	const { t, i18n } = useTranslation('global');
	return (
		<section id="experience">
			<h2>{t('experience.ExperienceTitle')}</h2>
			<div className="container experience_container">
				<div className="experience_cards">
					<article className="experience_card">
						<a href="https://www.pasto.gov.co/" title="Page • Pasto" target="_blank">
							<img src={alcaldia} alt="logo-alcaldia" className="experience_card-img" />
						</a>
						<h3>{t('experience.ExperienceSistemTitle')}</h3>
						<hr />
						<p>{t('experience.ExperienceSistem')}</p>
					</article>
					<article className="experience_card">
						<a
							href="https://www.todosistemassti.co/"
							title="Page • Todositemas"
							target="_blank"
						>
							<img
								src={todosistemas}
								alt="logo-todositemas"
								className="experience_card-img"
							/>
						</a>
						<h3>{t('experience.ExperienceSoftwareTitle')}</h3>
						<hr />
						<p>{t('experience.ExperienceSoftware')}</p>
					</article>
				</div>
			</div>
		</section>
	);
};
