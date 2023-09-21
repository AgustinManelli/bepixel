import { useState } from 'react';
import './StarsNumber.css';
import { supabase } from '../../supabaseClient';
import { AiFillStar } from 'react-icons/ai';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

function StarsNumber() {
	const [t] = useTranslation('global');
	const [starnumber, setStarnumber] = useState(0);
	const [message, setMessage] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const { data, error } = await supabase.from('views').insert({
				valoration: starnumber,
				message: message,
			});
			document.querySelector('.input-star').value = '';
			toast.success(`${t('stars-number.success')}`, {
				style: {
					textAlign: 'left',
					background: 'rgba(236, 253, 243, 0.8)',
					backdropFilter: 'blur(10px) saturate(200%)',
					WebkitBackdropFilter: 'blur(10px) saturate(200%)',
					MozBackdropFilter: 'blur(10px) saturate(200%)',
					MsBackdropFilter: 'blur(10px) saturate(200%)',
					KhtmlBackdropFilter: 'blur(10px) saturate(200%)',
					boxShadow: '0 10px 10px 0 rgb(0, 0, 0, 5%)',
					border: 'none',
				},
			});
			if (error) throw error;
		} catch (error) {
			toast.error(`${t('stars-number.error')}`, {
				style: {
					textAlign: 'left',
					background: 'rgba(236, 253, 243, 0.8)',
					backdropFilter: 'blur(10px) saturate(200%)',
					WebkitBackdropFilter: 'blur(10px) saturate(200%)',
					MozBackdropFilter: 'blur(10px) saturate(200%)',
					MsBackdropFilter: 'blur(10px) saturate(200%)',
					KhtmlBackdropFilter: 'blur(10px) saturate(200%)',
					boxShadow: '0 10px 10px 0 rgb(0, 0, 0, 5%)',
					border: 'none',
				},
			});
		}
	};

	return (
		<div className='starFormContainer'>
			<h3>{t('stars-number.title')}</h3>
			<div className='starForm'>
				<span className='star-rating'>
					<label htmlFor='rate-1' style={{ ['--i']: 1 }}>
						<AiFillStar className='star' onClick={e => setStarnumber(1)} />
					</label>
					<input type='radio' name='rating' id='rate-1' value='1'></input>
					<label htmlFor='rate-2' style={{ ['--i']: 2 }}>
						<AiFillStar className='star' onClick={e => setStarnumber(2)} />
					</label>
					<input type='radio' name='rating' id='rate-2' value='2'></input>
					<label htmlFor='rate-3' style={{ ['--i']: 3 }}>
						<AiFillStar className='star' onClick={e => setStarnumber(3)} />
					</label>
					<input type='radio' name='rating' id='rate-3' value='3'></input>
					<label htmlFor='rate-4' style={{ ['--i']: 4 }}>
						<AiFillStar className='star' onClick={e => setStarnumber(4)} />
					</label>
					<input type='radio' name='rating' id='rate-4' value='4'></input>
					<label htmlFor='rate-5' style={{ ['--i']: 5 }}>
						<AiFillStar className='star' onClick={e => setStarnumber(5)} />
					</label>
					<input type='radio' name='rating' id='rate-5' value='5'></input>
				</span>

				<form onSubmit={handleSubmit}>
					<div className='input-group'>
						<input
							type='text'
							className='input-star'
							placeholder={t('stars-number.placeholder')}
							autoComplete='off'
							onChange={e => setMessage(e.target.value)}></input>
						<input
							className='button--submit'
							value={t('stars-number.button')}
							type='submit'></input>
					</div>
				</form>
			</div>
		</div>
	);
}

export default StarsNumber;
