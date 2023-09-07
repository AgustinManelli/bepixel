import React, { useEffect, useState } from 'react';
import '../stylesheets/Languagebtn.css';
import { useTranslation } from 'react-i18next';
import $ from 'jquery';

function Languagebtn(props) {
	const [t, i18n] = useTranslation('global');

	useEffect(() => {
		if (
			window.localStorage.getItem('lng') != 'es' &&
			window.localStorage.getItem('lng') != null
		) {
			document.querySelector('.check-toggle').checked = 'true';
		}
	}, []);

	const lenguagecheck = event => {
		const checkboxlenguage = document.querySelector(`#${props.id}`);

		if (checkboxlenguage.checked) {
			i18n.changeLanguage('en');
			window.localStorage.setItem('lng', 'en');
		} else {
			i18n.changeLanguage('es');
			window.localStorage.setItem('lng', 'es');
		}

		$('body,html').animate({ scrollTop: '0px' }, 500);
	};

	return (
		<div className='neumorphism-toggle'>
			<input
				id={props.id}
				className='check-toggle check-toggle-round-flat'
				type='checkbox'
				onChange={lenguagecheck}
			/>
			<label htmlFor={props.id}>
				<div className='switch'>
					<div className='dot'></div>
				</div>
				<span>english version</span>
			</label>
		</div>
	);
}

export default Languagebtn;
