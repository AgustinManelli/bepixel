import React from 'react';
import '../stylesheets/CTAButton.css';

function CTAButton(props) {
	return (
		<div className='ctaButtonContainer'>
            <a href={props.link} target='_blank ' className='ctaButton'>
                <span>{props.title}</span>
            </a>
		</div>
	);
}

export default CTAButton;