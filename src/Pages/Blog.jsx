import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dataBlog from '../Services/dataBlog2.json'

export default function Blog() {

  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-in-out' });
  }, []);

  const blog = dataBlog;


  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  const Card = ({ titulo, fecha, Text_1, main_img, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center text-left transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Imagen del lado izquierdo - 70% */}
      <a href={link} className="w-full lg:w-1/6">
        <img src={main_img} className="rounded-lg w-full object-cover h-48 lg:h-auto oswald-font" alt={titulo} />
      </a>

      {/* Contenido del lado derecho - 30% */}
      <div className="w-full lg:w-5/6 p-4 pl-10">
        <a href={link}>
          <h2 className="text-2xl font-bold mb-2 oswald-font  ">{titulo}</h2>
        </a>
        <p className="text-gray-500 text-base mb-2 oswald-font">{fecha}</p>
        <p className="text-gray-900 mb-4 oswald-font">{truncateText(Text_1, 25)}</p>
        <a href={link} className="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-700 font-bold oswald-font">
          Leer artículo
        </a>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-100 py-16 pt-28">
      {/* <h2 className=" gradient-title w-full text-4xl font-bold text-white mb-4 text-left oswald-font p-16" data-aos="zoom-out">
        Nuestro blog
      </h2> */}
      <h2 className="w-full text-4xl font-bold text-blue-800 mb-4 text-left oswald-font sm:pl-10  lg:pl-10 xl:pl-20 " data-aos="zoom-out">
        Nuestro blog
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-1 sm:px-8 lg:grid-cols-1 gap-8 max-w-7xl mx-auto mt-10" data-aos="zoom-out">
        {blog.map((blog, index) => (
          <Card key={index} titulo={blog.titulo} fecha={blog.fecha} Text_1={blog.Text_1} main_img={blog.main_img} link={blog.redirect} />
        ))}
      </div>
    </div>
  );
}



// "url_img_1":"../../public/images/MysteryShopperImg1.jpg",