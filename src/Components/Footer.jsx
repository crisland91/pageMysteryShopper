import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok, FaUserLock } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black  text-white py-10">
            <div className="flex flex-col sm:flex-row justify-between w-10/12 mx-auto space-y-14 sm:space-y-0">
                {/* Div Izquierdo (alineado a la izquierda) */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <FaMapMarkerAlt />
                        <span>Mérida, Yucatán, México</span>
                    </div>
                    {/* <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <FaPhoneAlt />
                        <span>+52 9991 65 54 41</span>
                    </div> */}
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <FaEnvelope />
                        <span>soporte@company.com.mx</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                        <FaUserLock />
                        <Link to="Privacidad" className="text-white hover:text-blue-500 underline">
                            Aviso de privacidad
                        </Link>
                    </div>
                </div>


                {/* Div Central (centrado) */}
                <div className="flex justify-center space-x-6  ">
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
                <div className="flex-1 text-center sm:text-right">
                    <p className="w-full sm:w-96 ml-auto">
                        {/* Somos una compañía líder en análisis de datos, dedicada a brindar soluciones inteligentes para impulsar tus decisiones empresariales. */}
                        Proporcionamos consultoría en Mystery Shopper, enfocándonos en brindar a las empresas datos clave para mejorar su servicio y garantizar una experiencia excepcional para sus clientes.
                    </p>
                </div>
            </div>
        </footer>
    );
}
