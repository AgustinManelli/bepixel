import React from 'react';
import '../stylesheets/ButtonCTA.css'

function ButtonCTA (props) {

  return(
    <div className='titlElement'>

        <button>
            <span><a href={props.link} target="_blank">{props.name}</a></span>
        </button>
        
    </div>
  )
}

export default ButtonCTA ;