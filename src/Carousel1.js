import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carousel1.css'

const items = [
  {
    src: require('./img/filtro/fab1.jpg'),
    altText: 'Slide 1ss',
    /* caption: 'Slide 1', */
    header: 'FABRICACIÓN Y MONTAJE DE ACERO MECÁNICO'
  },
  {
    src: require('./img/filtro/CORTE.png'),
    altText: 'Slide 2',
    /* caption: 'Slide 2', */
    header: 'CORTE CON PLASMA Y CNC.'
  },
  {
    src: require('./img/filtro/hab.jpg'),
    altText: 'Slide 2',
    /* caption: 'Slide 2', */
    header: 'HABILITADO Y MONTAJE DE TUBERÍA DE ACERO AL CARBÓN E INOXIDABLE'
  },
  
  {
    src: require('./img/filtro/soldadura1.jpg'),
    altText: 'Slide 3',
    /* caption: 'Slide 3', */
    header: 'SOLDADURAS ESPECIALES'
  },
  {
    src: require('./img/filtro/pintura.jpg'),
    altText: 'Slide 4',
    /* caption: 'Slide 3', */
    header: 'SAND BLAST Y PINTURA'
  },
  {
    src: require('./img/filtro/montaje.jpg'),
    altText: 'Slide 5',
    /* caption: 'Slide 3', */
    header: 'MONTAJE Y MANTENIMIENTO DE EQUIPOS MECANICOS'
  },
  {
    src: require('./img/filtro/grua.jpg'),
    altText: 'Slide 6',
    /* caption: 'Slide 3', */
    header: 'RENTA DE GRUAS'
  }
  
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;