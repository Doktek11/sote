
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { LogisticsSection } from './components/sections/LogisticsSection';
import { DesignStudio } from './components/sections/DesignStudio';
import { QuoteForm } from './components/sections/QuoteForm';
import { Footer } from './components/Footer';

function App() {
  // Simple smooth scroll effect for hash links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted Partners / Brands Section */}
        <section className="bg-zinc-950 py-10 border-y border-zinc-900">
          <div className="container mx-auto px-6 overflow-hidden">
            <div className="flex items-center justify-between opacity-30 grayscale gap-12 whitespace-nowrap animate-pulse">
              <span className="font-mono text-xl font-bold italic tracking-[0.2em]">CARGO-PRO</span>
              <span className="font-mono text-xl font-bold italic tracking-[0.2em]">MODULAR-TECH</span>
              <span className="font-mono text-xl font-bold italic tracking-[0.2em]">STEEL-CORE</span>
              <span className="font-mono text-xl font-bold italic tracking-[0.2em]">ECO-Vessel</span>
              <span className="font-mono text-xl font-bold italic tracking-[0.2em]">NORDIC-TRANS</span>
            </div>
          </div>
        </section>

        <LogisticsSection />
        
        {/* Split separator for Business Duality */}
        <div className="h-24 bg-gradient-to-b from-white to-zinc-950"></div>

        <DesignStudio />
        
        <QuoteForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
