import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ReasonDash() {

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out' });
  }, []);

  return (
    <section className=" py-16 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Contenido textual */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 oswald-font md:text-left sm:text-center" data-aos="fade-up">
            La importancia del estudio del Mystery Shopper
          </h2>
          <p className="text-gray-900 text-lg md:text-xl sm:text-center md:text-justify oswald-font" data-aos="fade-up">
            Un estudio de Mystery Shopper es fundamental para conocer cómo se percibe tu negocio desde la perspectiva del cliente. 
            Mediante evaluaciones encubiertas, puedes identificar posibles fallas en el servicio, medir el desempeño de tu equipo y 
            asegurarte de que los estándares establecidos se cumplen en cada interacción.
          </p> 
          
        </div>

        {/* Imagen */}
        <div className="text-center" data-aos="fade-right">
          <img
            className="rounded-lg mx-auto w-full sm:w-auto  md:w-auto"
            src="/images/reasonMystery.jpeg"
            alt="Herramienta de investigación de mercados online"
           
          />
        </div>
      </div>
    </section>
  );
}
