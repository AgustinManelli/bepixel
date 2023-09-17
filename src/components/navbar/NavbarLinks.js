import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import CTAButton from '../CTAButton';
import LanguageSwitch from './LanguageSwitch';

function NavbarLinks({ shadowScroll, closeNav }) {
	const [t] = useTranslation('global');

	return (
		<>
			<li className='navLi navLiArrow' id='navLi'>
				<div className='navAnchorDropdown' activeclassname='navAnchor active'>
					{t('navbar.navelement1')}
					<IoIosArrowDown />
				</div>
				<div className='navDropdown'>
					<NavLink
						to='/laespumita'
						className='navAnchor navDropdownLink '
						onClick={closeNav}>
						la espumita
					</NavLink>
					<NavLink
						to='/open'
						className='navAnchor navDropdownLink '
						onClick={closeNav}>
						open
					</NavLink>
				</div>
			</li>

			<li className='navLi'>
				<NavLink
					to='/ourbrand'
					className='navAnchor'
					activeclassname='navAnchor active'
					onClick={closeNav}>
					{t('navbar.navelement2')}
				</NavLink>
			</li>
			<li
				style={{
					position: 'absolute',
					right: '20px',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '10px',
				}}>
				<CTAButton
					title={t('navbar.cta')}
					link='https://api.whatsapp.com/send?phone=543571534631&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20su%20servicio.'
				/>
				<LanguageSwitch />
			</li>
		</>
	);
}

export default NavbarLinks;
