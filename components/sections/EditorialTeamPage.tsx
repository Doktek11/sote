import React from 'react';
import { useRouteSeo } from '../../seo';
import { PATHS } from '../../site.config.mjs';

export const EditorialTeamPage: React.FC = () => {
  useRouteSeo(PATHS.editorial);

  return (
    <section className="bg-zinc-950 pb-24 pt-32 text-zinc-200" aria-labelledby="editorial-title">
    <div className="container mx-auto max-w-4xl px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-orange-500">
        Transparencia editorial
      </p>
      <h1 id="editorial-title" className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
        Equipo editorial y criterios de publicación
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-zinc-300">
        Las guías de esta web se publican bajo autoría corporativa de The Box Container Design y
        tratan sobre compra, logística, transformación y usos de contenedores marítimos.
      </p>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-white">Cómo preparamos los contenidos</h2>
      <ul className="list-disc space-y-3 pl-6 leading-relaxed text-zinc-300">
        <li>Separamos las especificaciones técnicas de las estimaciones comerciales.</li>
        <li>Indicamos cuándo los precios son orientativos y pueden variar según stock o transporte.</li>
        <li>Enlazamos fuentes oficiales cuando tratamos normativa, estándares o derechos del consumidor.</li>
        <li>Revisamos las guías cuando cambian los datos, servicios o referencias utilizadas.</li>
      </ul>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-white">Alcance de la información</h2>
      <p className="leading-relaxed text-zinc-300">
        El contenido tiene finalidad informativa. Los requisitos urbanísticos, técnicos, fiscales o
        de transporte deben confirmarse para cada ubicación y proyecto con el profesional u organismo
        competente.
      </p>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-white">Correcciones y contacto</h2>
      <p className="leading-relaxed text-zinc-300">
        Si detectas un dato desactualizado o una referencia incorrecta, escríbenos a{' '}
        <a
          href="mailto:info@theboxcontainerdesign.com"
          className="text-orange-400 underline underline-offset-4 hover:text-orange-300"
        >
          info@theboxcontainerdesign.com
        </a>
        . Revisaremos la observación y actualizaremos el contenido cuando corresponda.
      </p>
    </div>
    </section>
  );
};

export default EditorialTeamPage;
