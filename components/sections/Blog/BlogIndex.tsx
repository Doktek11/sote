import React, { useEffect } from 'react';
import { canonicalForPath } from '../../../seo';

const SEO_TITLE = 'Blog de contenedores marÃ­timos | GuÃ­as y consejos 2026 | The Box Container Design';
const SEO_DESCRIPTION =
  'Blog de The Box Container Design con guÃ­as prÃ¡cticas sobre compra segura, precios, logÃ­stica y transformaciÃ³n de contenedores marÃ­timos en EspaÃ±a.';
const SEO_CANONICAL = canonicalForPath('/blog');

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
          Blog de contenedores marÃ­timos
        </h1>

        <p className="text-zinc-300 mb-12 max-w-3xl leading-relaxed">
          Consejos expertos sobre compra segura, precios reales, logÃ­stica, transformaciÃ³n y uso de
          contenedores marÃ­timos en EspaÃ±a. GuÃ­as prÃ¡cticas para evitar errores y tomar mejores decisiones.
        </p>

        <div className="space-y-6">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-orange-500 mb-3">Nueva guÃ­a 2026</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Catalunya: venta de contenedores marÃ­timos (medidas, tipos y precios 2026)
            </h2>

            <p className="text-zinc-300 mb-6 leading-relaxed">
              Comparativa clara entre 20 pies, 40 pies y High Cube, rangos de precio actualizados y
              checklist tÃ©cnico para comprar con criterio en Catalunya.
            </p>

            <a
              href="/blog/catalunya-venta-contenedores-maritimos-medidas-tipos-guia-precios-2026"
              className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Leer artÃ­culo completo
            </a>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-orange-500 mb-3">GuÃ­a destacada</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              CÃ³mo evitar estafas al comprar un contenedor marÃ­timo en 2026
            </h2>

            <p className="text-zinc-300 mb-6 leading-relaxed">
              SeÃ±ales de alerta, precios de referencia y checklist de verificaciÃ³n antes de pagar para proteger
              tu inversiÃ³n y comprar con seguridad.
            </p>

            <a
              href="/blog/como-evitar-estafas-al-comprar-un-contenedor-maritimo-2026"
              className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Leer artÃ­culo completo
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
