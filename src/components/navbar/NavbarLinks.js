import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import CTAButton from '../CTAButton';
import LanguageSwitch from './LanguageSwitch';
import Dropdown from './Dropdown';

function NavbarLinks({
	shadowScroll,
	closeNav,
	openDropdown,
	isOpen,
	closeOpen,
	isPhone,
}) {
	const [t] = useTranslation('global');

	return (
		<>
			<li className='navLi'>
				<Dropdown
					openDropdown={openDropdown}
					isOpen={isOpen}
					closeNav={closeNav}
					closeOpen={closeOpen}
					elements={
						<>
							<li className='dropdownMenuLi'>
								<NavLink
									to='/laespumita'
									className='dropdownMenuNavLink navAnchor'
									onClick={closeNav}>
									la espumita
								</NavLink>
							</li>
							<li className='dropdownMenuLi'>
								<NavLink
									to='/open'
									className='dropdownMenuNavLink navAnchor'
									onClick={closeNav}>
									open
								</NavLink>
							</li>
						</>
					}
				/>
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
			<li className='navLi'>
				<NavLink
					to='/tools'
					className='navAnchor'
					activeclassname='navAnchor active'
					onClick={closeNav}>
					{t('navbar.navelement3')}
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
				{isPhone ? '' : <LanguageSwitch />}
			</li>
		</>
	);
}

export default NavbarLinks;
