import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Cuestionarios() {

    useEffect(() => {

        AOS.init({ duration: 500, easing: 'ease-in-out' });
    }, []);

    return (
        <div className="bg-white p-6  rounded-lg shadow-lg mb-8 max-w-5xl mx-auto pt-24 " data-aos="zoom-out" >

            <Link to="/Blog" className=' underline text-orange-600' >Regresar</Link>
            <h2 className="text-4xl font-bold mb-2 text-blue-800 text-left oswald-font">Cuestionarios en un Estudio de Mystery Shopper</h2>
            <p className="text-sm text-gray-700 font-semibold italic mb-4 mt-5 oswald-font">{`Publicado el: 25 de septiembre 2024`}</p>


            <img
                src="/images/Blog/CuestionarioEnMystery/BlogCuestionario.png"
                alt="Cuestionarios"
                className="rounded-lg mb-4 w-[1000px] h-[300px] object-cover oswald-font"
            />

            <div className='mt-1'>
                <p className="text-black mb-4 text-xl text-left oswald-font">
                    Los cuestionarios son una herramienta clave en la recolección de datos, estos están diseñados para
                    recopilar información detallada y estructurada sobre la experiencia del cliente y el rendimiento del negocio.
                    A continuación te detallo varios aspectos de los cuestionarios
                </p>
            </div>

            <div className='mt-1'>
                <p className="text-black mb-4 text-xl text-left oswald-font">
                    Una vez completada la visita, el Mystery Shopper entrega un informe detallado con sus observaciones,
                    el cual es utilizado por la empresa para identificar oportunidades de mejora y optimizar la experiencia del cliente.
                    Esta labor es fundamental para obtener una perspectiva realista y honesta sobre el desempeño de un negocio.
                </p>
            </div>

            <div className='mt-20'>
                <h3 className="text-2xl font-semibold mb-2 oswald-font">1. Diseño del cuestionario</h3>
                <p className="text-black mb-4 text-xl text-left oswald-font">
                    <span className="font-semibold text-blue-500">Preguntas cerradas:</span>  La mayoría de los cuestionarios contienen preguntas cerradas (sí/no o selección múltiple) para
                    obtener respuestas directas sobre aspectos específicos del servicio, como:
                </p>

                <ul className='px-5' >
                    <li className="list-disc text-black mb-4 text-xl text-left oswald-font">¿El personal fue amable y atento?</li>
                    <li className="list-disc text-black mb-4 text-xl text-left oswald-font">¿Se respetó el tiempo estimado de espera?</li>
                    <li className="list-disc text-black mb-4 text-xl text-left oswald-font">¿El local estaba limpio y ordenado?</li>
                </ul>

                <p className="text-black mb-4 text-xl text-left oswald-font">
                    <span className="font-semibold text-blue-500">Preguntas con escala de valoración:</span> Estas preguntas permiten al Mystery Shopper
                    calificar diferentes aspectos en una escala (por ejemplo, del 1 al 5 o del 1 al 10). Ayudan a evaluar factores subjetivos como
                    la calidad del servicio, la actitud del personal o la satisfacción general.
                </p>

                <ul className='px-5' >
                    <li className=" list-disc text-black mb-4 text-xl text-left oswald-font">Ejemplo: ¿Cómo calificarías la amabilidad del personal? (1: Muy mala – 10: Excelente)</li>
                </ul>

                <p className="text-black mb-4 text-xl text-left oswald-font">
                    <span className="font-semibold text-blue-500">Preguntas abiertas:</span> Algunas preguntas invitan al evaluador a describir
                    detalles con sus propias palabras. Esto permite una evaluación más cualitativa y detallada.
                </p>

                <ul className='px-5' >
                    <li className=" list-disc text-black mb-4 text-xl text-left oswald-font">Ejemplo: Describe cómo te atendió el personal en el mostrador.</li>
                </ul>

                <div className='mt-20'>
                    <h3 className="text-2xl font-semibold mb-2 oswald-font">2. Nivel de detalle</h3>
                    <p className="text-black mb-4 text-xl text-left oswald-font">
                        Los cuestionarios deben ser lo suficientemente detallados como para cubrir
                        todos los aspectos relevantes, pero también concisos para evitar fatigar al evaluador. Un buen cuestionario equilibra la
                        profundidad de la información sin ser excesivamente largo.
                    </p>
                </div>

                <img
                    src="/images/Blog/CuestionarioEnMystery/BlogCuestionarioDet.jpg"
                    alt="Cuestionarios"
                    className="rounded-lg mb-4 w-[1000px] h-[300px] object-cover oswald-font"
                />

                <div className='mt-20'>
                    <h3 className="text-2xl font-semibold mb-2 oswald-font">3. Respuestas cuantitativas y cualitativas</h3>
                    <p className="text-black mb-4 text-xl text-left oswald-font">
                        <span className="font-semibold text-blue-500">Cuantitativas:</span> Las preguntas cerradas y las escalas de
                        valoración permiten que las respuestas se conviertan en datos cuantitativos. Esto facilita un análisis
                        comparativo y gráfico.
                    </p>

                    <p className="text-black mb-4 text-xl text-left oswald-font">
                        <span className="font-semibold text-blue-500">Cualitativas:</span> Las preguntas abiertas permiten que el Mystery
                        Shopper dé su percepción general, aportando matices importantes que los números por sí solos no podrían ofrecer.
                    </p>
                </div>

                <div className='mt-20'>
                    <h3 className="text-2xl font-semibold mb-2 oswald-font">5. Objetividad y precisión</h3>
                    <p className="text-black mb-4 text-xl text-left oswald-font">
                        Aunque el Mystery Shopper puede incluir impresiones subjetivas, el cuestionario está diseñado para mantener la objetividad.
                        Las preguntas se enfocan en comportamientos observables y hechos verificables, para que las respuestas sean lo más
                        precisas y justas posible.
                    </p>
                </div>

                <div className='mt-20'>
                    <h3 className="text-2xl font-semibold mb-2 oswald-font">6. Retroalimentación final</h3>
                    <p className="text-black mb-4 text-xl text-left oswald-font">
                    La mayoría de los cuestionarios incluyen una sección final de retroalimentación global. Aquí, el Mystery Shopper puede 
                    proporcionar un resumen de su experiencia y ofrecer sugerencias generales para la mejora del servicio.
                    </p>

                    <ul className='px-5' >
                    <li className=" list-disc text-black mb-4 text-xl text-left oswald-font">Ejemplo: ¿Qué recomendaciones darías para mejorar el servicio en este establecimiento?</li>
                </ul>

                <img
                    src="/images/Blog/CuestionarioEnMystery/BlogRetro.jpg"
                    alt="Cuestionarios"
                    className="rounded-lg mb-4 w-[1000px] h-[400px] object-cover oswald-font"
                />

                </div>

                



            </div>




        </div>
    )
}
