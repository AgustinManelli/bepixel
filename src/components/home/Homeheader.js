import '../../stylesheets/home/Homeheader.css';
import { useTranslation } from 'react-i18next';
import ScrolldownArrow from '../ScrolldownArrow';

const BackgroundPattern = () => (
	<svg
		id='patternId'
		width='100%'
		height='100%'
		xmlns='http://www.w3.org/2000/svg'
		style={{ position: 'absolute', 'zIndex': '0', opacity: '0.008' }}
	>
		<defs>
			<pattern
				id='a'
				patternUnits='userSpaceOnUse'
				width='40'
				height='40'
				patternTransform='scale(2) rotate(20)'
			>
				<rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' />
				<path
					d='M20 20v20h20V20zm5 5h10v10H25zM0 0v20h20V0zm5 5h10v10H5z'
					strokeWidth='1'
					stroke='none'
					fill='hsla(258.5,59.4%,59.4%,1)'
				/>
				<path
					d='M5 25h10v10H5zM25 5h10v10H25z'
					strokeWidth='1'
					stroke='none'
					fill='hsla(339.6,82.2%,51.6%,1)'
				/>
			</pattern>
		</defs>
		<rect
			width='800%'
			height='800%'
			transform='translate(0,0)'
			fill='url(#a)'
		/>
	</svg>
);

function Homeheader() {
	const [t] = useTranslation('global');

	return (
		<header className='homeheaderElements'>
			<ScrolldownArrow to='homefaq' />
			<div className='homeheaderElement'>
				<BackgroundPattern />
				<div
					className='homeheaderElement_1 textelement'
					style={{ 'z-index': '1' }}
				>
					<div>
						<h2>branding</h2>
						<h2>{t('home-header.textelement1')}</h2>
						<h2>{t('home-header.textelement2')}</h2>
					</div>
					<p>{t('home-header.textelement3')}</p>
				</div>
			</div>
			<div className='homeheaderimg'></div>
		</header>
	);
}

export default Homeheader;
