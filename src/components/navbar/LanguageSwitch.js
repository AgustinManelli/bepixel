import { useEffect, useState } from 'react';
import '../../stylesheets/navbar/LanguageSwitch.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const ArgFlag = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
		<mask id='a'>
			<circle cx='256' cy='256' r='256' fill='#fff' />
		</mask>
		<g mask='url(#a)'>
			<path
				fill='#338af3'
				d='M0 0h512v144.7L488 256l24 111.3V512H0V367.3L26 256 0 144.7z'
			/>
			<path fill='#eee' d='M0 144.7h512v222.6H0z' />
			<path
				fill='#ffda44'
				d='m332.4 256-31.2 14.7 16.7 30.3-34-6.5-4.2 34.3-23.7-25.2-23.6 25.2-4.3-34.3-34 6.5 16.6-30.3-31.2-14.7 31.3-14.7L194 211l34 6.5 4.3-34.3 23.6 25.2 23.6-25.2 4.4 34.3 34-6.5-16.7 30.3z'
			/>
		</g>
	</svg>
);

const UsFlag = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
		<mask id='a'>
			<circle cx='256' cy='256' r='256' fill='#fff' />
		</mask>
		<g mask='url(#a)'>
			<path
				fill='#eee'
				d='M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z'
			/>
			<path
				fill='#d80027'
				d='M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z'
			/>
			<path fill='#0052b4' d='M0 0h256v256H0Z' />
			<path
				fill='#eee'
				d='m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z'
			/>
		</g>
	</svg>
);

function LanguageSwitch() {
	const [t, i18n] = useTranslation('global');
	const [isOpen, setIsOpen] = useState(false);
	const [lng, setLng] = useState('');

	useEffect(() => {
		if (
			window.localStorage.getItem('lng') !== 'es' &&
			window.localStorage.getItem('lng') !== null
		) {
			setLng('en');
		} else {
			setLng('es');
		}
	}, []);

	useEffect(()=>{
		document.addEventListener('scroll', function(){
			setIsOpen(false)
		})
	})


	const languageSwitchEs = () => {
		i18n.changeLanguage('es');
		window.localStorage.setItem('lng', 'es');
		setLng('es');
		setIsOpen(false);
		toast.success('Lenguaje cambiado a español', {
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
	};

	const languageSwitchEn = () => {
		i18n.changeLanguage('en');
		setLng('en');
		setIsOpen(false);
		window.localStorage.setItem('lng', 'en');
		toast.success('Language changed to english', {
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
	};

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			className='lngMenu'
		>
			<motion.button
				whileTap={{ scale: 0.97 }}
				onClick={() => setIsOpen(!isOpen)}
			>
				<motion.div className='lngFlag'>
					{lng === 'es' ? <ArgFlag /> : <UsFlag />}
				</motion.div>
			</motion.button>
			<motion.ul
				variants={{
					open: {
						clipPath: 'inset(0% 0% 0% 0% round 10px)',
						transition: {
							type: 'spring',
							bounce: 0,
							duration: 0.3,
							delayChildren: 0.1,
							staggerChildren: 0.05,
						},
					},
					closed: {
						clipPath: 'inset(10% 50% 90% 50% round 10px)',
						transition: {
							type: 'spring',
							bounce: 0,
							duration: 0.3,
						},
					},
				}}
				style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			>
				<motion.li variants={itemVariants} onClick={languageSwitchEs}>
					<motion.div className='lngFlag'>
						<ArgFlag />
					</motion.div>
				</motion.li>

				<motion.li variants={itemVariants} onClick={languageSwitchEn}>
					<motion.div className='lngFlag'>
						<UsFlag />
					</motion.div>
				</motion.li>
			</motion.ul>
		</motion.nav>
	);
}

export default LanguageSwitch;
