import '../stylesheets/BrandSections.css';

function BrandSections(props) {
	return (
		<section className='bepixelsectionsContainer'>
			<div className='bepixelsections_i'>
				<div className='bepixelsections_nomenclator'>
					<img src={props.logo} loading='lazy' alt='logo sections' />
					<p> {props.section} </p>
				</div>
				{props.page}
			</div>
		</section>
	);
}

export default BrandSections;
