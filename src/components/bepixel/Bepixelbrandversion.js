import '../../stylesheets/bepixel/Bepixelbrandversion.css';
import bpg1 from '../../assets/image/bepixelguideline/brandversion1.svg';
import bpg2 from '../../assets/image/bepixelguideline/brandversion2.webp';

function Bepixelbrandversion() {
	return (
		<div className='bepixelbrandversionContainer'>
			<img src={bpg1} loading='lazy' />
			<img src={bpg2} loading='lazy' />
		</div>
	);
}

export default Bepixelbrandversion;
