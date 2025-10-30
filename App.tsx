import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import TravelPlanner from './components/TravelPlanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const plannerRef = React.useRef<HTMLDivElement>(null);

  const scrollToPlanner = () => {
    plannerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#e0e0e0] min-h-screen font-sans text-brand-text relative overflow-x-hidden">
      {/* Background decorative blobs for Glassmorphism effect */}
      <div className="absolute top-0 -left-40 w-72 h-72 md:w-96 md:h-96 bg-brand-purple rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-72 h-72 md:w-96 md:h-96 bg-brand-magenta rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero onPlanClick={scrollToPlanner} />
          <TrustBar />
          <div ref={plannerRef}>
            <TravelPlanner />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;