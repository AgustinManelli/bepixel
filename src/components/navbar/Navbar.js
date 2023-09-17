import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/navbar/Navbar.css';
import logof from '../../assets/image/ISOTIPO.svg';
import logof2 from '../../assets/image/LOGOVERTICAL.svg';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'framer-motion';
import NavbarLinks from './NavbarLinks';
import NavbarResponsive from './NavbarResponsive';

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

	window.addEventListener('resize', function () {
		if (window.innerWidth <= 815) {
			setIsPhone(true);
		} else {
			setIsPhone(false);
		}
	});

	window.addEventListener('scroll', function () {
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
					<NavbarLinks shadowScroll={shadowScroll} closeNav={closeNav} />
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
				<NavbarResponsive closeNav={closeNav} openDropdown={openDropdown} />
			</ul>
		</header>
	);
}

export default Navbar;
