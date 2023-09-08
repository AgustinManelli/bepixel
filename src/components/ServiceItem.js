import React from 'react';
import '../stylesheets/ServiceItem.css';

function ServiceItem(props) {
	return (
		<div className='serviceItem'>
			<img src={require(`../image/${props.img}`)} loading='lazy'/>
			<div>
				<h3>{props.title}</h3>
				<p>{props.paraph}</p>
			</div>
		</div>
	);
}

export default ServiceItem;
