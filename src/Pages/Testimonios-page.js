import React, {useState} from 'react';
import Testimonio from '../components/testimonio.js';

function TestimoniosPage(){

    return(
        <div className='contenedor-principal'>
              <h1 >PRUEBA</h1>
              <div className='onlytestimonios'>
                <Testimonio 
                  imagen='emma'
                  alt='ss'
                  nombre='ss'
                  pais='ss'
                  cargo='ssa'
                  empresa='ss'
                  testimonio='ss'
                />
                <Testimonio 
                  imagen='sarah'
                  alt='ss'
                  nombre='ss'
                  pais='ss'
                  cargo='ss'
                  empresa='ss'
                  testimonio='ss'
                />
                <Testimonio 
                  imagen='shawn'
                  alt='ss'
                  nombre='ss'
                  pais='ss'
                  cargo='ss'
                  empresa='ss'
                  testimonio='ss'
                />
              </div>
        </div>
    )
}

export default TestimoniosPage;