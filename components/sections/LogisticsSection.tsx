
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTAINERS } from '../../constants';
import { Button } from '../ui/Button';
import { ContainerSize, ContainerState } from '../../types';
import { Package, Ruler, Info } from 'lucide-react';

export const LogisticsSection: React.FC = () => {
  const [activeSize, setActiveSize] = useState<ContainerSize | 'All'>('All');

  const filtered = activeSize === 'All' 
    ? CONTAINERS 
    : CONTAINERS.filter(c => c.size === activeSize);

  return (
    <section id="logistica" className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-orange-600 text-sm font-bold uppercase tracking-widest">División Logística</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Contenedores Nuevos y de Ocasión</h2>
            <p className="text-zinc-600 text-lg">
              Suministro industrial directo. Disponemos de stock permanente de las principales medidas para carga, almacenamiento o base arquitectónica.
            </p>
          </div>
          <div className="flex gap-2 bg-zinc-100 p-1 rounded-lg border border-zinc-200">
            {['All', '20ft', '40ft', '40ft HC'].map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size as any)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-tighter transition-all ${
                  activeSize === size ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {size === 'All' ? 'Todos' : size}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group border border-zinc-200 hover:border-zinc-400 transition-all overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-zinc-200 relative">
                <img 
                  src={item.imageUrl} 
                  alt={`Contenedor ${item.name}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-zinc-900 text-white text-[10px] font-mono px-2 py-1 uppercase tracking-widest">
                  {item.state}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                  <span className="font-mono text-orange-600 font-bold">{item.priceEstimate}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <Button variant="secondary" size="sm" className="gap-2">
                    Ficha <Info size={14} />
                  </Button>
                  <Button size="sm" onClick={() => window.location.hash = '#quote'}>
                    Reservar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
