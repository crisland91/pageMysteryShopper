import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Privacidad() {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out' });
    }, []);

    return (
        <section className="bg-white py-16 px-4 md:px-16 lg:px-32" >
            <div className="max-w-7xl mx-auto" data-aos="zoom-out">
                {/* Título del aviso */}
                <h2 className="text-3xl font-bold text-blue-800 md:text-5xl mb-8">
                    Aviso de Privacidad
                </h2>

                {/* Contenido del aviso */}
                <div className="space-y-6 text-gray-900 font-semibold">
                    <p>
                        En <b>[Nombre de tu empresa]</b>, nos comprometemos a proteger la privacidad y la seguridad de la información personal de 
                        nuestros usuarios, clientes y evaluadores. Este aviso de privacidad describe cómo recopilamos, utilizamos, almacenamos y 
                        protegemos sus datos personales, en cumplimiento con las normativas de protección de datos aplicables, como el Reglamento 
                        General de Protección de Datos (GDPR) y la Ley Federal de Protección de Datos Personales.
                    </p>

                    <h3 className="text-2xl font-semibold">1. Información que recopilamos</h3>
                    <ul className="list-disc list-inside text-gray-900 font-semibold">
                        <li>Datos de contacto: Nombre, correo electrónico, número de teléfono, dirección.</li>
                        {/* <li>Datos de navegación: Información sobre cómo utiliza nuestro sitio web, como la dirección IP, tipo de navegador, tiempo de visita y páginas consultadas.</li> */}
                        <li>Información de evaluadores: Datos proporcionados por los Mystery Shoppers, como informes de evaluación y detalles de visitas.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">2. Uso de la información</h3>
                    <p>Utilizamos la información personal para los siguientes fines:</p>
                    <ul className="list-disc list-inside text-gray-900 font-semibold">
                        <li>Proveer y mejorar nuestros servicios de Mystery Shopper.</li>
                        {/* <li>Contactar a los usuarios para proporcionar actualizaciones, ofertas, o información sobre nuestros servicios.</li> */}
                        <li>Cumplir con nuestras obligaciones legales y contractuales.</li>
                        {/* <li>Analizar el comportamiento en el sitio web para mejorar la experiencia del usuario.</li> */}
                        <li>Gestionar el proceso de evaluaciones y generar informes para nuestros clientes (en el caso de evaluadores).</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">3. Compartición de la información</h3>
                    <p>No compartimos, vendemos ni alquilamos su información personal a terceros, excepto en los siguientes casos:</p>
                    <ul className="list-disc list-inside text-gray-900 font-semibold">
                        <li>Con su consentimiento explícito.</li>
                        <li>Para cumplir con obligaciones legales o regulaciones.</li>
                        <li>Para proteger nuestros derechos o la seguridad de nuestros usuarios y servicios.</li>
                        <li>Con proveedores de servicios que actúan en nuestro nombre.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">4. Protección de la información</h3>
                    <p className='text-gray-900 font-semibold'>
                        Utilizamos medidas de seguridad adecuadas, como cifrado y sistemas de almacenamiento seguros junto con nuestros 
                        proveedores en la nube.
                    </p>

                    <h3 className="text-2xl font-semibold">5. Derechos de los usuarios</h3>
                    <p className='text-gray-900 font-semibold'>
                        Usted tiene el derecho de acceder, corregir o eliminar su información personal en cualquier momento.
                        Para ejercer estos derechos, puede contactarnos a través de <span className='text-blue-500 font-bold'>soporte@company.com.mx</span></p>

                    <h3 className="text-2xl font-semibold">6. Uso de cookies</h3>
                    <p className='text-gray-900 font-semibold'>
                        Utilizamos cookies para mejorar la experiencia del usuario y recopilar datos sobre cómo se utiliza nuestro sitio web.
                    </p>

                    <h3 className="text-2xl font-semibold">7. Cambios en el aviso de privacidad</h3>
                    <p className='text-gray-900 font-semibold'>Cualquier cambio será comunicado a través de este sitio web y entrará en
                        vigor en el momento de su publicación.
                    </p>

                    <h3 className="text-2xl font-semibold">8. Contacto</h3>
                    <p className='text-gray-900 font-semibold'>Si tiene alguna pregunta, puede contactarnos a través de
                         <span className='text-blue-500 font-bold'>soporte@company.com.mx</span> </p>
                </div>
            </div>
        </section>
    );
}
