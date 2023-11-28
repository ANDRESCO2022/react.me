import './App.css';
import {
	About,
	Experience,
	Header,
	Nav,
	Skills,
	Portfolio,
	Contact,
	Footer,
	Services,
} from './Components';

function App() {
	return (
		<>
			<Header />
			<About />
			{/* <Nav /> */}
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
