import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaRegEnvelope, FaPhoneSquareAlt, FaMapMarkerAlt, FaWhatsappSquare} from "react-icons/fa";
import '../stylesheets/RightContext.css'


function RightContext({showNav, hideContext, context, xYPosistion, initMenu}) {
  return (
    <>
        {context && (
          <div
            style={{ top: xYPosistion.y, left: xYPosistion.x }}
            className="rightClick"
          >
            <a href='https://www.instagram.com/aguss_manelli/' target='_blank'>
              <div className="menuElement">
                <div className='contextSelection'><FaInstagramSquare/><p>INSTAGRAM</p></div>
              </div>
            </a>
            <a href='https://www.instagram.com/aguss_manelli/' target='_blank'>
              <div className="menuElement">
                <div className='contextSelection'><FaFacebookSquare/><p>FACEBOOK</p></div>
              </div>
            </a>
            <a href='https://www.instagram.com/aguss_manelli/' target='_blank'>
              <div className="menuElement">
                <div className='contextSelection'><FaWhatsappSquare/><p>WHATSAPP</p></div>
              </div>
            </a>
          </div>
        )}
    </>
  );
}
export default RightContext;