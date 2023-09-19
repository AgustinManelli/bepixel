import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../../stylesheets/navbar/Navbar.css';
import logof from '../../assets/image/ISOTIPO.svg';
import logof2 from '../../assets/image/LOGOVERTICAL.svg';
import NavbarLinks from './NavbarLinks';
import NavbarResponsive from './NavbarResponsive';

function Navbar() {
	const [isActive, setIsActive] = useState(false); // open mobile menu
	const [isPhone, setIsPhone] = useState(false); // change structure when is phone
	const [shadowScroll, setShadowScroll] = useState(true); //change color when scroll
	const [isOpen, setIsOpen] = useState(false); // open submenu
	const [isOpenResponsive, setIsOpenResponsive] = useState(false);

	useEffect(() => {
		if (window.scrollY > 0) {
			setShadowScroll(false);
		} else {
			setShadowScroll(true);
		}
		if (window.innerWidth <= 815) {
			setIsPhone(true);
		} else {
			setIsPhone(false);
		}
	}, []);

	const openDropdown = () => {
		setIsOpenResponsive(!isOpenResponsive);
	};

	const closeOpen = () => {
		setIsOpen(false);
	};

	const handleClick = () => {
		setIsActive(current => !current);
	};

	const closeNav = () => {
		setIsOpen(false);
		setIsActive(false);
		window.scrollTo(0, 0);
	};

	window.addEventListener('resize', function () {
		if (window.innerWidth <= 815) {
			setIsPhone(true);
		} else {
			setIsPhone(false);
		}
	});

	window.addEventListener('scroll', function () {
		setIsOpen(false);
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
		<nav id='navContainer' className='navContainer'>
			<div
				className={
					shadowScroll ? (isActive ? 'nav navshadow' : 'nav') : 'nav navshadow'
				}>
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
					onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className='navUl'>
					<NavbarLinks
						shadowScroll={shadowScroll}
						closeNav={closeNav}
						openDropdown={openDropdown}
						isOpen={isOpen}
						closeOpen={closeOpen}
						isPhone={isPhone}
					/>
				</ul>
				<motion.div className='progress-bar' style={{ scaleX }} />
			</div>

			<ul
				className={
					isActive
						? 'responsiveMenu responsiveOpened navshadow'
						: 'responsiveMenu'
				}>
				<NavbarResponsive
					closeNav={closeNav}
					openDropdown={openDropdown}
					isOpen={isOpenResponsive}
					isPhone={isPhone}
				/>
			</ul>
		</nav>
	);
}

export default Navbar;
