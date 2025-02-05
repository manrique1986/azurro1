"use client"; // Esto indica que este archivo debe ejecutarse en el lado del cliente

import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ThirdBlock = () => {

  // Función que realiza el scroll al componente SeptimoBloque
  const handleScroll = () => {
    const element = document.getElementById("septimo-bloque"); // Buscar el componente por ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Desplazar la vista hacia el componente
    }
  };

  return (
    <div className="w-full py-12">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Video a la izquierda */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src='https://www.youtube.com/embed/YUplHTnZFJc'
              alt="victoria"
              frameBorder="0"
              allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3A4B]">@VICTORIA ROSA</h2>
          <p className="text-lg sm:text-xl text-[#1B3A4B] max-w-[360px] sm:max-w-[390px] leading-relaxed">
            Optimizamos procesos y diseñamos estrategias para fortalecer su conexión con los clientes.
          </p>

          {/* Botón debajo del texto que hace scroll */}
          <button
            onClick={handleScroll} // Llamada a handleScroll al hacer clic
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Conoce cómo optimizamos su conexión
          </button>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4" >
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3A4B]">@AFVIBESS</h2>
          <p className="text-lg sm:text-xl text-[#1B3A4B] max-w-[380px] sm:max-w-[450px] leading-relaxed">
            Definimos su nicho, creamos una oferta potente e implementamos sistemas de ventas automáticos con GPT personalizado.
          </p>

          {/* Botón debajo del texto que hace scroll */}
          <button
            onClick={handleScroll} // Llamada a handleScroll al hacer clic
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubre qué hicimos en su estrategia
          </button>
        </div>

        {/* Video a la derecha */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div  className="relative w-full h-full">
            {/* Imagen que cubre todo el contenedor */}
            <img
            
              className="w-full h-full  rounded-lg"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1738586574/WhatsApp_Image_2025-02-02_at_20.18.44_fwnk3l.jpg"
              alt="Imagen personalizada"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
