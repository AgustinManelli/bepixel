import React from 'react';
import '../stylesheets/Ourbrand.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import bepixelbrand from '../image/ISOTIPO.svg';
import bepixelbrand_phone from '../image/bepixelguideline/bpg1.png'
import Bepixelsections from '../components/bepixel/Bepixelsections';
import Bepixelmeaning from '../components/bepixel/Bepixelmeaning';
import Bepixelstruct from '../components/bepixel/Bepixelstruct';
import Bepixelbrandversion from '../components/bepixel/Bepixelbrandversion';

function Ourbrand(){

    AOS.init();

    return(
        
        <div className='ourbrandContainer'>
            <section className='ourbrandSection1'>
                <div className='ourbrandSection1_1'>
                    <img src={bepixelbrand} />
                    <p>La marca "bepixel" es una combinación de dos palabras: "be", que viene del inglés "ser", y "pixel", que es una referencia al diseño gráfico y la tecnología. Juntos, estos términos crean una marca moderna y relevante que refleja la especialidad de la empresa en diseño y marketing digital.</p>
                </div>
                <div className='ourbrandSection1_2'>
                    <img src={bepixelbrand_phone} />
                </div>
            </section>
            <section>
                <Bepixelsections section='significados' page={<Bepixelmeaning />}/>
            </section>
            <section>
                <Bepixelsections section='estructura' page={<Bepixelstruct />}/>
            </section>
            <section>
                <Bepixelsections section='versiones de marca' page={<Bepixelbrandversion />}/>
            </section>
        </div>
    )
}

export default Ourbrand;