import React from 'react';
import type { TravelPackage } from '../types';
import { CheckCircleIcon, LocationMarkerIcon } from './Icons';

interface PackageCardProps {
  travelPackage: TravelPackage;
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ travelPackage, index }) => {
  // Use a more relevant image source like Unsplash
  const imageUrl = `https://source.unsplash.com/400x250/?${encodeURIComponent(travelPackage.destination.split(',')[0])},travel`;

  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={travelPackage.destination}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col text-gray-800">
        <h3 className="font-sans font-bold text-2xl text-brand-purple">{travelPackage.packageName}</h3>
        <div className="flex items-center mt-2 text-gray-700">
          <LocationMarkerIcon className="w-5 h-5 mr-2 text-brand-magenta" />
          <span>{travelPackage.destination}</span>
        </div>
        <p className="mt-4 flex-grow">{travelPackage.description}</p>
        
        <div className="mt-6">
          <h4 className="font-bold">Actividades Sugeridas:</h4>
          <ul className="mt-2 space-y-2">
            {travelPackage.activities.slice(0, 3).map((activity, i) => (
              <li key={i} className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/50">
           <p className="text-lg font-semibold text-gray-700">Desde</p>
           <p className="text-2xl font-bold text-brand-purple">{travelPackage.priceEstimate}</p>
        </div>

        <button className="mt-6 w-full py-3 bg-brand-magenta/80 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transform transition-all duration-300 hover:bg-brand-magenta hover:scale-105 active:scale-95 shadow-md">
          Contactar para Reservar
        </button>
      </div>
    </div>
  );
};

export default PackageCard;