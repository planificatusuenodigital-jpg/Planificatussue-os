import React, { useState } from 'react';
import type { TravelPackage } from '../types';
import { generateTravelPackages } from '../services/geminiService';
import PackageCard from './PackageCard';
import { SparklesIcon } from './Icons';

const TravelPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setPackages([]);

    try {
      const results = await generateTravelPackages(prompt);
      setPackages(results);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <SparklesIcon className="mx-auto w-12 h-12 text-brand-magenta" />
        <h2 className="font-sans text-3xl md:text-5xl font-bold text-brand-purple mt-4">
          Describe Tus Vacaciones Soñadas
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
          Dinos qué tienes en mente y nuestra IA creará instantáneamente tres ideas de viaje perfectas para ti.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ej: 'Quiero unas vacaciones relajantes en una playa de arena blanca con mi pareja, con todo incluido y algunas actividades acuáticas.'"
            className="w-full h-32 p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg shadow-inner text-gray-800 placeholder-gray-600 focus:ring-2 focus:ring-brand-magenta focus:border-brand-magenta transition duration-300"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 px-10 py-4 bg-brand-magenta/80 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transform transition-all duration-300 hover:bg-brand-magenta hover:scale-105 active:scale-95 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generando Ideas...' : 'Generar Ideas de Viaje'}
          </button>
        </form>

        {isLoading && (
          <div className="mt-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-magenta mx-auto"></div>
            <p className="mt-4 text-gray-700">Estamos planeando tu sueño, ¡un momento!</p>
          </div>
        )}

        {error && (
          <div className="mt-12 max-w-2xl mx-auto bg-red-500/20 backdrop-blur-md border border-red-400/50 text-red-800 px-4 py-3 rounded-xl relative" role="alert">
            <strong className="font-bold">¡Oh no! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {packages.length > 0 && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {packages.map((pkg, index) => (
              <PackageCard key={index} travelPackage={pkg} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelPlanner;