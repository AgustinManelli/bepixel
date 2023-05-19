import {React} from 'react';
import '../../stylesheets/Homeheader.css'


function Homeheader(){

    return(
        <div className='homeheaderContainer'>
            <div className='homeheaderElements'>
                <div className='homeheaderElement textelement'>
                    <h1>impulsá tu marca</h1>
                    <p>Creamos los elementos gráficos necesarios para tu marca. <br/> Empezá tu emprendimiento como se debe</p>
                    <a href='https://youtube.com' target='_blank'><button className="custom-btn btn-5">empezá ahora</button></a>
                </div>
                <h1>aca va algo</h1>
                <div className='homeheaderElement'>
                </div>
            </div>
        </div>
    );
}

export default Homeheader;