
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Truth } from './components/Truth';
import { ColdChain } from './components/ColdChain';
import { Science } from './components/Science';
import { Ritual } from './components/Ritual';
import { Manifesto } from './components/Manifesto';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CardioPage } from './components/pages/CardioPage';
import { GIPage } from './components/pages/GIPage';
import { NeuroPage } from './components/pages/NeuroPage';

type Page = 'home' | 'cardio' | 'gi' | 'neuro';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-[#F5F7F7]">
      <Navigation 
        onOpenCart={() => setIsCartOpen(true)} 
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Truth />
            <ColdChain />
            <Manifesto />
            <Science onNavigate={(page) => setCurrentPage(page)} />
            <Ritual />
            <Offer />
            <FAQ />
          </>
        )}
        {currentPage === 'cardio' && <CardioPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'gi' && <GIPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'neuro' && <NeuroPage onBack={() => setCurrentPage('home')} />}
      </main>

      <Footer onNavigate={(page) => setCurrentPage(page)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
