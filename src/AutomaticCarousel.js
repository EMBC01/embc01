import React, { Component } from "react";
import Slider from "react-slick";
import './automaticCarousel.css'

import Img1 from './img/Empresas/5BB8HkcY_400x400.jpg'
import Img2 from './img/Empresas/450_1000.jpg'
import Img3 from './img/Empresas/1523564549192.jfif'
import Img4 from './img/Empresas/1562839103650.jfif'
import Img5 from './img/Empresas/1570461335562.jfif'
import Img6 from './img/Empresas/1581636136506.jfif'
import Img7 from './img/Empresas/cae2f24e21aa45ec8d2d235428115thumbnail.jpg'
import Img8 from './img/Empresas/cfe-1230x706.png'
import Img9 from './img/Empresas/contruplan.png'
import Img10 from './img/Empresas/descarga.jfif'
import Img11 from './img/Empresas/descarga.png'
import Img12 from './img/Empresas/fotonoticia_20180507092506_420.jpg'
import Img13 from './img/Empresas/gunor.png'
import Img14 from './img/Empresas/cae2f24e21aa45ec8d2d235428115thumbnail.jpg'
import Img15 from './img/Empresas/cfe-1230x706.png'
import Img16 from './img/Empresas/contruplan.png'
import Img17 from './img/Empresas/descarga.jfif'
import Img18 from './img/Empresas/descarga.png'

import Img20 from './img/Empresas/gunor.png'
import Img21 from './img/Empresas/images.png'
import Img22 from './img/Empresas/jc.png'
import Img23 from './img/Empresas/martin.jfif'
import Img24 from './img/Empresas/PlantillaFotosCategroríasNoticias-45_13.png'
import Img25 from './img/Empresas/socio-tijuanaedc-haskell.png'
import Img26 from './img/Empresas/tetakawi.png'
import Img27 from './img/Empresas/turbo.png'
import Img28 from './img/Empresas/union.jfif'


export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={Img1}></img>
          </div>
          <div>
          <img src={Img2}></img>
          </div>
          <div>
          <img src={Img3}></img>
          </div>
          <div>
          <img src={Img4}></img>
          </div>
          <div>
          <img src={Img5}></img>
          </div>
          <div>
          <img src={Img6}></img>
          </div>
          <div>
          <img src={Img7}></img>
          </div>
          <div>
          <img src={Img8}></img>
          </div>
          <div>
          <img src={Img9}></img>
          </div>
          <div>
          <img src={Img10}></img>
          </div>
          <div>
          <img src={Img11}></img>
          </div>
          <div>
          <img src={Img12}></img>
          </div>
          <div>
          <img src={Img13}></img>
          </div>
          <div>
          <img src={Img14}></img>
          </div>
          <div>
          <img src={Img15}></img>
          </div>
          <div>
          <img src={Img16}></img>
          </div>
          <div>
          <img src={Img17}></img>
          </div>
          <div>
          <img src={Img18}></img>
          </div>
      
          <div>
          <img src={Img20}></img>
          </div>
          <div>
          <img src={Img21}></img>
          </div>
          <div>
          <img src={Img22}></img>
          </div>
          <div>
          <img src={Img23}></img>
          </div>
          <div>
          <img src={Img24}></img>
          </div>
      
          <div>
          <img src={Img25}></img>
          </div>
      
          <div>
          <img src={Img26}></img>
          </div>
      
          <div>
          <img src={Img27}></img>
          </div>
      
          <div>
          <img src={Img28}></img>
          </div>
      
     
        </Slider>
      </div>
    );
  }
}