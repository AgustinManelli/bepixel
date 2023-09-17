import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import '../../stylesheets/navbar/Navbar.css';
import logof from '../../assets/image/ISOTIPO.svg';
import logof2 from '../../assets/image/LOGOVERTICAL.svg';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import CTAButton from '../CTAButton';
import LanguageSwitch from './LanguageSwitch';
import { motion, useScroll, useSpring } from 'framer-motion';

function Navbar({
	setIsActive,
	isActive,
	isPhone,
	setIsPhone,
	shadowScroll,
	setShadowScroll,
}) {
	const [t] = useTranslation('global');

	const openDropdown = () => {
		$('.responsivenavDropdown').toggleClass('responsivenavDropdownOpened');
		$('.responsiveArrow').toggleClass('responsiveArrowinverted');
	};

	const handleClick = () => {
		setIsActive(current => !current);
		$('.responsivenavDropdown').removeClass('responsivenavDropdownOpened');
		$('.responsiveArrow').removeClass('responsiveArrowinverted');
	};

	const closeNav = () => {
		setIsActive(false);
		$('body,html').animate({ scrollTop: '0px' });
	};

	useEffect(() => {
		if (window.scrollY > 0) {
			setShadowScroll(false);
		} else {
			setShadowScroll(true);
		}
	}, []);

	window.addEventListener('resize', function(){
		if (window.innerWidth <= 815) {
			setIsPhone(true);
		} else {
			setIsPhone(false);
		}
	});
	
	window.addEventListener('scroll', function(){
		if (window.scrollY > 0) {
			setShadowScroll(false);
		} else {
			setShadowScroll(true);
		}
	});

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<header id='navContainer' className='navContainer'>
			<nav
				className={
					shadowScroll ? (isActive ? 'nav navshadow' : 'nav') : 'nav navshadow'
				}
			>
				<NavLink className='anchorlogoNav' to='/' onClick={closeNav}>
					<img
						src={isPhone ? logof2 : logof}
						draggable='false'
						className={isPhone ? 'logoNav2' : 'logoNav'}
						alt='logo bepixel'
					/>
				</NavLink>
				<div
					className={isActive ? 'icon nav-icon-5 open' : 'icon nav-icon-5'}
					onClick={handleClick}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={isActive ? 'navUl activated' : 'navUl'}>
					<li className='navLi navLiArrow' id='navLi'>
						<div
							className='navAnchorDropdown'
							activeclassname='navAnchor active'
						>
							{t('navbar.navelement1')}
							<IoIosArrowDown />
						</div>
						<div
							className={
								shadowScroll ? 'navDropdown' : 'navDropdown dropdownShadow'
							}
						>
							<NavLink
								to='/laespumita'
								className='navAnchor navDropdownLink '
								onClick={closeNav}
							>
								la espumita
							</NavLink>
							<NavLink
								to='/open'
								className='navAnchor navDropdownLink '
								onClick={closeNav}
							>
								open
							</NavLink>
						</div>
					</li>

					<li className='navLi'>
						<NavLink
							to='/ourbrand'
							className='navAnchor'
							activeclassname='navAnchor active'
							onClick={closeNav}
						>
							{t('navbar.navelement2')}
						</NavLink>
					</li>
					<li
						style={{
							position: 'absolute',
							right: '5px',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '10px',
						}}
					>
						<CTAButton
							title={t('navbar.cta')}
							link='https://api.whatsapp.com/send?phone=543571534631&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20su%20servicio.'
						/>
						<LanguageSwitch />
					</li>
				</ul>
				<motion.div className='progress-bar' style={{ scaleX }} />
			</nav>

			<ul
				className={
					isActive
						? 'responsiveMenu responsiveOpened navshadow'
						: 'responsiveMenu'
				}
			>
				<li className='navLi'>
					<NavLink
						to='/'
						className='navAnchor'
						activeclassname='navAnchor active'
						onClick={closeNav}
					>
						home
					</NavLink>
				</li>
				<li className='navLi navLiResponsive' onClick={openDropdown}>
					<div
						className='navAnchorDropdown'
						activeclassname='navAnchorDropdown active'
					>
						{t('navbar.navelement1')}
						<IoIosArrowDown className='responsiveArrow' />
					</div>
					<div className='responsivenavDropdown'>
						<NavLink
							to='/laespumita'
							className='navDropdownLinkResponsive'
							onClick={closeNav}
						>
							la espumita
						</NavLink>
						<NavLink
							to='/open'
							className='navAnchor navDropdownLink '
							onClick={closeNav}
						>
							open
						</NavLink>
					</div>
				</li>
				<li className='navLi'>
					<NavLink
						to='/ourbrand'
						className='navAnchor'
						activeclassname='navAnchor active'
						onClick={closeNav}
					>
						{t('navbar.navelement2')}
					</NavLink>
				</li>
				<li
					className='navLi'
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '10px',
					}}
				>
					<CTAButton
						title={t('navbar.cta')}
						link='https://api.whatsapp.com/send?phone=543571534631&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20su%20servicio.'
					/>
					<LanguageSwitch />
				</li>
			</ul>
		</header>
	);
}

export default Navbar;
