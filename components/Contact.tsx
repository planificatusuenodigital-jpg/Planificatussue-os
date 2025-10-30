import React from 'react';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-sans text-3xl md:text-5xl font-bold text-brand-purple">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
          Visítanos o contáctanos. Nuestro equipo de expertos está listo para ayudarte a planificar el viaje perfecto.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl flex flex-col items-center p-6 shadow-md">
            <LocationMarkerIcon className="w-10 h-10 text-brand-magenta" />
            <h3 className="mt-4 font-bold text-xl text-brand-purple">Nuestra Oficina</h3>
            <p className="mt-2 text-gray-700">
              Centro Comercial La Colmena <br />
              Carrera 4 #13-32, Anserma, Caldas
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl flex flex-col items-center p-6 shadow-md">
            <PhoneIcon className="w-10 h-10 text-brand-magenta" />
            <h3 className="mt-4 font-bold text-xl text-brand-purple">Llámanos</h3>
            <p className="mt-2 text-gray-700">
              (Simulado) <br />
              +57 300 123 4567
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl flex flex-col items-center p-6 shadow-md">
            <MailIcon className="w-10 h-10 text-brand-magenta" />
            <h3 className="mt-4 font-bold text-xl text-brand-purple">Escríbenos</h3>
            <p className="mt-2 text-gray-700">
             (Simulado) <br/>
             info@planificatusueno.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;