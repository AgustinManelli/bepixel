import React from 'react';
import '../../stylesheets/Bepixelstruct.css'
import bpg1 from '../../image/bepixelguideline/bpg6.svg'
import bpg2 from '../../image/bepixelguideline/bpg7.svg'

function Bepixelstruct(){

    return(
        <div className='bepixelstructContainer'>

            <img src={bpg1} />
            <img src={bpg2} />

        </div>
    )
}

export default Bepixelstruct;