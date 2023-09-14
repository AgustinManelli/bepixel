import ScrolldownArrow from './ScrolldownArrow';
import '../stylesheets/ProyectsHeader.css';

function ProyectsHeader(props) {
	return (
		<header className='proyectHeaderSection1'>
			<ScrolldownArrow to={props.to} />
			<div className='proyectHeaderSection1_1'>
				<div className='proyectHeaderSection_1_1_Container'>
					<div className='proyectHeaderSection1_1_1'>
						<h2>{props.title}</h2>
						<div></div>
						<img src={props.img} />
					</div>
					<p>{props.text1}</p>
					<p>{props.text2}</p>
				</div>
			</div>
			<div
				className='proyectHeaderImg'
				style={{
					backgroundImage: 'url(' + props.element + ')',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				{' '}
			</div>
		</header>
	);
}

export default ProyectsHeader;
