import '../../stylesheets/bepixel/HeaderComponent.css';

function HeaderComponent(props) {
	return (
		<header className='headerComponentContainer'>
			<div className='headerComponentSection1 ContainerGeneral'>
				<div className='headerComponentSection1_1'>
					<img src={props.img} />
					<p>
						{props.text1}
					</p>
					<p>
						{props.text2}
					</p>
				</div>
				{props.element}
			</div>
		</header>
	);
}

export default HeaderComponent;
