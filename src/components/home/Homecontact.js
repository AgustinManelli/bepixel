import React from 'react';
import '../../stylesheets/Homecontact.css'
import Tittles from '../Tittles';

export default function Homecontact() {
  return (
    <div className='HomecontactContainer'>

      <form className='formgroup' action="https://formsubmit.co/bepixelarg@gmail.com" method="POST">

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="nombre" name="nombre" id='nombre' required />
          <label for="nombre" class="form__label">nombre</label>
        </div>

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="email" name="email" id='email' required />
          <label for="email" class="form__label">email</label>
        </div>

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="numero" name="numero" id='numero' required />
          <label for="numero" class="form__label">numero</label>
        </div>

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="mensaje" name="mensaje" id='mensaje' required />
          <label for="mensaje" class="form__label">mensaje</label>
        </div>

        <button type="submit">
          <span>enviar</span>
          <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
          </svg>
        </button>

        <input type='hidden' name='_next' value='http://localhost:3000/'>
        </input>
        <input type='hidden' name='_captcha' value="false"></input>

      </form>

      <div className='contactgroup'>
        <Tittles nombre="contacto"/>
        <p>llená el formulario y contactanos, nos pondremos en contacto con usted lo antes posible</p>
      </div>

    </div>
  );
}
