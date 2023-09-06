import {React} from 'react';
import '../../stylesheets/Homeheader.css'
import ButtonCTA from '../ButtonCTA';
import { useTranslation } from 'react-i18next';


function Homeheader(){
    const [t, i18n] = useTranslation("global");
    return(
        <div className='homeheaderContainer'>
            <div className='homeheaderElements'>
                <div className='homeheaderElement textelement'>
                    <div> 
                        <h2>branding</h2>
                        <h2>{t("home-header.textelement1")}</h2>
                        <h2>{t("home-header.textelement2")}</h2>
                    </div>
                    <ButtonCTA name={t("home-header.buttoncta")} link="https://youtube.com"/>
                </div>
                <div className='homeheaderElement homeheaderimg'>
                </div>
            </div>
        </div>
    );
}

export default Homeheader;