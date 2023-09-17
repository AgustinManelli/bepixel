import '../stylesheets/pages/Home.css';
import Homeheader from '../components/home/Homeheader';
import Homedata from '../components/home/Homedata';
import Homefaq from '../components/home/Homefaq';
import Homecontact from '../components/home/Homecontact';
import AccordionHome from '../components/home/AccordionHome.js';
import 'aos/dist/aos.css';

function Home() {
	document.title = 'bepixel | home';

	return (
		<div className='homeContainer'>
			<Homeheader />
			<Homefaq />
			<Homedata />
			<Homecontact />
			<AccordionHome />
		</div>
	);
}

export default Home;
