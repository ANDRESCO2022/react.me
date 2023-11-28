import '../styles/portfolio.css';
import { portfolioData } from '../data/portfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { SiWebmoney } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

export const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
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
							<h3>{itemData.title}</h3>
							<p>{itemData.description}</p>
							<a href={itemData.UrlGitHub} className="btn">
								<BsGithub />
							</a>
							<a href={itemData.UrlDemo} className="btn btn-primary">
								Demo/ <SiWebmoney />
							</a>
						</article>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
