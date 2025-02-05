"use client"; // Aseguramos que esto se ejecute en el cliente

const QuintoBloque = () => {

  // Función que maneja el scroll hacia el SeptimoBloque
  const handleScroll = () => {
    const element = document.getElementById("septimo-bloque"); // Busca el componente con id 'septimo-bloque'
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Realiza el scroll hasta el componente
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-24 mt-32">
      <div className="w-full flex justify-center items-center">
        <div className="text-center">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B3A4B] whitespace-nowrap">
            Personalizá tu GPT
          </h2>

          <h2 className="text-[#1B3A4B] text-xl sm:text-4xl md:text-5xl lg:text-3xl font-extrabold">
            Personalizá con funciones infinitas tanto para vos como para tu equipo los GPT'S
          </h2>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Primer bloque */}
          <div className="flex flex-col items-center space-y-4 bg-white p-1 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Imagen en lugar de video */}
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1738464836/asistente_grt_coy_w1zoxd.jpg"
              alt="Mejoras en la Oferta"
            />
            <h3 className="text-xl sm:text-2xl text-center lg:text-xl font-bold text-gray-800">Escritor de Copys</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center w-64">
              Crea textos que conecten y conviertan.
            </p>
            <div className="flex-grow" /> {/* Este div hace que el botón se empuje hacia abajo */}
            <div className="flex justify-center w-full">
              <button
                onClick={handleScroll} // Llamada a handleScroll para hacer el desplazamiento
                className="w-[250px] mb-5 sm:w-[280px] lg:w-[300px] h-[45px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                Explora nuestro copywriting
              </button>
            </div>
          </div>

          {/* Segundo bloque */}
          <div className="flex flex-col items-center space-y-4 bg-white p-1 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Imagen en lugar de video */}
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1738465025/vsl_gpt_b0fmxy.jpg"
              alt="Investigación de Nicho"
            />
            <h3 className="text-xl sm:text-2xl lg:text-xl text-center font-bold text-gray-800">Creador de Video Sales Letter</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center w-full">
              Transforma tus ideas en ventas.
            </p>
            <div className="flex-grow" /> {/* Este div hace que el botón se empuje hacia abajo */}
            <div className="flex justify-center w-full">
              <button
                onClick={handleScroll} // Llamada a handleScroll para hacer el desplazamiento
                className="w-[250px] mb-5 sm:w-[280px] lg:w-[300px] h-[45px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                Descubre el poder de tus videos
              </button>
            </div>
          </div>

          {/* Tercer bloque */}
          <div className="flex flex-col items-center space-y-4 bg-white p-1 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Imagen en lugar de video */}
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1738465097/estrategia_de_contenido_gpt_n7hkvr.jpg"
              alt="Diseño de Presentaciones"
            />
            <h3 className="text-xl sm:text-2xl lg:text-xl font-bold text-gray-800">Creador de Contenido</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center w-full">
              Transforma tus ideas persuasivas en ventas.
            </p>
            <div className="flex-grow" /> {/* Este div hace que el botón se empuje hacia abajo */}
            <div className="flex justify-center w-full">
              <button
                onClick={handleScroll} // Llamada a handleScroll para hacer el desplazamiento
                className="w-[250px] mb-5 sm:w-[280px] lg:w-[300px] h-[45px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
              >
                Crea impacto con tu contenido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuintoBloque;
