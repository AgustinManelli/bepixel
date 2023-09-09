import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import '../../stylesheets/navbar/Navbar.css';
import logof from '../../image/ISOTIPO.svg';
import logof2 from '../../image/LOGOVERTICAL.svg';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

function Navbar({
	setIsActive,
	isActive,
	isPhone,
	setIsPhone,
	shadowScroll,
	setShadowScroll,
}) {

	const [t] = useTranslation('global');

	const openDropdown = event => {
		$('.responsivenavDropdown').toggleClass('responsivenavDropdownOpened');
		$('.responsiveArrow').toggleClass('responsiveArrowinverted');
	};

	const handleClick = event => {
		setIsActive(current => !current);
		$('.responsivenavDropdown').removeClass('responsivenavDropdownOpened');
		$('.responsiveArrow').removeClass('responsiveArrowinverted');
	};

	const closeNav = event => {
		setIsActive(false);
		$('body,html').animate({ scrollTop: '0px' }, 500);
	};

	const handleResize = () => {
		if (window.innerWidth <= 815) {
			setIsPhone(true);
		} else {
			setIsPhone(false);
		}
	};

	const scrollnavigate = () => {
		if (window.scrollY > 0) {
			setShadowScroll(false);
		} else {
			setShadowScroll(true);
		}

		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = (winScroll / height) * 100;

		document.getElementById('progressbar').value = scrolled;
	};

	useEffect(() => {
		if (window.scrollY > 0) {
			setShadowScroll(false);
		} else {
			setShadowScroll(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', scrollnavigate);
		if (window.innerWidth <= 815) {
			setIsPhone(true);
		} else {
			setIsPhone(false);
		}
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
				</ul>
				<progress
					className='progressBar'
					id='progressbar'
					max='100'
					value='0'
				></progress>
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
			</ul>
		</header>
	);
}

export default Navbar;
