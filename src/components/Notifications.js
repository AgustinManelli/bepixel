import React, { useEffect } from 'react';
import '../stylesheets/Notifications.css';
import { IoClose } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import $ from 'jquery';
import Languagebtn from './Languagebtn';

function Notifications() {
	useEffect(() => {
		const notifications = document.querySelector('.notificationsContainer');
		if (window.localStorage.getItem('npopup') == null) {
			window.localStorage.setItem('npopup', true);
		}
		setTimeout(() => {
			if (window.localStorage.getItem('npopup') == 'true') {
				$('.notificationsContainer').addClass('activateNotifications');
			}
		}, 3000);
	}, []);

	const closenotification = event => {
		$('.notificationsContainer').removeClass('activateNotifications');
		window.localStorage.setItem('npopup', false);
	};

	return (
		<div className='notificationsContainer'>
			<IoClose className='notificationsCross' onClick={closenotification} />
			<div className='notifications_1'>
				<BiWorld className='notificationsbell' />
				<div>
					<p>Alert</p>
					<p>English version available</p>
				</div>
			</div>
		</div>
	);
}

export default Notifications;
