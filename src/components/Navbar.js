import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../stylesheets/Navbar.css'
import logof from '../image/ISOTIPO.svg'
import logof2 from '../image/LOGOVERTICAL.svg'


function Navbar({setIsActive, isActive, isPhone, setIsPhone, shadowScroll, setShadowScroll}){

    const handleClick = event => {
        setIsActive(current => !current);
    };

    const closeNav = event => {
        setIsActive(false);
    };

    const handleResize = () => {
        if (window.innerWidth <= 600) {
            setIsPhone(true);
        }else{
            setIsPhone(false);
        }
    }

    const scrollnavigate = () => {
        if (window.scrollY > 0){
            setShadowScroll(false);
        }else{
            setShadowScroll(true);
        }

        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressbar").value = scrolled;
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", scrollnavigate)
        if (window.innerWidth <= 600) {
            setIsPhone(true);
        }else{
            setIsPhone(false);
        }
    })

  return (
    <div id="navContainer" className={isActive ? 'navContainer opened navShadow' : (shadowScroll ? 'navContainer' : 'navContainer navShadow')}>
        <div className='nav'>
            <NavLink className='anchorlogoNav' to='/' onClick={closeNav}> <img src={isPhone ? logof2 : logof} draggable="false" className={isPhone ? 'logoNav2' : 'logoNav'}/> </ NavLink>
            <div className={isActive ? "icon nav-icon-5 open" : "icon nav-icon-5"} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isActive ? 'navUl activated' : 'navUl'}>
                <li className='navLi' id='navLi'>
                    <NavLink to='/trabajos' className='navAnchor' activeclassname='navAnchor active' onClick={closeNav}>trabajos</NavLink>
                </li>

                <li className='navLi'>
                    <NavLink to='/faq' className='navAnchor' activeclassname='navAnchor active' onClick={closeNav}>faq</NavLink>
                </li>

                <li className='navLi'>
                    <NavLink to='/todo' className='navAnchor' activeclassname='navAnchor active' onClick={closeNav}>todo</NavLink>
                </li>
            </ul>
            <progress className="progressBar" id="progressbar" max="100" value="0"></progress>
        </div>
    </div>
  );
}

export default Navbar;