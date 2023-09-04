import React from 'react';
import '../../stylesheets/Bepixelconstruction.css'
import bpg1 from '../../image/bepixelguideline/construction.svg'
import bpg2 from '../../image/bepixelguideline/construction2.svg'

function Bepixelconstruction(){

    return(
        <div className='bepixelconstructionContainer'>
            <img src={bpg1} />
            <img src={bpg2} />
            <p>el logotipo cuenta con ajustes visuales para
            mantenerlo compensado.</p>
        </div>
    )
}

export default Bepixelconstruction;