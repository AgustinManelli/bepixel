import {React} from 'react';
import '../../stylesheets/Homeheader.css'
import homeheaderpic from '../../image/14.png'
import ButtonCTA from '../ButtonCTA';


function Homeheader(){

    return(
        <div className='homeheaderContainer'>
            <div className='homeheaderElements'>
                <div className='homeheaderElement textelement'>
                    <div> 
                        <h2>branding</h2>
                        <h2>sin</h2>
                        <h2>límites</h2>
                    </div>
                    <ButtonCTA name="contáctanos" link="https://youtube.com"/>
                </div>
                <div className='homeheaderElement homeheaderimg'>
                    <img src={homeheaderpic} />
                </div>
            </div>
        </div>
    );
}

export default Homeheader;