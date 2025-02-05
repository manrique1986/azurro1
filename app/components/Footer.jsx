"use client";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-4">
        <div className="text-lg font-semibold sm:text-base text-center sm:text-left">
        Azzurro
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between space-x-6 sm:space-x-4 mt-2 sm:mt-0">
          <a
            href="tel:+123456789"
            className="text-lg font-medium hover:underline sm:text-sm w-full sm:w-auto text-center"
          >
          felipebertolabs
          </a>
          <a
            href="mailto:contacto@ejemplo.com"
            className="text-lg font-medium hover:underline sm:text-sm w-full sm:w-auto text-center"
          >
            agenciafbb@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;