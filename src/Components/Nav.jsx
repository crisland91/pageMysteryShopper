import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link to="/">MiLogo</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              to="Nosotros"
              className="text-white relative px-3 py-2 transition duration-300 ease-in-out hover:bg-white font-bold hover:text-gray-800 rounded"
            >
              Nosotros
            </Link>
            <Link
              to="Servicios"
              className=" text-white relative px-3 py-2 transition duration-300 ease-in-out hover:bg-white font-bold hover:text-gray-800 rounded"
            >
              Servicios
            </Link>
            <Link
              to="Blog"
              className=" text-white relative px-3 py-2 transition duration-300 ease-in-out hover:bg-white font-bold hover:text-gray-800 rounded"
            >
              Blog
            </Link>
            <Link
              to="Contacto"
              className=" text-white relative px-3 py-2 transition duration-300 ease-in-out hover:bg-white font-bold hover:text-gray-800 rounded"
            >
              Contacto
            </Link>
          </div>


          {/* Botón hamburguesa para móviles */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden">
            <Link to="Nosotros" onClick={() => setIsOpen(false)} className="text-white font-bold block py-2 px-4 text-sm hover:bg-white hover:text-gray-800">
              Nosotros
            </Link>
            <Link to="Servicios" onClick={() => setIsOpen(false)} className="text-white font-bold block py-2 px-4 text-sm hover:bg-white hover:text-gray-800">
              Servicios
            </Link>
            <Link to="Blog" onClick={() => setIsOpen(false)} className="text-white font-bold block py-2 px-4 text-sm hover:bg-white hover:text-gray-800">
              Blog
            </Link>
            <Link to="Contacto" onClick={() => setIsOpen(false)} className="text-white font-bold block py-2 px-4 text-sm hover:bg-white hover:text-gray-800">
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


