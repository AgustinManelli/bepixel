import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import CTAButton from '../CTAButton';
import LanguageSwitch from './LanguageSwitch';
import { useTranslation } from 'react-i18next';

function NavbarResponsive({ openDropdown, closeNav }) {
	const [t] = useTranslation('global');
	return (
		<>
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
		</>
	);
}

export default NavbarResponsive;
