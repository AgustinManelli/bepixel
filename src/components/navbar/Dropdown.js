import '../../stylesheets/Dropdown.css';
import { useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen, closeOpen) {
	const [scope, animate] = useAnimate();

	window.addEventListener('click', function (e) {
		if (document.getElementById('dropDownId').contains(e.target)) {
		} else {
			closeOpen();
		}
	});

	useEffect(() => {
		animate(
			'.dropdownMenuArrow',
			{ rotate: isOpen ? 180 : 0 },
			{ duration: 0.2 },
		);

		animate(
			'ul',
			{
				clipPath: isOpen
					? 'inset(0% 0% 0% 0% round 10px)'
					: 'inset(10% 50% 90% 50% round 10px)',
			},
			{
				type: 'spring',
				bounce: 0,
				duration: 0.5,
			},
		);

		animate(
			'li',
			isOpen
				? { opacity: 1, scale: 1, filter: 'blur(0px)' }
				: { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
			{
				duration: 0.2,
				delay: isOpen ? staggerMenuItems : 0,
			},
		);
	}, [isOpen]);

	return scope;
}

function Dropdown(props) {
	const scope = useMenuAnimation(props.isOpen, props.closeOpen);
	return (
		<>
			<nav className='dropdownMenuContainer' ref={scope} id='dropDownId'>
				<motion.button
					onClick={() => props.openDropdown()}
					className='navAnchor'>
					trabajos
					<IoIosArrowDown className='dropdownMenuArrow' />
				</motion.button>
				<ul
					style={{
						pointerEvents: props.isOpen ? 'auto' : 'none',
						clipPath: 'inset(10% 50% 90% 50% round 10px)',
					}}>
					{props.elements}
				</ul>
			</nav>
		</>
	);
}

export default Dropdown;
