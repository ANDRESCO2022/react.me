import '../styles/services.css';
import { GiCheckMark } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

export const Services = () => {
	const { t, i18n } = useTranslation('global');
	return (
		<section id="services">
			<h5> {t('services.ServicesTitle')}</h5>
			<h2> {t('services.ServicesTitles')}</h2>
			<div className="container services_container">
				<article className="service">
					<div className="service_head">
						<h3>{t('services.ServicesBack.title')}</h3>
					</div>
					<ul className="service_list">
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>{t('services.ServicesBack.listOne')}</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>{t('services.ServicesBack.listTwo')}</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>{t('services.ServicesBack.listThree')}</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service_head">
						<h3>{t('services.ServicesFront.title')}</h3>
					</div>
					<ul className="service_list">
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>{t('services.ServicesFront.listOne')}</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />

							<p>{t('services.ServicesFront.listTwo')}</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />

							<p>{t('services.ServicesFront.listThree')}</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};
