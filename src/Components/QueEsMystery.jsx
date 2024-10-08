import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function QueEsMystery() {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

    return (
        <section className="bg-white py-16 px-4" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título en letras azules */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 oswald-font">
              ¿Que es un Mystery Shopper?
            </h2>
    
            {/* Texto descriptivo */}
            <p className="text-gray-900 text-lg md:text-xl oswald-font">
            Un Mystery Shopper es una persona contratada por una empresa para actuar como cliente encubierto
             con el fin de evaluar la calidad del servicio y otros aspectos de la experiencia del cliente. 
             Estos evaluadores anónimos visitan tiendas, restaurantes, sucursales bancarias o cualquier 
             tipo de establecimiento sin revelar su identidad, recopilando información detallada sobre el trato recibido, 
             la atención del personal, la limpieza, la presentación de productos y el cumplimiento de los protocolos de la empresa.
            </p>

            
          </div>
        </section>
      );
}
