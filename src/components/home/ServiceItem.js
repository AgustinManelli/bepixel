import React from 'react';
import '../../stylesheets/home/ServiceItem.css';

function ServiceItem(props) {
	return (
		<div className='serviceItem'>
			<img
				src={require(`../../image/${props.img}`)}
				loading='lazy'
				alt='service item'
			/>
			<div>
				<h3>{props.title}</h3>
				<p>{props.paraph}</p>
			</div>
		</div>
	);
}

export default ServiceItem;
