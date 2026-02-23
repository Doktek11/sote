
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-orange-500 text-sm uppercase tracking-widest">Contacto Directo</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">Solicitar Presupuesto Técnico</h2>
            <p className="text-zinc-400 text-lg mb-12">
              Nuestro equipo de ingeniería revisará su propuesta y enviará una valoración inicial en menos de 48 horas.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Asesoría en Normativa', desc: 'Le ayudamos con los permisos y normativas municipales de arquitectura modular.' },
                { title: 'Logística Global', desc: 'Gestión de transporte especial y posicionamiento mediante grúa en cualquier ubicación.' },
                { title: 'Llave en Mano', desc: 'Desde la cimentación hasta el último acabado interior.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 flex items-center justify-center font-mono text-orange-500 font-bold border border-zinc-700">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100 uppercase text-sm mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle2 size={64} className="text-orange-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">¡Solicitud Enviada!</h3>
                <p className="text-zinc-400">Nuestro departamento técnico se pondrá en contacto con usted en breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ej: Javier García"
                      className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Email Corporativo</label>
                    <input 
                      required
                      type="email" 
                      placeholder="j.garcia@empresa.es"
                      className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Tipo de Proyecto</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light appearance-none">
                    <option>Venta de Contenedor (Logística)</option>
                    <option>Proyecto Arquitectónico (Vivienda/Bar)</option>
                    <option>Piscina / Equipamiento Lúdico</option>
                    <option>Otros Servicios Industriales</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Mensaje o Especificaciones Técnicas</label>
                  <textarea 
                    rows={4}
                    placeholder="Describa brevemente su necesidad o proyecto..."
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  Enviar Solicitud <Send size={16} />
                </Button>
                
                <p className="text-[10px] text-zinc-600 font-mono text-center">
                  Al enviar este formulario acepta nuestra Política de Privacidad y el tratamiento de sus datos técnicos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
