import '../styles/portfolio.css';
import { portfolioData } from '../data/portfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { SiWebmoney } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import global from '../translations/en/global.json';

export const Portfolio = () => {
	const { t, i18n } = useTranslation('global');

	return (
		<section id="portfolio">
			<h5>{t('portfolio.PortfolioTitle')}</h5>
			<h2>{t('portfolio.PortfolioTitles')}</h2>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={false}
				centerInsufficientSlides={true}
				slidesPerView={3}
				loop={true}
				initialSlide={1}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
					slideShadows: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					300: {
						slidesPerView: 1,
						spaceBetween: 5,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					680: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
				}}
				freeMode={true}
				pagination={{ clickable: true, dynamicBullets: true }}
				modules={[FreeMode, Pagination, Autoplay, EffectCoverflow]}
				className=" container portfolio_container"
			>
				{portfolioData.map((itemData) => (
					<SwiperSlide key={itemData.id}>
						<article className="portfolio_item">
							<div className="portfolio_item-image">
								<img src={itemData.image} alt={itemData.textAlt} />
							</div>
							<h3>{t(`portfolio.portfolioDataLanguaje.${itemData.title}.title`)}</h3>
							<h3>
								{t(`portfolio.portfolioDataLanguaje.${itemData.title}.description`)}
							</h3>
							<a href={itemData.UrlGitHub} className="btn">
								<BsGithub />
							</a>
							<a href={itemData.UrlDemo} className="btn btn-primary">
								Demo/ <SiWebmoney />
							</a>
						</article>
					</SwiperSlide>
				))}

				{/* {portfolioData.map((itemData, id) => (
					<SwiperSlide key={itemData.id}>
						<article className="portfolio_item">
							<div className="portfolio_item-image">
								<img
									src={t(`portfolio.projects.${itemData.id}.image`)}
									alt={itemData.textAlt}
								/>
							</div>
							<h3>{t(`portfolio.projects.${itemData.id.valueOf(id)}.title`)}</h3>
							<p>{t(`portfolio.projects.${itemData.id}.description`)}</p>
							<a href={itemData.UrlGitHub} className="btn">
								<BsGithub />
							</a>
							<a href={itemData.UrlDemo} className="btn btn-primary">
								Demo/ <SiWebmoney />
							</a>
						</article>
					</SwiperSlide>
				))} */}
			</Swiper>
		</section>
	);
};
