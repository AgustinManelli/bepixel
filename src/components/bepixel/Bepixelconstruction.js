import '../../stylesheets/bepixel/Bepixelconstruction.css';
import bpg1 from '../../assets/image/bepixelguideline/construction.svg';
import bpg2 from '../../assets/image/bepixelguideline/construction2.svg';

function Bepixelconstruction(props) {
	return (
		<div className='bepixelconstructionContainer'>
			<img src={bpg1} loading='lazy' />
			<img src={bpg2} loading='lazy' />
			<p>{props.footer}</p>
		</div>
	);
}

export default Bepixelconstruction;
