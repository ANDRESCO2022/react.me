import React from 'react';
import '../styles/services.css';
import { GiCheckMark } from 'react-icons/gi';

const Services = () => {
	return (
		<section id="services">
			<h5> What i Offer</h5>
			<h2> Services</h2>
			<div className="container services_container">
				<article className="service">
					<div className="service_head">
						<h3> Developer Backend</h3>
					</div>
					<ul className="service_list">
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>Creation of Api rest to integrate applications</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>connection of components in the microservices architecture</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>Designing and maintaining backend connected applications</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service_head">
						<h3>Developer Frontend-UI Design</h3>
					</div>
					<ul className="service_list">
						<li>
							<GiCheckMark className="service_list-icon" />
							<p>Design and develop web pages</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />

							<p>Design and development of e-commerce in the networks.</p>
						</li>
						<li>
							<GiCheckMark className="service_list-icon" />

							<p>Creation of web applications for different services</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
