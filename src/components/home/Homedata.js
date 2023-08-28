import React from 'react';
import '../../stylesheets/Homedata.css'
import Tittles from '../Tittles';
import ServiceItem from '../ServiceItem';

function Homedata (){

    return(
        <div className='homedataContainer'>
            <div className='homedata'>
                <div className='homedataElement'>
                    <Tittles nombre="servicios" color='var(--secondaryColor)'/>
                    <p>la mejor calidad en servicio para tu empresa o emprendimiento en Argentina</p>
                </div>
                <div className='homedataElement services'>
                    <ServiceItem title="branding" paraph="identificación gráfica, logotipos, recursos gráficos." img="serv1.svg"/>
                    <ServiceItem title="papelería y cartelería" paraph="tarjetas personales, folletos, manuales de marca, etiquetas, carteles y vidrieras." img="serv2.png"/>
                    <ServiceItem title="diseño web/digital" paraph="creación de páginas web, wordpress, recursos y elementos para RRSS" img="serv3.png"/>
                </div>
            </div>
        </div>
    )
}

export default Homedata;