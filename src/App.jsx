import { useTranslation } from 'react-i18next';
import './App.css';
import {
	About,
	Experience,
	Header,
	Skills,
	Portfolio,
	Contact,
	Footer,
	Services,
} from './Components';
import imgEs from './assets/spain.png';
import imgEn from './assets/united-kingdom.png';
import { useState } from 'react';

function App() {
	const { t, i18n } = useTranslation('global');
	const [currentLanguaje, setCurrentLanguaje] = useState('en');

	const changedLanguage = (newLanguage) => {
		setCurrentLanguaje(newLanguage);
		i18n.changeLanguage(newLanguage);
	};

	return (
		<>
			<div className="app_flags">
				{currentLanguaje === 'es' ? (
					<button onClick={() => changedLanguage('en')}>
						<img src={imgEn} alt="bandera inglaterra" />
					</button>
				) : (
					<button onClick={() => changedLanguage('es')}>
						<img src={imgEs} alt="bandera españa" />
					</button>
				)}
			</div>
			<Header />
			<About />
			<Services />
			<Experience />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
