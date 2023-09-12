import React from 'react';
import '../stylesheets/ScrolldownArrow.css';

export default function ScrolldownArrow(props) {
	return (
		<div className='scrolldownArrowContainer'>
			<a href={`#${props.to}`} className='scroll-down'>
				{' '}
			</a>
		</div>
	);
}
