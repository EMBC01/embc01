import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from './Inicio';
import Servicios from './Servicios';
import Contacto from './Contacto';
import Proyectos from './Proyectos';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './Footer';






function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/proyectos" element={<Proyectos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
