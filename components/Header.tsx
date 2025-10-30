import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/20 backdrop-blur-lg sticky top-0 z-50 border-b border-white/30">
      <div className="container mx-auto px-4 py-3">
        <img 
          src="https://photos.fife.usercontent.google.com/pw/AP1GczMGTOKjVHSgNr1tq3SupjZ9_4We7R1T_c21MeRYSMj7vFPNVa8-Xyo=w991-h991-s-no-gm?authuser=0" 
          alt="Planifica Tu Sueño Logo" 
          className="h-10"
        />
      </div>
    </header>
  );
};

export default Header;