
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Drill } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background technical overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-line"></div>
            <span className="font-mono text-orange-500 text-sm tracking-tighter uppercase">Estudio de Ingeniería & Diseño</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
            THE BOX <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">CONTAINER DESIGN</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
            Redefiniendo la arquitectura modular. Transformamos estructuras industriales en espacios habitables de alto rendimiento y lujo sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2" onClick={() => window.location.hash = '#studio'}>
              Ver Proyectos <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.hash = '#logistica'}>
              Catálogo de Venta
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=1200" 
              alt="Contenedor marítimo transformado en vivienda moderna" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 to-transparent">
              <div className="flex items-center gap-3 text-zinc-300 font-mono text-sm">
                <Drill size={16} className="text-orange-500" />
                <span>MODELO X-40HC / SERIE ARQUITECTÓNICA</span>
              </div>
            </div>
          </div>
          {/* Decorative floating stats */}
          <div className="absolute -top-6 -right-6 bg-orange-600 p-6 rounded-lg shadow-xl z-20 hidden xl:block">
            <p className="font-mono text-3xl font-bold">100%</p>
            <p className="text-xs font-mono uppercase tracking-widest text-orange-100">Certificación de Estanqueidad</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
