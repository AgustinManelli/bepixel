import React from 'react';
import '../stylesheets/ProyectsHeader.css';

function ProyectsHeader(props) {
	return (
		<header className='proyectHeaderContainer'>
			<div className='proyectHeaderSection1'>
				<div className='proyectHeaderSection1_1'>
					<img src={props.img} />
					<p>
						{props.text1}
					</p>
					<p>
						{props.text2}
					</p>
				</div>
				<div className="proyectHeaderImg" style={{backgroundImage: "url(" + props.element + ")", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} > </div>
			</div>
		</header>
	);
}

export default ProyectsHeader;