import React from 'react';
import '../../stylesheets/home/Homecontact.css';
import Tittles from '../Tittles';
import { toast } from 'sonner';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

export default function Homecontact() {
	const [t] = useTranslation('global');

	$('#form-home').on('submit', function () {
		toast.success('Email enviado correctamente');
	});

	return (
		<section className='HomecontactContainer'>
			<div className='Homecontact_mw ContainerGeneral'>
				<form
					id='form-home'
					className='formgroup'
					action='https://formsubmit.co/bepixelarg@gmail.com'
					method='POST'
				>
					<div className='form__group field'>
						<input
							type='input'
							className='form__field'
							placeholder='nombre'
							name='nombre'
							id='nombre'
							required
						/>
						<label htmlFor='nombre' className='form__label'>
							{t('home-contact.placeholder-name')}
						</label>
					</div>

					<div className='form__group field'>
						<input
							type='input'
							className='form__field'
							placeholder='email'
							name='email'
							id='email'
							required
						/>
						<label htmlFor='email' className='form__label'>
							email
						</label>
					</div>

					<div className='form__group field'>
						<input
							type='input'
							className='form__field'
							placeholder='numero'
							name='numero'
							id='numero'
							required
						/>
						<label htmlFor='numero' className='form__label'>
							{t('home-contact.placeholder-number')}
						</label>
					</div>

					<div className='form__group field'>
						<input
							type='input'
							className='form__field'
							placeholder='mensaje'
							name='mensaje'
							id='mensaje'
							required
						/>
						<label htmlFor='mensaje' className='form__label'>
							{t('home-contact.placeholder-mensaje')}
						</label>
					</div>

					<button type='submit'>
						<span>{t('home-contact.btnsend')}</span>
						<svg
							viewBox='-5 -5 110 110'
							preserveAspectRatio='none'
							aria-hidden='true'
						>
							<path d='M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0' />
						</svg>
					</button>

					<input
						type='hidden'
						name='_next'
						value='http://bepixel.vercel.app/'
					></input>
					<input type='hidden' name='_captcha' value='false'></input>
				</form>

				<div className='contactgroup'>
					<Tittles
						nombre={t('home-contact.title')}
						color='var(--secondaryColor)'
					/>
					<p>{t('home-contact.text')}</p>
				</div>
			</div>
		</section>
	);
}
