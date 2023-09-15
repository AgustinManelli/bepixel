import { useEffect } from 'react';
import '../../stylesheets/bepixel/AmbilightVideo.css';
import logovideo from '../../image/logochico_1.mp4';
import postervideo from '../../image/bepixelguideline/brandpresentation.webp';
import $ from 'jquery';

function AmbilightVideo() {
	useEffect(() => {
		let intervalId;
		const FRAMERATE = 60;

		const canvas = document.getElementById('ambilight');
		const context = canvas.getContext('2d');
		const video = document.getElementById('video');

		function repaintAmbilight() {
			context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
		}

		function startAmbilightRepaint() {
			$('.headerComponentContainer').addClass('headerVideoActive');
			intervalId = window.setInterval(repaintAmbilight, 1000 / FRAMERATE);
		}

		function stopAmbilightRepaint() {
			clearInterval(intervalId);
			$('.headerComponentContainer').removeClass('headerVideoActive');
		}

		function endAmbilightRepaint() {
			clearInterval(intervalId);
			$('.headerComponentContainer').removeClass('headerVideoActive');
			context.clearRect(0, 0, video.videoWidth, video.videoHeight);
			video.load();
		}

		video.addEventListener('play', startAmbilightRepaint);

		video.addEventListener('pause', stopAmbilightRepaint);

		video.addEventListener('ended', endAmbilightRepaint);

		video.addEventListener('seeked', repaintAmbilight);

		video.addEventListener('load', repaintAmbilight);

		// load first frame
		repaintAmbilight();
		video.currentTime = 0;
	}, []);

	return (
		<div className='videoWrapper'>
			<div className='ambilightWrapper'>
				<div className='aspectRatio'>
					<video
						id='video'
						src={logovideo}
						controls
						poster={postervideo}
						preload='none'
						controlsList='nofullscreen nodownload'
						playsInline
					/>
				</div>
				<canvas
					id='ambilight'
					className='ambilight'
					width='1080'
					height='1080'
				></canvas>
			</div>
		</div>
	);
}

export default AmbilightVideo;
