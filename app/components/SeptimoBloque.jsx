
import Calendly from './Calendly.jsx';

// Cargamos el componente Calendly dinámicamente con ssr: false para evitar que se renderice en el servidor


const SeptimoBloque = () => {
  return (
    <div id="septimo-bloque" className="w-full py-16 sm:py-24 flex justify-center items-center mt-32">
      <div className="text-center px-6 w-full max-w-7xl">
        {/* Título */}
        <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B3A4B] mb-6 whitespace-nowrap">
          Formá parte de AZZURRO
        </h2>

        {/* Calendly Widget */}
        <div className="mb-8">
          <Calendly />
        </div>

        {/* Botón */}
        <a
          href="https://calendly.com/agenciafbb/30min?month=2025-02"
          target="_blank"
          className="mt-8 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#B0846A] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-slate-500 transition-all duration-300 ease-in-out w-full sm:w-auto"
        >
          Quiero empezar
        </a>
      </div>
    </div>
  );
};

export default SeptimoBloque;
