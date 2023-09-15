import '../stylesheets/MeaningSection.css';

function MeaningSection(props) {
	return (
		<div className='meaningSectionContainer'>
			<img className='meaningSectionContainer_logo' src={props.logo} />
			<div className='meaningSection_elementsContainer'>
				<div className='meaningSection_elements'>
					<img src={props.asset1} loading='lazy' />
					<p>
						<span>{props.title1}</span>
						{props.text1}
					</p>
				</div>
				<div className='meaningSection_elements'>
					<img src={props.asset2} loading='lazy' />
					<p>
						<span>{props.title2}</span>
						{props.text2}
					</p>
				</div>
				<div className='meaningSection_elements'>
					<img src={props.asset3} loading='lazy' />
					<p>
						<span>{props.title3}</span>
						{props.text3}
					</p>
				</div>
			</div>
		</div>
	);
}

export default MeaningSection;