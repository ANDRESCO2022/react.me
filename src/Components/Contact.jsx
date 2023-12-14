import '../styles/contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
	const { t, i18n } = useTranslation('global');
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_acjrze5',
			'template_vtj7z8d',
			form.current,
			'Y21PJh6ZQOjl5l8QO'
		);
		e.target.reset();
	};

	return (
		<section id="contact">
			<h5> {t('contact.ContactTitle')}</h5>
			<h2>{t('contact.ContactTitles')}</h2>
			<div className="container contact_container">
				<div className="contact_options">
					<article className="contact_option">
						<MdOutlineEmail className="contact_option-icon" />
						<h4>{t('contact.ContactEmailLabel')}</h4>
						<h5>ancoro2009@gmail.com</h5>
						<a href="mailto:ancoro2009@gmail.com" target="_blank">
							{t('contact.ContactSendLink')}
						</a>
					</article>
					<article className="contact_option">
						<FaFacebookMessenger className="contact_option-icon" />
						<h4> {t('contact.ContactMessenger')}</h4>
						<a href="http://m.me/andres.cordoba.560" target="_blank">
							{' '}
							{t('contact.ContactSendLink')}
						</a>
					</article>
					<article className="contact_option">
						<BsWhatsapp className="contact_option-icon" />
						<h4> {t('contact.ContactWhatsApp')}</h4>
						<h5>+573167541892</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+573167541892&text= Hola!%20Quiero%20contactarte%20me%20interesa%20tu%20perfil!"
							target="_blank"
						>
							{t('contact.ContactSendLink')}
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder={t('contact.ContactMessage')}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder={t('contact.ContactFullName')}
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder={t('contact.ContactMessage')}
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						{t('contact.ContactSendLink')}
					</button>
				</form>
			</div>
		</section>
	);
};
