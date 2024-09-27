import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserSecret  ,FaGlasses,FaScaleBalanced, FaTv,FaChartLine,FaPeopleCarryBox   } from 'react-icons/fa6';

export default function Servicios() {

  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-in-out' });
  }, []);

  const Card = ({ title, description, Icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      <Icon className="text-blue-800 text-5xl mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-800 text-xl text-center ">{description}</p>
    </div>
  );

  const cards = [
    { title: 'Evaluaciones encubiertas', description: 'Visitas de Mystery Shoppers para evaluar el servicio al cliente, la calidad de los productos y el ambiente en diferentes puntos de venta o sucursales.', icon: FaUserSecret    },
    { title: 'Análisis de cumplimiento de estándares', description: 'Verificación de si los empleados siguen los protocolos y procedimientos de la empresa en atención, ventas y otros procesos clave.', icon: FaGlasses  },
    { title: 'Estudios comparativos (benchmarking)', description: 'Comparación del servicio al cliente de la empresa frente a sus competidores directos en el mismo sector.', icon: FaScaleBalanced  },
    { title: 'Informes personalizados', description: 'Entrega de informes detallados con análisis cuantitativo y cualitativo sobre la experiencia del cliente y el desempeño del personal.', icon: FaChartLine  },
    { title: 'Monitoreo continuo del servicio', description: 'Implementación de evaluaciones periódicas para hacer un seguimiento del progreso y asegurarse de que los cambios se mantengan a largo plazo.', icon: FaTv  },
    { title: 'Capacitación para empleados', description: 'Programas de formación basados en los resultados de las evaluaciones de Mystery Shoppers para mejorar las habilidades de atención al cliente y ventas.', icon: FaPeopleCarryBox   },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 pt-24">
      <h2 className="text-5xl font-bold text-blue-800 mb-4 text-center oswald-font"  data-aos="zoom-out">
            Nuestros Servicios
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10"  data-aos="zoom-out">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} Icon={card.icon} />
        ))}
      </div>
    </div>
  );
}
