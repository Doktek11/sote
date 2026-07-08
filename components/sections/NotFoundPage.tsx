import React, { useEffect } from 'react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const previousRobots = robots?.content || '';

    document.title = 'Página no encontrada | The Box Container Design';
    if (robots) robots.content = 'noindex,follow';

    return () => {
      document.title = previousTitle;
      if (robots) robots.content = previousRobots;
    };
  }, []);

  return (
    <section className="min-h-[70vh] bg-zinc-950 px-6 pb-24 pt-40 text-zinc-100">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-orange-500">Error 404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Página no encontrada
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          La dirección solicitada no existe o ha cambiado. Puedes volver al inicio o consultar
          nuestros proyectos disponibles.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/"
            className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-500"
          >
            Volver al inicio
          </a>
          <a
            href="/#studio"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 transition-colors hover:border-zinc-500"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
};
