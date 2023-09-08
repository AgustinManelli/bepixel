import React from 'react';
import '../stylesheets/HeaderComponent.css';
import Tittles from './Tittles';

function HeaderComponent(props) {
	return (
		<header className='laespumitaHeaderContainer'>
			<div className='laespumitaLogo'>
				<img src={require(`../image/${props.logo}`)}></img>
			</div>
			<div className='laespumitaTextContainer'>
				<Tittles nombre={props.title} color='white' />
				<p>{props.paraph}</p>
			</div>
		</header>
	);
}

export default HeaderComponent;
