import {React} from 'react';
import '../../stylesheets/Homeprice.css'


function Homeprice(){

    return(
        <div className='homepriceContainer'>
            <div class="plan-options">
                <div class="plan-card">
                <h3>Emprendimientos</h3>
                <div class="price">
                    <span class="price-dollar">$</span>
                    <h2 class="price-anually">00.00</h2>
                </div>
                <ul class="plan-features">
                    <li>prueba</li>
                    <li>prueba</li>
                    <li>prueba</li>
                </ul>
                <button class="action-button">consultanos</button>
                </div>

                <div class="plan-card card-highlight">
                <h3>Pymes</h3>
                <div class="price">
                    <span class="price-dollar">$</span>
                    <h2 class="price-anually">00.00</h2>
                </div>
                <ul class="plan-features">
                    <li>prueba</li>
                    <li>prueba</li>
                    <li>prueba</li>
                </ul>
                <button class="action-button">consultanos</button>
                </div>

                <div class="plan-card">
                <h3>Empresas</h3>
                <div class="price">
                    <span class="price-dollar">$</span>
                    <h2 class="price-anually">00.00</h2>
                </div>
                <ul class="plan-features">
                    <li>prueba</li>
                    <li>prueba</li>
                    <li>prueba</li>
                </ul>
                <button class="action-button">consultanos</button>
                </div>
            </div>
        </div>
    );  
}

export default Homeprice;