import React from 'react';
import '../../stylesheets/Homedata.css'
import Tittles from '../Tittles';
import ServiceItem from '../ServiceItem';
import 'aos/dist/aos.css';
import AOS from 'aos';


function Homedata (){
    
    AOS.init();

    return(
        <div className='homedataContainer'>
            <div className='homedata'>
                <div className='homedataElement'>
                    <Tittles nombre="servicios" color='var(--secondaryColor)'/>
                    <p className='homedataElement_text'>la mejor calidad en servicio para tu empresa o emprendimiento en Argentina</p>
                </div>
                <div className='homedataElement services'>
                    <div data-aos="zoom-in" data-aos-once="true">
                        <ServiceItem title="branding" paraph="identificación gráfica, logotipos, recursos gráficos." img="serv1.svg"/>
                    </div>
                    <div data-aos="zoom-in" data-aos-once="true">
                        <ServiceItem title="papelería y cartelería" paraph="tarjetas personales, folletos, manuales de marca, etiquetas, carteles y vidrieras." img="serv2.png"/>
                    </div>
                    <div data-aos="zoom-in" data-aos-once="true">
                        <ServiceItem title="diseño web/digital" paraph="creación de páginas web, wordpress, recursos y elementos para RRSS" img="serv3.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homedata;