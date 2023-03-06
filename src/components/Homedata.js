import React, { useEffect } from 'react';
import '../stylesheets/Homedata.css'

function Homedata (){

    useEffect(()=>{
        document.querySelectorAll(".slider").forEach((item) => {
            let clone = item.querySelector(".slider-items").cloneNode(true);
            clone.classList.add("clone");
            clone.ariaHidden = true;
            item.append(clone);
        });
    },[])
    


    return(
        <div className='homedataContainer'>
            <div className='homedata'>
                <div className='sectorTitleContainer'>
                    <h2 className='sectorTitlewhite'>Alguno de nuestros servicios</h2>
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-once="true">
                    <div className="slider">
                        <div className="slider-items">
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?earth,1" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?earth,2" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?earth,3" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?earth,4" alt=""/>
                                <h4>Title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="slider" style={{["--delay"]:"-10s",["--slow"]:"-5s"}}>
                        <div className="slider-items">
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?fire,1" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?fire,2" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?fire,3" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?fire,4" alt=""/>
                                <h4>Title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="slider hidden-m" style={{["--delay"]:"-20s",["--slow"]:"-5s"}}>
                        <div className="slider-items">
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?water,1" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?water,2" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?water,3" alt=""/>
                                <h4>Title</h4>
                            </div>
                            <div className="item">
                                <a href="https://tomjacobs.co.uk/" target="_blank"></a>
                                <img src="https://source.unsplash.com/random/300x450/?water,4" alt=""/>
                                <h4>Title</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homedata;