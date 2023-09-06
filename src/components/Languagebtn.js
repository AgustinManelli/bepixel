import React from 'react';
import '../stylesheets/Languagebtn.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import $ from 'jquery'; 



function Languagebtn(){

        const [t, i18n] = useTranslation("global");

        useEffect(() => {
            if(window.localStorage.getItem("lng") != "es"){
                document.querySelector('.check-toggle').checked = 'true';
            };
        }, [])


        const lenguagecheck = event => {

            var checkboxlenguage = document.querySelector('.check-toggle');

            if(window.localStorage.getItem("lng") == 'es'){console.log(window.localStorage.getItem("lng") == 'es')}else{console.log('no')};

            if (checkboxlenguage.checked) {
                i18n.changeLanguage("en")
                window.localStorage.setItem("lng", "en");
              } else {
                i18n.changeLanguage("es")
                window.localStorage.setItem("lng", "es");
            }

            $('body,html').animate({ scrollTop:'0px' },500);

        };
            
    return(

        <div class="neumorphism-toggle">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={lenguagecheck}/>
            <label htmlFor="language-toggle">
                <div class="switch">
                    <div class="dot"></div>
                </div>
                <span>english version</span>
            </label>
        </div>
    );
}

export default Languagebtn;