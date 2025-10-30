import React from 'react';

interface HeroProps {
  onPlanClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlanClick }) => {
  return (
    <div className="relative h-[60vh] md:h-screen bg-gradient-to-br from-brand-purple/70 via-brand-magenta/70 to-pink-400/70 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img 
          src="https://photos.fife.usercontent.google.com/pw/AP1GczMGTOKjVHSgNr1tq3SupjZ9_4We7R1T_c21MeRYSMj7vFPNVa8-Xyo=w991-h991-s-no-gm?authuser=0" 
          alt="Planifica Tu Sueño Logo" 
          className="h-24 md:h-32 mb-4 drop-shadow-lg"
        />
        <h1 className="font-script text-5xl md:text-7xl font-bold drop-shadow-lg">
          Planifica Tu Sueño
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-2xl font-light drop-shadow-md">
          Tu puerta al mundo desde el corazón de Anserma. Hacemos realidad las vacaciones que siempre has imaginado.
        </p>
        <button
          onClick={onPlanClick}
          className="mt-8 px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transform transition-all duration-300 hover:bg-white/30 hover:scale-105 active:scale-95 shadow-lg"
        >
          ¡Crea tu Viaje Soñado!
        </button>
      </div>
       {/* Floating elements for dreamy effect */}
       <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
       <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
       <div className="absolute top-20 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
    </div>
  );
};

export default Hero;