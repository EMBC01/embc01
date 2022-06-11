import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import './inicio.css'
import ImgLeft from './img/PC/PC1.jpg'
import ImgSectores from './img/12aa0516-01fe-4998-984f-2fefc3c600e4.jpg'
import ImgSectores2 from './img/147ea45f-6918-4272-8e4c-97fb3b0da049.jpg'
import ImgSectores3 from './img/5258ec1d-7dea-4481-ae2a-db238e35f04c.jpg'
import { Link } from "react-router-dom"
import AutomaticCarousel from './AutomaticCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import Carousel1 from "./Carousel1"



function Inicio() {
  return (
    <div className='inicio'>
         <div className='social-icons'>
          <a href='https://www.facebook.com/embc.hmo/'><FontAwesomeIcon icon={faFacebook} /></a><br/>
          <a href='https://instagram.com/embc.hmo?igshid=YmMyMTA2M2Y='><FontAwesomeIcon icon={faInstagram} /></a><br/>
          <a href='https://www.linkedin.com/in/fabio-raul-aceves-moreno-5b9852233/'><FontAwesomeIcon icon={faLinkedin}/></a>
         </div>
      <div className='inicio_flex'>
        <div className='inicio_flex_left'>
         
          <h2>Líderes en Estructuras Metálicas.</h2><br/><br/>
          <p>Servicios Industriales y de Construcción.</p>
          <p>
          </p>
          <button className='leer'>Leer más</button>
        </div>
        <div className='inicio_flex_right'>
 {/*          <UncontrolledCarousel
            items={[
              {

                key: 1,
                src: require('./img/3aa1a33d-a606-41ce-b5e5-bde5f6a89a36.jpg'),
              },
              {

                key: 2,
                src: require('./img/3b3275bd-931e-4173-a371-3f1c2577234b.jpg'),

              },
              {

                key: 3,
                src: require('./img/05c1679e-1c96-4daa-9f2d-6fc3a173e03d.jpg'),

              }
            ]}
          /> */}
          


<Carousel1  />





          
        </div>
      </div>
      <div className='manos_content'>
        <h1 className='manos'>PERSONAL CAPACITADO</h1>
        <div className='info_flex'>
          <div className='info_left'>
            <img src={ImgLeft}></img>
          </div>
          <div className='info_right'>
            {/* <h3 className='manoss'>MANOS DE ACERO</h3><br /> */}
            <p>
              Nuestro personal cuenta con la experiencia, certificaciones y cursos necesarios para ejecutar los proyectos de nuestros clientes, buscando siempre una mejora continua.
              Contamos con un área de taller de 3,000 m2 y un área de almacén de 7, 000 m2 para brindar los servicios requeridos para los distintos proyectos. Así mismo los equipos cuentan con las certificaciones requeridas.
            </p>
          </div>
        </div>
      </div>
      <div className='sectores_content'>
        <div className='sectores'>
      
          <h2>Sectores de construcción <span className='blue'>EMBC.</span></h2>
          
        </div>

        <div className='sectores_img'>
          <div><h3>Institucional</h3><br /><img src={ImgSectores}></img></div>
          <div><h3>Agroindustrial</h3><br /><img src={ImgSectores2}></img></div>
          <div><h3>Comercial</h3><br /><img src={ImgSectores3}></img></div>

        </div>
        <div className='link_contact'>
          <Link to="/contacto">Contactar</Link>
        </div>
        <br /><br /><br /><br /><br />
      </div>
      <div className='clientes'>
          <div className='clientes_left'>
          <h2>Nuestros <span className='blue'>Clientes</span></h2><br/>
          <p>Confianza en la calidad de nuestros servicios.</p><br/><br/>
          </div>
          <div className='clientes_right'>
        <div className='carousel_automatic'>
              <AutomaticCarousel/>
        </div>
        <br/><br/>
        </div>
      </div>
     



    </div>
  )
}

export default Inicio