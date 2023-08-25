import React from 'react';
import '../stylesheets/Tittles.css'

function Tittles (props) {

  return(
    <div className='titlElement'>

            <svg>
                <text x="50%" y="60%"  text-anchor="middle"  >
                {props.nombre}
                </text>
            </svg>

    </div>
  )
}

export default Tittles ;