import React, {useState} from 'react'
import {Link} from "react-router-dom"
import logo from './img/Logos/embcxx.jpeg'
import './header.css'
import { useEffect } from "react"
import {animateScroll as scroll} from "react-scroll";




function Header() {

  

  const fixedBar = () => {
    window.addEventListener("scroll", function () {
   /*      var nav = document.querySelector("nav");
        var subHeader = document.querySelector("section"); */
       /*  var logox = document.getElementById("logox"); */
       /*  var headerFlex = document.querySelectorAll("header_flex"); */
    /*     var input = document.querySelector('article'); */
      /*   nav.classList.toggle("abajo", window.scrollY > 0);
        subHeader.classList.toggle("subir", window.scrollY > 0); */
      /*   logox.classList.toggle("reducir", window.scrollY > 0); */
        /* headerFlex.classList.toggle("color", window.scrollY > 0); */
    /*     input.classList.toggle("reducir", window.scrollY > 0); */
    
    var nav = document.getElementById("header_flex");
    nav.classList.toggle("reducir", window.scrollY > 0);
   /*  var logox= document.getElementById("logox"); */
  /*   logox.classList.toggle("logo_reducir", window.scrollY > 0); */


    })
}

useEffect(() => {
    fixedBar()
}, [])

const[scrollTop, setScrollTop] = useState();
  
const scrollTopY = () =>{
  scroll.scrollToTop();
}
  return (
    <div className='header'>

<header>

        <div className='header_flex' id='header_flex'>
          <div className='logo'>
            <Link to="/" onClick={()=>setScrollTop(scrollTopY)}><img src={logo} id="logox" alt='logo'></img></Link>
          </div>
            <nav className='nav'>
                <ul>
                
                    <li><Link to="/" onClick={()=>setScrollTop(scrollTopY)}>Inicio</Link></li>
                    <li><Link to="/servicios"onClick={()=>setScrollTop(scrollTopY)}>Servicios</Link></li>
                    <li><Link to="/proyectos"onClick={()=>setScrollTop(scrollTopY)}>Proyectos</Link></li>
                    <li><Link to="/Contacto"onClick={()=>setScrollTop(scrollTopY)}>Contácto</Link></li>
                </ul>
            </nav>
            <div className='cel'><p><span className='blue'>Cel. (662)100.2272/224.4883</span></p></div>
        </div>
    </header>
    </div>
  )
}

export default Header