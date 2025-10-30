import React from 'react';
import { StarIcon, UsersIcon, GlobeAltIcon } from './Icons';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <StarIcon className="w-8 h-8 text-brand-magenta" />
              <span className="ml-2 font-sans text-3xl font-bold text-brand-purple">4.9 / 5.0</span>
            </div>
            <p className="mt-2 text-gray-700">Calificación en Google basada en 213+ opiniones.</p>
          </div>
          <div className="flex flex-col items-center">
            <UsersIcon className="w-10 h-10 text-brand-magenta" />
            <p className="mt-2 text-lg font-semibold text-brand-purple">Más de 3.8 mil seguidores en Instagram.</p>
            <p className="text-gray-700">Únete a nuestra comunidad de viajeros.</p>
          </div>
          <div className="flex flex-col items-center">
             <GlobeAltIcon className="w-10 h-10 text-brand-magenta" />
            <p className="mt-2 text-lg font-semibold text-brand-purple">Tu portal de salida (Gateway)</p>
            <p className="text-gray-700">Accede a destinos nacionales e internacionales sin salir de Anserma.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;