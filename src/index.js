import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Nosotros from './Pages/Nosotros'
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Servicios from './Pages/Servicios';
import Blog from './Pages/Blog';
import ContactoPage from './Pages/ContactoPage';
import Home from './Pages/Home';
import UnArticulo from './Components/UnArticulo';
import Privacidad from './Pages/Privacidad';

import QueEsMystery from './Pages/Articulos/QueEsMystery';
import Cuestionarios from './Pages/Articulos/Cuestionarios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Router>
      
        <Nav />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/Nosotros" element={ <Nosotros /> } />
          <Route path="/Servicios" element={ <Servicios /> } />
          <Route path="/Blog" element={ <Blog /> } />
          <Route path="/Contacto" element={ <ContactoPage /> } />
          <Route path="/Blog/:id" element={ <UnArticulo /> } />
          <Route path='/Privacidad' element={<Privacidad />} />

          {/* Esto es para el Blog */}
          <Route path='/Blog/QueEsUnMystery' element={<QueEsMystery />} />
          <Route path='/Blog/Cuestionarios' element={<Cuestionarios />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
