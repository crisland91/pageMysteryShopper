import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import dataBlog from '../Services/dataBlog.json'
import { Link } from 'react-router-dom';


export default function UnArticulo() {
  const { id } = useParams(); // Accede al parámetro 'id' de la URL.

  const newData = dataBlog.filter(data => data.id == id);

  useEffect(() => {

    AOS.init({ duration: 500, easing: 'ease-in-out' });
  }, []);


  const {
    fecha, Titulo, Subtitulo_1, Text_1, url_img_1
    , Subtitulo_2, Text_2, url_img_2
    , Subtitulo_3, Text_3, url_img_3
    , Subtitulo_4, Text_4, url_img_4
    , Subtitulo_5, Text_5, url_img_5
    , Subtitulo_6, Text_6, url_img_6
    , Subtitulo_7, Text_7, url_img_7
    , Subtitulo_8, Text_8, url_img_8
    , Subtitulo_9, Text_9, url_img_9
  } = newData[0];

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-lg mb-8 max-w-5xl mx-auto " data-aos="zoom-out" >
      {/* Título */}
      <Link to="/Blog" className=' underline text-orange-600' >Regresar</Link>
      <h2 className="text-4xl font-bold mb-2 text-blue-800 text-left oswald-font">{Titulo}</h2>
      <p className="text-sm text-gray-700 font-semibold italic mb-4 mt-5 oswald-font">{` Publicado el: ${fecha}`}</p>




      {/* Imagen 1 */}
      {url_img_1 && <img src={url_img_1} alt={Titulo} className="rounded-lg mb-4 w-[1000px] h-[300px] object-cover oswald-font" />}
      {/* Texto 1 */}
      <div className='mt-1'>
        {Subtitulo_1 && <h3 className="text-2xl font-semibold mb-2  oswald-font">{Subtitulo_1}</h3>}
        {Text_1 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_1}</p>}
      </div>




      {/* Texto 2 */}
      <div className='mt-1'>
        {Subtitulo_2 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_2}</h3>}
        {Text_2 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_2}</p>}
      </div>
      {/* Imagen 2 */}
      {url_img_2 && <img src={url_img_2} alt={Subtitulo_2} className="rounded-lg mb-4 w-[1000px] h-[300px] object-cover mt-16" />} 




      {/* Texto 3 */}
      <div className='mt-1'>
        {Subtitulo_3 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_3}</h3>}
        {Text_3 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_3}</p>}
      </div>
      {/* Imagen 3 */}
      {url_img_3 && <img src={url_img_3} alt={Subtitulo_3} className="rounded-lg mb-4 w-full object-cover" />}




      {/* Texto 4 */}
      {Subtitulo_4 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_4}</h3>}
      {Text_4 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_4}</p>}
      {/* Imagen 4 */}
      {url_img_4 && <img src={url_img_4} alt={Subtitulo_4} className="rounded-lg mb-4 w-full object-cover" />}





      {/* Texto 5 */}
      {Subtitulo_5 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_5}</h3>}
      {Text_5 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_5}</p>}
      {/* Imagen 5 */}
      {url_img_5 && <img src={url_img_5} alt={Subtitulo_5} className="rounded-lg mb-4 w-[1000px] h-[300px]  object-cover" />}




      {/* Imagen 6 */}
      {url_img_6 && <img src={url_img_6} alt={Subtitulo_6} className="rounded-lg mb-4 w-full object-cover" />}
      {/* Texto 6 */}
      {Subtitulo_6 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_6}</h3>}
      {Text_6 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_6}</p>}


      {/* Imagen 7 */}
      {url_img_7 && <img src={url_img_7} alt={Subtitulo_7} className="rounded-lg mb-4 w-full object-cover" />}
      {/* Texto 7 */}
      {Subtitulo_7 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_7}</h3>}
      {Text_7 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_7}</p>}


      {/* Imagen 6 */}
      {url_img_8 && <img src={url_img_8} alt={Subtitulo_8} className="rounded-lg mb-4 w-full object-cover" />}
      {/* Texto 8 */}
      {Subtitulo_8 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_8}</h3>}
      {Text_8 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_8}</p>}


      {/* Imagen 7 */}
      {url_img_9 && <img src={url_img_9} alt={Subtitulo_9} className="rounded-lg mb-4 w-[1000px] h-[400px] object-cover" />}
      {/* Texto 9 */}
      {Subtitulo_9 && <h3 className="text-2xl font-semibold mb-2 oswald-font">{Subtitulo_9}</h3>}
      {Text_9 && <p className="text-black mb-4 text-xl text-left oswald-font">{Text_9}</p>}

    </div>
  );
}
