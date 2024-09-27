import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok, FaUserLock } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black text-white  lg:py-10 lg:pt-10 sm:py-20  ">
            <div className="flex flex-col lg:flex-row lg:px-14">
                {/* Div Izquierdo (alineado a la izquierda) */}
                <div className="sm:flex sm:flex-col sm:justify-center sm:items-center space-y-2 lg:w-1/3 lg:items-start ">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <FaMapMarkerAlt />
                        <span className='oswald-font'>Mérida, Yucatán, México</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <FaEnvelope />
                        <span className='oswald-font'>soporte@company.com.mx</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start space-x-2 ">
                        <FaUserLock />
                        <Link to="Privacidad" className="text-white hover:text-blue-500 underline oswald-font">
                            Aviso de privacidad
                        </Link>
                    </div>
                </div>


                {/* Div Central (centrado) */}
                <div className="flex sm:flex-row sm:justify-center sm:mt-10 sm:space-x-6 lg:flex-row lg:items-center lg:justify-center lg:space-x-6 lg:w-1/3 lg:mt-0 ">
                    <a href="#" className="text-white hover:text-blue-500 text-3xl">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-white hover:text-blue-500 text-3xl">
                        <FaXTwitter />
                    </a>
                    <a href="#" className="text-white hover:text-blue-500 text-3xl">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="text-white hover:text-blue-500 text-3xl">
                        <FaTiktok />
                    </a>
                </div>

                {/* Div Derecho (alineado al centro) */}
                <div className="flex sm:flex-row sm:justify-center sm:mt-10 sm:space-x-6 sm:px-36 lg:flex-row lg:items-center lg:justify-center lg:space-x-6 lg:w-1/3 lg:mt-0 lg:px-0  ">
                    <p className=" md:text-center lg:text-right  ml-auto sm:text-center text-center oswald-font">
                        {/* Somos una compañía líder en análisis de datos, dedicada a brindar soluciones inteligentes para impulsar tus decisiones empresariales. */}
                        Proporcionamos consultoría en Mystery Shopper, enfocándonos en brindar a las empresas datos clave para mejorar su servicio y garantizar una experiencia excepcional para sus clientes.
                    </p>
                </div>
            </div>
        </footer>
    );
}

// sm:bg-blue-300 md:bg-red-300 lg:bg-green-300"