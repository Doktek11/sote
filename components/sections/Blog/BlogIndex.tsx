import React, { useEffect } from 'react';

const SEO_TITLE = 'Blog de contenedores marítimos | Guías y consejos 2026 | The Box Container Design';
const SEO_DESCRIPTION =
  'Blog de The Box Container Design con guías prácticas sobre compra segura, precios, logística y transformación de contenedores marítimos en España.';
const SEO_CANONICAL = 'https://theboxcontainerdesign.com/blog';

const upsertMetaByName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const BlogIndex: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const previousCanonical =
      document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';

    document.title = SEO_TITLE;
    upsertMetaByName('description', SEO_DESCRIPTION);
    upsertCanonical(SEO_CANONICAL);

    return () => {
      document.title = previousTitle;
      upsertMetaByName('description', previousDescription);
      if (previousCanonical) upsertCanonical(previousCanonical);
    };
  }, []);

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

        <div className="space-y-6">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-orange-500 mb-3">Nueva guía 2026</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Catalunya: venta de contenedores marítimos (medidas, tipos y precios 2026)
            </h2>

            <p className="text-zinc-300 mb-6 leading-relaxed">
              Comparativa clara entre 20 pies, 40 pies y High Cube, rangos de precio actualizados y
              checklist técnico para comprar con criterio en Catalunya.
            </p>

            <a
              href="/blog/catalunya-venta-contenedores-maritimos-medidas-tipos-guia-precios-2026"
              className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Leer artículo completo
            </a>
          </article>

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
      </div>
    </section>
  );
};

export default BlogIndex;
