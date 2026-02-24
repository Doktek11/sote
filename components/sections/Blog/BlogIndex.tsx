import React from 'react';

export const BlogIndex: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-24 border-y border-zinc-900" aria-labelledby="blog-title">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 id="blog-title" className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
          Blog de contenedores marítimos
        </h1>

        <p className="text-zinc-300 mb-12 max-w-3xl leading-relaxed">
          Consejos expertos sobre compra segura, precios reales, logística, transformación y uso de
          contenedores marítimos en España. Guías prácticas para evitar errores y tomar mejores decisiones.
        </p>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-orange-500 mb-3">Guía destacada</p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Cómo evitar estafas al comprar un contenedor marítimo en 2026
          </h2>

          <p className="text-zinc-300 mb-6 leading-relaxed">
            Señales de alerta, precios de referencia y checklist de verificación antes de pagar para proteger
            tu inversión y comprar con seguridad.
          </p>

          <a
            href="/blog/como-evitar-estafas-al-comprar-un-contenedor-maritimo-2026"
            className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
          >
            Leer artículo completo
          </a>
        </article>
      </div>
    </section>
  );
};

export default BlogIndex;
