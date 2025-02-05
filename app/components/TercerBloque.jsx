"use client"; // Aseguramos que esto se ejecute en el cliente

import { useEffect } from 'react';

const FourthBlock = () => {

  // Función que maneja el scroll hasta el SeptimoBloque
  const handleScroll = () => {
    const element = document.getElementById("septimo-bloque"); // Busca el componente con id 'septimo-bloque'
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Realiza el scroll hasta el componente
    }
  };

  return (
    <div className="w-full py-12">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Video a la izquierda */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/95AGfZdTzYM"
              title="YouTube video player"
              frameBorder="0"
              allow="encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3A4B]">@RODRI MARQUEZ</h2>
          <p className="text-lg sm:text-xl text-[#1B3A4B] max-w-[360px] sm:max-w-[390px] leading-relaxed">
            Diseñamos su estrategia completa y con el primer video atrajo dos clientes nuevos.
          </p>

          {/* Botón que hace scroll */}
          <button
            onClick={handleScroll} // Aquí estamos llamando a la función handleScroll
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Cómo logramos resultados inmediatos
          </button>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3A4B]">@SANSUCESS</h2>
          <p className="text-lg sm:text-xl text-[#1B3A4B] max-w-[380px] sm:max-w-[450px] leading-relaxed">
            Optimizamos su oferta y automatizamos su proceso de ventas con IA.
          </p>

          {/* Botón que hace scroll */}
          <button
            onClick={handleScroll} // Llamada a handleScroll para realizar el desplazamiento
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Cómo simplificamos su éxito con IA
          </button>
        </div>

        {/* Video a la derecha */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            {/* Imagen en lugar de iframe */}
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1738463604/Sansucces_eiipvh.jpg"
              alt="Imagen personalizada"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthBlock;