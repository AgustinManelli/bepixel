import React, { useEffect } from 'react';
import '../stylesheets/Notifications.css';
import { IoClose } from 'react-icons/io5';
import { IoNotifications } from 'react-icons/io5';
import $ from 'jquery';

function Notifications() {
	useEffect(() => {
		if (window.localStorage.getItem('npopup') == null) {
			window.localStorage.setItem('npopup', true);
		}
		setTimeout(() => {
			if (window.localStorage.getItem('npopup') == 'true') {
				$('.notificationsContainer').addClass('activateNotifications');
			}
		}, 3000);
		setTimeout(() => {
			if (window.localStorage.getItem('npopup') == 'true') {
				$('.notificationsContainer').removeClass('activateNotifications');
			}
		}, 20000);
	}, []);

	const closenotification = event => {
		$('.notificationsContainer').removeClass('activateNotifications');
		window.localStorage.setItem('npopup', false);
	};

	return (
		<div className='notificationsContainer'>
			<IoClose className='notificationsCross' onClick={closenotification} />
			<div className='notifications_1'>
				<IoNotifications className='notificationsbell' />
				{/* <BiWorld className='notificationsbell' /> */}
				<div>
					<p>Notification</p>
					<p>English version available</p>
				</div>
			</div>
		</div>
	);
}

export default Notifications;
