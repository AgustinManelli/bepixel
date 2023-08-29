import React from 'react';
import '../stylesheets/FloatingWSP.css'
import {BsWhatsapp} from 'react-icons/bs';

function FloatingWSP () {

  return(
    <div>

        <a href="https://api.whatsapp.com/send?phone=543571534631&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20su%20servicio." className="float" target="_blank">
            <BsWhatsapp className='my-float'/>
        </a>
        
    </div>
  )
}

export default FloatingWSP ;