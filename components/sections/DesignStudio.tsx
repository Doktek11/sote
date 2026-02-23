
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSFORMATIONS } from '../../constants';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

export const DesignStudio: React.FC = () => {
  return (
    <section id="studio" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="font-mono text-zinc-500 text-sm uppercase tracking-[0.3em]">The Design Studio</span>
          <h2 className="text-5xl md:text-7xl font-light mt-4 mb-8 tracking-tighter">Estudio de Diseño y <br /><span className="italic font-serif">Transformaciones</span></h2>
          <div className="accent-line w-24 bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {TRANSFORMATIONS.map((project, idx) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative col-span-12 ${idx === 0 ? 'lg:col-span-8' : 'lg:col-span-6'} group`}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-zinc-800">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 cursor-pointer">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <span className="font-mono text-orange-500 text-xs mb-2 block uppercase tracking-widest">{project.category}</span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h3>
                    <div className="p-4 bg-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 max-w-xl">
                <p className="text-zinc-400 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-4">
                  {project.features.map((f, i) => (
                    <span key={i} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 uppercase">{f}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-zinc-400 font-mono text-sm hover:text-white transition-colors group flex items-center gap-4 mx-auto uppercase tracking-widest">
            Ver Portafolio Completo 
            <div className="w-12 h-[1px] bg-zinc-800 group-hover:w-20 group-hover:bg-orange-500 transition-all"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
