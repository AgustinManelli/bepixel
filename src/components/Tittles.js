import React from 'react';
import '../stylesheets/Tittles.css'

function Tittles (props) {

  return(
    <div className='titlElement'>

            <svg fill={props.color}>
                <text x="50%" y="60%"  textAnchor="middle">
                {props.nombre}
                </text >
            </svg>

    </div>
  )
}

export default Tittles ;