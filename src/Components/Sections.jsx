import React from 'react';
import { Link } from 'react-router-dom'

export default function Sections() {

  return (
    <div className='pt-16'>
      {/* <section className="w-full relative bg-cover bg-center h-screen overflow-hidden " style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp4748439.jpg)', backgroundSize: 'cover' }}> */}
      <section className="w-full relative bg-cover bg-center h-screen overflow-hidden " style={{ backgroundImage: 'url(/images/mysteryHome.jpg)', backgroundSize: 'cover' }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
          {/* Lema */}
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 oswald-font">
            Eleva la calidad del servicio en tu negocio
          </h1>

          {/* Texto de relleno */}
          <p className="text-white text-lg md:text-xl mb-8 max-w-lg oswald-font">
            En [Nombre de tu empresa], ofrecemos servicios profesionales de Mystery Shopper diseñados para ayudarte a mejorar la experiencia de tus clientes y optimizar el rendimiento de tu negocio.
          </p>

          {/* Botones */}
          <div className="space-x-4">
            <Link to="/Servicios" className="bg-blue-500 font-semibold text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 oswald-font">
              Más Información
            </Link>
            <Link to='/Contacto' className="bg-transparent font-semibold border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-black transition duration-300 oswald-font">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
