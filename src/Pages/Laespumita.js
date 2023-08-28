import React from 'react';
import '../stylesheets/Home.css'
import 'aos/dist/aos.css';
import HeaderComponent from '../components/HeaderComponent';

function Laespumita(){

    return(
        
        <div className='laespumitaContainer'>
            <HeaderComponent title="la espumita" paraph="Tienda de artículos de limpieza del hogar y automotor" logo="laespumita.svg"/>
        </div>
    )
}

export default Laespumita;