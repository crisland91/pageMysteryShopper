import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ReasonDash() {

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="bg-white py-16 px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contenido textual */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 oswald-font" data-aos="fade-up">
            La importancia del estudio del Mystery Shopper
          </h2>
          <p className="text-gray-900 text-lg md:text-xl oswald-font" data-aos="fade-up">
            Un estudio de Mystery Shopper es fundamental para conocer cómo se percibe tu negocio desde la perspectiva del cliente. 
            Mediante evaluaciones encubiertas, puedes identificar posibles fallas en el servicio, medir el desempeño de tu equipo y 
            asegurarte de que los estándares establecidos se cumplen en cada interacción.
          </p>
          {/* <div className="mt-6">
            <a
              href="/es/research-suite/?sourceref=homeLatam"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 oswald-font"
              data-aos="fade-up"
            >
              CONOCE RESEARCH SUITE
            </a>
          </div> */}
        </div>

        {/* Imagen */}
        <div className="text-center" data-aos="fade-right">
          <img
            className="rounded-lg mx-auto w-full md:w-auto"
            src="https://as2.ftcdn.net/v2/jpg/04/94/83/39/1000_F_494833928_wrpm8iGRPdmOnvDEfeFRpYC4E46Ghc5e.jpg"
            alt="Herramienta de investigación de mercados online"
            width="555"
            height="352"
          />
        </div>
      </div>
    </section>
  );
}
