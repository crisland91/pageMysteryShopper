
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contacto({ backgrodColor, coloTitle, bgInput, colorLabel, padTop }) {

    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out' });
      }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [errorModal, setErrorModal] = useState(false);
    const [urlImgModal, setUrlImgModal] = useState('');


    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        // country: '',
        phoneNumber: '',
        depto: '',
        message: '',
        status: 'ON'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "El campo nombre es obligatorio.";
        }

        if (!formData.company.trim()) {
            errors.company = "EL campo empresa es obligatorio.";
        }

        if (!formData.email.trim()) {
            errors.email = "EL campo email es obligatorio.";
        }

        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = "El campo Número télefonico es obligatorio.";
        }
        if (!formData.depto.trim()) {
            errors.depto = "EL campo Departamento o area es obligatorio.";
        }

        // Si hay errores, los mostramos y no enviamos el formulario
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // Iniciar carga
        setLoading(true);

        const formattedData = {
            ...formData,
            phoneNumber: parseInt(formData.phoneNumber, 10) || 0  // Convertir, y si es NaN, lo vuelve 0
        };
        const urlPost = "http://localhost:7110/api/addContact"

        try {
            const resp = await axios.post(urlPost, formattedData)
            console.log(resp.data)

            if (resp.data === "ok") {
                setUrlImgModal('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png');
                setModalMessage("Muchas gracias por contactarnos, pronto nos comunicaremos contigo.");
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    // country: '',
                    phoneNumber: '',
                    depto: '',
                    message: '',
                    status: 'ON'
                })
            } else {
                setModalMessage("Error al enviar tus datos, intenta nuevamente.");
                setUrlImgModal('https://st4.depositphotos.com/1003549/24662/v/450/depositphotos_246629374-stock-illustration-check-marks-red-cross-icon.jpg');
                setErrorModal(true);
            }
        } catch (error) {
            setModalMessage("Error al enviar tus datos, intenta nuevamente.");
            
            setUrlImgModal('https://st4.depositphotos.com/1003549/24662/v/450/depositphotos_246629374-stock-illustration-check-marks-red-cross-icon.jpg');
            setErrorModal(true);
        } finally {
            setLoading(false);
        }
        setIsModalOpen(true);


    };

    return (
        <div className={`${backgrodColor}  py-10 w-max-lg ${padTop} `} >
            <h2 className={` text-center text-4xl md:text-5xl font-bold ${coloTitle} mb-6 oswald-font`} data-aos="zoom-out" >
                Contactanos
            </h2>

            <form onSubmit={handleSubmit} className={`max-w-lg mx-auto p-8 ${backgrodColor} rounded-lg shadow-2xl shadow-gray-500 space-y-6`} data-aos="zoom-out" >
                <div className="flex flex-col">
                    <label className={`${colorLabel} text-lg font-bold oswald-font`} >Nombre y Apellido<span className='text-red-500 font-thin'>*</span>:</label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 border ${bgInput} rounded-md  focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Ingresa tu nombre completo"

                    />
                    {errors.name && <p className="text-red-500 text-sm oswald-font tracking-wider ">{errors.name}</p>}
                </div>

                <div className="flex flex-col">
                    <label className={`${colorLabel} text-lg font-bold oswald-font`}>Empresa<span className='text-red-500 font-thin'>*</span>:</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 border ${bgInput} rounded-md  focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Ingresa el nombre de tu empresa"
                    />
                    {errors.company && <p className="text-red-500 text-sm oswald-font tracking-wider">{errors.company}</p>}
                </div>

                <div className="flex flex-col">
                    <label className={`${colorLabel} text-lg font-bold oswald-font`}>Correo<span className='text-red-500 font-thin'>*</span>:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 border ${bgInput} rounded-md  focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="correo@ejemplo.com"

                    />
                    {errors.email && <p className="text-red-500 text-sm oswald-font tracking-wider">{errors.email}</p>}
                </div>

                {/* Teléfono con selección de país */}
                <div className="flex flex-col">
                    <label className={`${colorLabel} text-lg font-bold oswald-font`}>Número de Teléfonico<span className='text-red-500 font-thin'>*</span>:</label>

                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        // className="p-2 border ${bgInput} rounded-md flex-grow focus:ring-blue-500 focus:border-blue-500"
                        className={`mt-1 p-2 border ${bgInput} rounded-md flex-grow focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Número de teléfono"

                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm oswald-font tracking-wider">{errors.phoneNumber}</p>}
                    {/* <div className="flex space-x-2"></div> */}
                </div>

                <div className="flex flex-col">
                    <label className={`${colorLabel} text-lg font-bold oswald-font `}>Departamento o Área<span className='text-red-500 font-thin'>*</span>:</label>
                    <input
                        type="text"
                        name="depto"
                        value={formData.depto}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 border ${bgInput} rounded-md  focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Ej. Ventas, Marketing"

                    />
                    {errors.depto && <p className="text-red-500 text-sm oswald-font tracking-wider">{errors.depto}</p>}
                </div>

                <div className="flex flex-col">
                    <label className={`${colorLabel} text-lg font-bold oswald-font`}>Mensaje:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`mt-1 p-2 border ${bgInput} rounded-md  focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Ej. Mensaje"
                        cols="40" rows="4"

                    >

                    </textarea>
                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-green-800 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                >

                    <p className='font-bold oswald-font tracking-widest'>{loading ? "Enviando..." : "Enviar"}</p>
                </button>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                            <img 
                                src={urlImgModal} 
                                className='w-32 mx-auto'    
                            />
                            <p className='text-2xl'>{modalMessage}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}

            </form>

        </div>
    );
}
