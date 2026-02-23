import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { LogisticsSection } from './components/sections/LogisticsSection';
import { DesignStudio } from './components/sections/DesignStudio';
import { QuoteForm } from './components/sections/QuoteForm';
import { FaqSection } from './components/sections/FaqSection';
import { SalesLandingPage } from './components/sections/SalesLandingPage';
import { Footer } from './components/Footer';

function App() {
  const whatsappNumber = '34657348078'; // Reemplaza con tu número en formato internacional, sin + ni espacios
  const whatsappMessage = encodeURIComponent('Hola, me gustaría recibir información sobre sus servicios.');

  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';
  const salesLandingPath = '/venta-contenedores-maritimos-espana';
  const isFaqPage = normalizedPath === '/preguntas-frecuentes';
  const isSalesLandingPage = normalizedPath === salesLandingPath;

  // Smooth scroll effect for hash links
  useEffect(() => {
    if (isFaqPage) return;

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
  }, [isFaqPage]);

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main>
        {isFaqPage ? (
          <FaqSection />
        ) : isSalesLandingPage ? (
          <SalesLandingPage />
        ) : (
          <>
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
          </>
        )}
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.26c-.27-.13-1.61-.79-1.86-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.3-.79-.7-1.32-1.57-1.48-1.83-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.61 1.11 2.79.13.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.58.64.2 1.23.17 1.7.1.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.06-.11-.24-.18-.51-.31z" />
          <path d="M16.02 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.38L3.2 28.8l6.63-1.74c1.84 1.01 3.91 1.54 6.19 1.54h.01c7.05 0 12.77-5.72 12.77-12.77S23.08 3.2 16.02 3.2zm0 23.2h-.01c-1.93 0-3.83-.52-5.48-1.49l-.39-.23-3.93 1.03 1.05-3.83-.25-.39a10.53 10.53 0 01-1.62-5.65c0-5.81 4.73-10.54 10.55-10.54 2.81 0 5.45 1.09 7.43 3.08 1.99 1.99 3.08 4.62 3.07 7.43 0 5.81-4.73 10.54-10.53 10.54z" />
        </svg>
      </a>
    </div>
  );
}

export default App;