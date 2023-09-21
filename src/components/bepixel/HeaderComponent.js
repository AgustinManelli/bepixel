import '../../stylesheets/bepixel/HeaderComponent.css';

function HeaderComponent(props) {
	return (
		<header className='headerComponentContainer'>
			<div className='headerComponentSection1 ContainerGeneral'>
				<div className='headerComponentSection1_1'>
					<div style={{ position: 'relative' }}>
						<img
							src={props.img}
							style={{ position: 'absolute', top: '0', filter: 'blur(50px)' }}
						/>
						<img src={props.img} />
					</div>
					<p>{props.text1}</p>
					<p>{props.text2}</p>
				</div>
				{props.element}
			</div>
		</header>
	);
}

export default HeaderComponent;
