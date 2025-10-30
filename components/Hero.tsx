import React from 'react';

interface HeroProps {
  onPlanClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlanClick }) => {
  return (
    <div className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-the-clouds-at-a-high-altitude-4627-large.mp4" type="video/mp4" />
        Tu navegador no soporta vídeos.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/50 via-brand-magenta/30 to-transparent"></div>
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
          className="mt-8 px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/30 animate-button-breathe"
        >
          ¡Crea tu Viaje Soñado!
        </button>
      </div>
    </div>
  );
};

export default Hero;