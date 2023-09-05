import React from 'react';
import '../stylesheets/AccordionHome.css'
import Accordion from '../components/Accordion.js';
import Tittles from './Tittles';

function AccordionHome(){

    return(
        
        <div className='accordionHomeContainer'>
            <div className='accordionHome_mw'>
                <div className='accordionHome_0'>
                    <Tittles nombre="faq" color='var(--secondaryColor)'/>
                    <h3>Preguntas Frecuentes (FAQs).</h3>
                </div>
                <div className='accordionHome_1'>
                    <Accordion title="¿Dónde nos encontramos?" content="Somos de Córdoba, Argentina, no tenemos casa central pero realizamos trabajos a pedido para toda la Argentina."/>
                    <Accordion title="¿Cómo puedo contactarme?" content="Podes contactarte al +54(3571)534631, al mail bepixelarg@gmail.com, o en cualquiera de nuestras redes sociales."/>
                    <Accordion title="¿Cuánto cuestan los servicios?" content="El valor de los servicios varían dependiendo del mismo y las horas que requiera, contamos con los mejores precios del mercado, lanzamos la plataforma hace poco y queremos mostrar nuestro esfuerzo y compromiso con cada uno de nuestros proyectos."/>
                    <Accordion title="¿Tienen ofertas?" content="Contamos con algunos packs de inicio para pymes y emprendimientos, proximamente se presentaran en la web. De momento podés consultarlo por nuestros canales de comunicación."/>
                </div>
            </div>
        </div>
    )
}

export default AccordionHome;