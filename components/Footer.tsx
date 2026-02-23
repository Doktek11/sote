
import React from 'react';
import { Box, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Box size={32} className="text-orange-600" />
              <span className="font-bold text-2xl tracking-tighter uppercase">THE BOX</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Especialistas en la venta y transformación de contenedores marítimos para usos industriales y residenciales de alta gama.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-200 mb-8 underline underline-offset-8 decoration-orange-600">Servicios</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contenedores de Ocasión</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Viviendas Modulares</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Piscinas de Contenedor</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Proyectos Retail & Pop-up</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-200 mb-8 underline underline-offset-8 decoration-orange-600">Compañía</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-200 mb-8 underline underline-offset-8 decoration-orange-600">Contacto Técnico</h4>
            <ul className="space-y-6 text-zinc-500 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-orange-500 flex-shrink-0" />
                <span>P.I. Los Olivos, Calle Ingeniería 42<br />28045, Madrid, España</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-orange-500" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-orange-500" />
                <span>ingenieria@theboxdesign.es</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-mono">
            © {new Date().getFullYear()} THE BOX CONTAINER DESIGN. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-400">Política de Privacidad</a>
            <a href="#" className="hover:text-zinc-400">Aviso Legal</a>
            <a href="#" className="hover:text-zinc-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
