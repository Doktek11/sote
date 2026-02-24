import React, { useState, useEffect } from 'react';
import { Menu, X, Box } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';
  const salesLandingPath = '/venta-contenedores-maritimos-espana';
  const isSalesLandingPage = normalizedPath === salesLandingPath;
  const isHomePage = normalizedPath === '/';
  const homePrefix = isHomePage ? '' : '/';

  const navLinks = isSalesLandingPage
    ? [
        { name: 'Precios', href: '#precios' },
        { name: 'Landing Venta', href: '/venta-contenedores-maritimos-espana' },
        { name: 'Logística', href: '#entrega' },
        { name: 'FAQs', href: '/preguntas-frecuentes' },
        { name: 'Cotización', href: '#cotizacion' },
      ]
    : [
        { name: 'Venta', href: `${homePrefix}#logistica` },
        { name: 'Estudio', href: `${homePrefix}#studio` },
        { name: 'Landing Venta', href: '/venta-contenedores-maritimos-espana' },
        { name: 'FAQs', href: '/preguntas-frecuentes' },
        { name: 'Presupuesto', href: `${homePrefix}#quote` },
      ];

  const handleQuoteClick = () => {
    if (isSalesLandingPage) {
      window.location.hash = '#cotizacion';
      return;
    }
    window.location.href = `${homePrefix}#quote`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" aria-label="Ir al inicio" className="flex items-center gap-3">
          <div className="bg-orange-600 p-2 rounded-sm">
            <Box size={24} className="text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tighter whitespace-nowrap">
            THE BOX <span className="font-light text-zinc-400">DESIGN</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm" onClick={handleQuoteClick}>
            Solicitar Presupuesto
          </Button>
        </div>

        <button className="md:hidden text-zinc-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono uppercase tracking-widest text-zinc-400"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full" onClick={handleQuoteClick}>
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
