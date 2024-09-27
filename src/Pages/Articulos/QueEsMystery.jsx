import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

export default function QueEsMystery() {

    useEffect(() => {

        AOS.init({ duration: 500, easing: 'ease-in-out' });
    }, []);


    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-5xl mx-auto pt-24 " data-aos="zoom-out" >

            <Link to="/Blog" className=' underline text-orange-600' >Regresar</Link>
            <h2 className="text-4xl font-bold mb-2 text-blue-800 text-left oswald-font">¿Que es un Mystery Shopper?</h2>
            <p className="text-sm text-gray-700 font-semibold italic mb-4 mt-5 oswald-font">{`Publicado el: 16 de septiembre 2024`}</p>


            <img src="/images/MysteryShopperImg1.jpg" alt="¿Que es un Mystery?" className="rounded-lg mb-4 w-[1000px] h-[300px] object-cover oswald-font" />

            <div className='mt-1'>
                <p className="text-black mb-4 text-xl text-left oswald-font">
                    El Mystery Shopper es un evaluador anónimo contratado para hacerse pasar por un cliente común y evaluar de manera
                    objetiva la experiencia de compra en un establecimiento. Su tarea principal es observar y registrar detalles clave,
                    como la atención al cliente, la calidad de los productos, el ambiente y el cumplimiento de los estándares de la empresa.
                    Los Mystery Shoppers siguen un guion o lista de verificación que les ayuda a evaluar aspectos específicos del
                    servicio, como la rapidez, cortesía y profesionalismo del personal."
                </p>
            </div>

            <div className='mt-1'>
                <p className="text-black mb-4 text-xl text-left oswald-font">Una vez completada la visita, el Mystery Shopper entrega un informe detallado con sus observaciones, el cual es utilizado por la empresa para identificar oportunidades de mejora y optimizar la experiencia del cliente. Esta labor es fundamental para obtener una perspectiva realista y honesta sobre el desempeño de un negocio."</p>
            </div>


        </div>

    )
}
