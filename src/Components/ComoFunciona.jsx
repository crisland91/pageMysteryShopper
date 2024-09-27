import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ComoFunciona() {

    useEffect(() => {
        AOS.init({ duration: 700, easing: 'ease-in-out' });
      }, []);

    const steps = [
        {
            title: "1.- Definición de objetivos",
            text: "En primer lugar, trabajamos contigo para entender qué aspectos de tu negocio deseas evaluar.Puede ser la calidad del servicio al cliente, la limpieza del local, el cumplimiento de protocolos o cualquier otro elemento importante para tu operación.",
            img: "/images/funciona1.jpg",
            alt: "Objetivos de negocio"
        },
        {
            title: "2.- Selección del evaluador",
            text: "Asignamos un Mystery Shopper que coincida con el perfil típico de tus clientes. Este evaluador visita tu establecimiento o interactúa con tu servicio sin que el personal lo sepa.",
            img:  "/images/funciona2.jpg",
            alt: "Selección del evaluador"
        },
        {
            title: "3.- Visita encubierta",
            text: "El Mystery Shopper realiza una visita o compra simulada, siguiendo un guion previamente establecido. Durante la experiencia, observa y toma nota de todos los detalles relevantes, desde la atención y el tiempo de espera hasta la presentación de los productos o servicios.",
            img:  "/images/funciona3.png",
            alt: "Visita encubierta"
        },
        {
            title: "4.- Informe detallado",
            text: "Una vez completada la evaluación, el Mystery Shopper redacta un informe exhaustivo que incluye observaciones y puntuaciones sobre diferentes aspectos del servicio.",
            img:  "/images/funciona4.jpeg",
            alt: "Informe detallado"
        },
        {
            title: "5.- Análisis y recomendaciones",
            text: "Finalmente, te entregamos un análisis profundo basado en los datos recopilados en un dashboard o reportes en PDF.",
            img:  "/images/funciona5.jpg",
            alt: "Análisis y recomendaciones"
        }
    ];

    return ( 
        <section className="py-10 bg-white px-6 lg:px-16" >
            <div>
                <h2 className="text-4xl text-center md:text-5xl font-bold text-blue-900 mb-6 oswald-font" data-aos="fade-up">
                    ¿Como funciona?
                </h2>
            </div>
    
            {steps.map((step, index) => (
                <div key={index}>
                    <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} mb-10 items-center`} data-aos="fade-right">
                        {/* Imagen */}
                        <div className="w-full lg:w-1/3 p-4">
                            <img src={step.img} alt={step.alt} className="sm:w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                        {/* Texto */}
                        <div className="w-full lg:w-2/3 p-4 text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4 oswald-font">{step.title}</h2>
                            {/* <h2 className="text-gray-800 font-semibold mb-4">{step.title}</h2> */}
                            <p className="text-gray-800 text-lg sm:text-justify oswald-font">{step.text}</p>
                            
                        </div>
                    </div>
    
                    {/* Línea divisoria */}
                    {index < steps.length - 1 && (
                        <div className="w-full h-px bg-gray-300 my-8"></div>
                    )}
                </div>
            ))}
        </section>
    );
    
}
