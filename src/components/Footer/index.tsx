import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">ClimaO</h3>
          <p className="text-gray-400">Solution de climatisation 100% intérieure</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-6">
          <a href="#formulaire" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 py-1 md:py-0">Contact</a>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ClimaO. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
