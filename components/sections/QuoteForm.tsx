import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const contactEmail = 'info@theboxcontainerdesign.com';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fullName = String(formData.get('fullName') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent('Solicitud rápida desde la web');
    const body = encodeURIComponent(
      `Nombre: ${fullName || 'No indicado'}\n` +
      `Teléfono: ${phone || 'No indicado'}\n\n` +
      `Mensaje:\n${message || 'Sin mensaje'}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-orange-500 text-sm uppercase tracking-widest">Contacto Directo</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">Solicitar Presupuesto Técnico</h2>
            <p className="text-zinc-400 text-lg mb-6">
              Te lo ponemos fácil: déjanos solo lo básico y te contactamos lo antes posible.
            </p>
            <p className="text-zinc-500 text-sm mb-10">
              También puedes escribirnos a{' '}
              <a className="text-orange-400 hover:text-orange-300" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </p>

            <div className="space-y-8">
              {[
                { title: 'Respuesta Ágil', desc: 'Te contactamos en el menor tiempo posible con una primera orientación.' },
                { title: 'Sin Compromiso', desc: 'Cuéntanos tu idea y te ayudamos a definir la mejor solución.' },
                { title: 'Asesoría Técnica', desc: 'Equipo especializado en contenedores para uso industrial y modular.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 flex items-center justify-center font-mono text-orange-500 font-bold border border-zinc-700">
                    0{i + 1}
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
                <p className="text-zinc-400">Se abrirá tu correo para enviar la solicitud a nuestro equipo.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Nombre</label>
                  <input
                    required
                    name="fullName"
                    type="text"
                    placeholder="Ej: Javier García"
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Teléfono</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Ej: 657348078"
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Mensaje (opcional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos brevemente qué necesitas..."
                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-200 focus:outline-none focus:border-orange-500 transition-all font-light"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  Enviar Solicitud <Send size={16} />
                </Button>

                <p className="text-[10px] text-zinc-600 font-mono text-center">
                  Al pulsar se abrirá tu cliente de correo con la solicitud preparada para enviar a {contactEmail}.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
