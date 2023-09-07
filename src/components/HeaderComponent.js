import React from 'react';
import '../stylesheets/HeaderComponent.css';
import Tittles from './Tittles';

function HeaderComponent(props) {
	return (
		<div className='laespumitaHeaderContainer'>
			<div className='laespumitaLogo'>
				<img src={require(`../image/${props.logo}`)}></img>
			</div>
			<div className='laespumitaTextContainer'>
				<Tittles nombre={props.title} color='white' />
				<p>{props.paraph}</p>
			</div>
		</div>
	);
}

export default HeaderComponent;
