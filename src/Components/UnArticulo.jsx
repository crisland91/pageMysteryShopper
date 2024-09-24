import React from 'react'
import { useParams } from 'react-router-dom';
import dataBlog from '../Services/dataBlog.json'


export default function UnArticulo() {
  const { id } = useParams(); // Accede al parámetro 'id' de la URL

  // const newData = dataBlog.filter( data => { data.id === id } );
  const newData = dataBlog.filter(data => data.id == id);


  const {
    fecha, Titulo, Subtitulo_1, Text_1, url_img_1
    , Subtitulo_2, Text_2, url_img_2
    , Subtitulo_3, Text_3, url_img_3
    , Subtitulo_4, Text_4, url_img_4
    , Subtitulo_5, Text_5, url_img_5
  } = newData[0];

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-lg mb-8 max-w-5xl mx-auto ">
      {/* Título */}
      <h2 className="text-6xl font-bold mb-2 text-blue-800 text-center">{Titulo}</h2>
      <p className="text-sm text-gray-700 font-semibold italic mb-4 mt-5">{` Publicado el : ${fecha}`}</p>

      {/* Imagen 1 */}
      {url_img_1 && <img src={url_img_1} alt={Titulo} className="rounded-lg mb-4  w-full object-cover mx-auto" />}

      {/* Texto 1 */}
      <div className='mt-16'>
        {Subtitulo_1 && <h3 className="text-2xl font-semibold mb-2 ">{Subtitulo_1}</h3>}
        {Text_1 && <p className="text-black mb-4 text-2xl">{Text_1}</p>}
      </div>

      {/* Imagen 2 */}
      {url_img_2 && <img src={url_img_2} alt={Subtitulo_2} className="rounded-lg mb-4 w-full object-cover mt-16" />}

      {/* Texto 2 */}
      <div className='mt-16'>
        {Subtitulo_2 && <h3 className="text-2xl font-semibold mb-2">{Subtitulo_2}</h3>}
        {Text_2 && <p className="text-black mb-4text-2xl">{Text_2}</p>}
      </div>

      {/* Imagen 3 */}
      {url_img_3 && <img src={url_img_3} alt={Subtitulo_3} className="rounded-lg mb-4 w-full object-cover" />}

      {/* Texto 3 */}
      {Subtitulo_3 && <h3 className="text-2xl font-semibold mb-2">{Subtitulo_3}</h3>}
      {Text_3 && <p className="text-black mb-4text-2xl">{Text_3}</p>}

      {/* Imagen 4 */}
      {url_img_4 && <img src={url_img_4} alt={Subtitulo_4} className="rounded-lg mb-4 w-full object-cover" />}

      {/* Texto 4 */}
      {Subtitulo_4 && <h3 className="text-2xl font-semibold mb-2">{Subtitulo_4}</h3>}
      {Text_4 && <p className="text-black mb-4text-2xl">{Text_4}</p>}

      {/* Imagen 5 */}
      {url_img_5 && <img src={url_img_5} alt={Subtitulo_5} className="rounded-lg mb-4 w-full object-cover" />}

      {/* Texto 5 */}
      {Subtitulo_5 && <h3 className="text-2xl font-semibold mb-2">{Subtitulo_5}</h3>}
      {Text_5 && <p className="text-black mb-4 text-2xl">{Text_5}</p>}
    </div>
  );
}
