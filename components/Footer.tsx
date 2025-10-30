import React from 'react';
import { FacebookIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg text-white py-12 border-t border-white/20">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="https://photos.fife.usercontent.google.com/pw/AP1GczMGTOKjVHSgNr1tq3SupjZ9_4We7R1T_c21MeRYSMj7vFPNVa8-Xyo=w991-h991-s-no-gm?authuser=0" 
          alt="Planifica Tu Sueño Logo" 
          className="h-16 mx-auto mb-2"
        />
        <p className="mt-2 text-pink-200">Agencia de Viajes y Turismo</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-white hover:text-pink-300 transition-colors">
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-white hover:text-pink-300 transition-colors">
            <FacebookIcon className="w-8 h-8" />
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-sm text-gray-300">
          <p>Registro Nacional de Turismo (RNT): 181495</p>
          <p className="mt-2 max-w-3xl mx-auto">
            Sujetos al régimen de responsabilidad que establece la ley 300/96, D.R. 1075/97, Decreto 2438 de 2010 y demás normas que la modifiquen, adicionen o reformen.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Planifica Tu Sueño Agencia de Viajes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;