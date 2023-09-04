import React from 'react';
import '../../stylesheets/Homecontact.css'
import Tittles from '../Tittles';

export default function Homecontact() {
  return (
    <div className='HomecontactContainer'>

      <div className='Homecontact_mw'>
        <form className='formgroup' action="https://formsubmit.co/bepixelarg@gmail.com" method="POST">

          <div className="form__group field">
            <input type="input" className="form__field" placeholder="nombre" name="nombre" id='nombre' required />
            <label htmlFor="nombre" className="form__label">nombre</label>
          </div>

          <div className="form__group field">
            <input type="input" className="form__field" placeholder="email" name="email" id='email' required />
            <label htmlFor="email" className="form__label">email</label>
          </div>

          <div className="form__group field">
            <input type="input" className="form__field" placeholder="numero" name="numero" id='numero' required />
            <label htmlFor="numero" className="form__label">numero</label>
          </div>

          <div className="form__group field">
            <input type="input" className="form__field" placeholder="mensaje" name="mensaje" id='mensaje' required />
            <label htmlFor="mensaje" className="form__label">mensaje</label>
          </div>

          <button type="submit">
            <span>enviar</span>
            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
            </svg>
          </button>

          <input type='hidden' name='_next' value='https://agustinmanelli.github.io/Open/'>
          </input>
          <input type='hidden' name='_captcha' value="false"></input>

        </form>

        <div className='contactgroup'>
          <Tittles nombre="contacto" color='var(--secondaryColor)'/>
          <p>llená el formulario y contactanos, nos pondremos en contacto con usted lo antes posible</p>
        </div>
      </div>

    </div>
  );
}
