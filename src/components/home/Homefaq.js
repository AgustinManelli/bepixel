import React from 'react';
import '../../stylesheets/Homefaq.css'
import logof from '../../image/LOGOVERTICAL.svg'
import { ReactComponent as Logo } from '../../image/LOGOVERTICALSTROKE.svg';
import Tittles from '../Tittles';

export default function Homefaq() {
  return (
    <div className='homefaqContainer'>
        <div>
            {/*<img src= {logof} draggable="false"/>*/}
            <Logo className='homefaqLogo'/>
        </div>
        <div className='homefaqtext'>
            <Tittles nombre="sobre nosotros"/>
            <p>Somos bepixel, una agencia de diseño gráfico de Córdoba, Argentina dedicada a transformar conceptos en piezas visuales extraordinarias. Nuestra pasión es plasmar la creatividad en cada proyecto, creando identidades visuales impactantes.</p>
        </div>
    </div>
  );
}