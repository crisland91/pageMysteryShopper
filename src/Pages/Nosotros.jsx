import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Nosotros() {
  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center" data-aos="zoom-out">
        {/* Texto (lado izquierdo) */}
        <div className="lg:w-4/6 mb-8 lg:mb-0 lg:pr-10">
          <h2 className="text-5xl font-bold text-blue-800 mb-4 oswald-font">
            Acerca de nosotros
          </h2>
          <p className="text-gray-900 text-xl font-semibold leading-relaxed">
            En [Nombre de tu empresa], somos una consultoría especializada en Mystery Shopper dedicada a ayudar a las empresas
            a mejorar la experiencia de sus clientes y optimizar su desempeño operativo. Nuestro equipo está formado
            por expertos en análisis del comportamiento del consumidor, con años de experiencia en diversos sectores,
            lo que nos permite ofrecer soluciones personalizadas y efectivas.<br /><br />

            Nuestro enfoque se basa en la evaluación anónima y objetiva de la atención al cliente, permitiendo a las
            empresas identificar áreas de mejora y tomar decisiones estratégicas basadas en datos reales. Nos apasiona
            impulsar la excelencia en el servicio y ayudar a nuestros clientes a destacar en su industria, brindándoles
            herramientas para mejorar la satisfacción del cliente y aumentar su éxito comercial.
          </p>
        </div>

        {/* Imagen (lado derecho) */}
        <div className="lg:w-2/6">
          <img
            // src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png"
            src='/images/aboutUs.jpg'
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
