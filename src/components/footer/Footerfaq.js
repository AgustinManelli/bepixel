import React from 'react';
import '../../stylesheets/Footerfaq.css';


function Footerfaq(){
    return(
        <div className='footerfaqContainer'>
            {/*<img src={logoh} />*/}

            <div className='footerinfoSeparatorContainer'>
                <div className='footerinfoSeparator'></div>
                <p>FAQ</p>
                <div className='footerinfoSeparator'></div>
            </div>
            <div className='footerinfoText'>
                <h3>¿Qué es bepixel?</h3>
                <p>En bepixel nos dedicamos a crear las piezas gráficas que tu marca necesita, tanto para tus redes, hasta papelería corporativa</p>
                <h3>¿De dónde somos?</h3>
                <p>Somos de Córdoba, Argentina, Pero trabajamos para toda Argentina y... el mundo 👀</p>
                <a href='/faq'>Conocé más aquí</a>
            </div>
        </div>

    );
}

export default Footerfaq;