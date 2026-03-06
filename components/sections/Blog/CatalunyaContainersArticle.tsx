import React, { useEffect } from 'react';
import { canonicalForPath } from '../../../seo';

const SEO_TITLE =
  'Catalunya: venta de contenedores marítimos (medidas, tipos y precios 2026) | THE BOX CONTAINER DESIGN';
const SEO_DESCRIPTION =
  'Guía 2026 para comprar contenedores marítimos en Catalunya: medidas oficiales ISO, diferencias entre 20 pies, 40 pies y High Cube, precios orientativos y checklist técnico.';
const SEO_CANONICAL = canonicalForPath('/blog/catalunya-venta-contenedores-maritimos-medidas-tipos-guia-precios-2026');

const upsertMetaByName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
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

export const CatalunyaContainersArticle: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const previousRobots =
      document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '';
    const previousCanonical =
      document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';

    document.title = SEO_TITLE;
    upsertMetaByName('description', SEO_DESCRIPTION);
    upsertMetaByName('robots', 'index,follow,max-image-preview:large');

    upsertMetaByProperty('og:type', 'article');
    upsertMetaByProperty('og:title', SEO_TITLE);
    upsertMetaByProperty('og:description', SEO_DESCRIPTION);
    upsertMetaByProperty('og:url', SEO_CANONICAL);
    upsertMetaByProperty('og:site_name', 'THE BOX CONTAINER DESIGN');

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', SEO_TITLE);
    upsertMetaByName('twitter:description', SEO_DESCRIPTION);

    upsertCanonical(SEO_CANONICAL);

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Catalunya — Venta de contenedores marítimos: medidas, tipos y guía de precios 2026',
      description: SEO_DESCRIPTION,
      datePublished: '2026-03-04',
      dateModified: '2026-03-04',
      author: {
        '@type': 'Organization',
        name: 'THE BOX CONTAINER DESIGN'
      },
      publisher: {
        '@type': 'Organization',
        name: 'THE BOX CONTAINER DESIGN'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': SEO_CANONICAL
      }
    };

    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un contenedor de 20 pies usado en Catalunya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'De forma orientativa, entre 1.400 € y 2.200 €, según estado, certificación y ubicación del stock.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre un contenedor estándar y un High Cube?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El High Cube ofrece mayor altura interior útil, lo que mejora la capacidad de almacenamiento vertical y los proyectos modulares con instalaciones interiores.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Es mejor comprar contenedor nuevo o usado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para almacenaje e industria suele ser más rentable el usado. Para proyectos premium o de imagen comercial, suele convenir un One Trip.'
          }
        }
      ]
    };

    const articleSchemaScript = document.createElement('script');
    articleSchemaScript.type = 'application/ld+json';
    articleSchemaScript.setAttribute('data-schema', 'catalunya-containers-article');
    articleSchemaScript.text = JSON.stringify(ld);
    document.head.appendChild(articleSchemaScript);

    const faqSchemaScript = document.createElement('script');
    faqSchemaScript.type = 'application/ld+json';
    faqSchemaScript.setAttribute('data-schema', 'catalunya-containers-faq');
    faqSchemaScript.text = JSON.stringify(faqLd);
    document.head.appendChild(faqSchemaScript);

    return () => {
      document.title = previousTitle;
      upsertMetaByName('description', previousDescription);
      upsertMetaByName('robots', previousRobots);
      if (previousCanonical) upsertCanonical(previousCanonical);

      const articleSchema = document.querySelector(
        'script[data-schema="catalunya-containers-article"]'
      );
      if (articleSchema) articleSchema.remove();

      const faqSchema = document.querySelector('script[data-schema="catalunya-containers-faq"]');
      if (faqSchema) faqSchema.remove();
    };
  }, []);

  return (
    <section className="bg-zinc-950 py-24 border-y border-zinc-900" aria-labelledby="catalunya-containers-title">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1
          id="catalunya-containers-title"
          className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white"
        >
          Catalunya — Venta de contenedores marítimos: medidas, tipos y guía de precios 2026
        </h1>

        <p className="text-zinc-300 max-w-4xl mb-6 leading-relaxed">
          Si buscas venta de contenedores marítimos en Catalunya, comparar precios o elegir entre
          contenedores usados, un 20 pies o un High Cube, esta guía te ayuda a decidir con datos
          claros y recomendaciones prácticas.
        </p>
        <p className="text-zinc-300 max-w-4xl mb-10 leading-relaxed">
          Con puertos estratégicos como Barcelona y Tarragona, la región suele ofrecer más stock,
          mejores tiempos de entrega y costes logísticos más ajustados.
        </p>

        <img
          src="/montañacontenedores.webp"
          alt="Contenedores marítimos apilados en zona logística de Catalunya"
          className="w-full rounded-2xl border border-zinc-800 mb-10"
          loading="lazy"
        />

        <div className="mb-12 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6">
          <h2 className="text-2xl font-extrabold text-white mb-3">Consulta disponibilidad real ahora</h2>
          <p className="text-zinc-200 mb-5">
            Recibe vídeo de la unidad, inspección técnica básica y presupuesto adaptado a tu
            municipio.
          </p>
          <a
            href="https://wa.me/34657348078?text=Hola%2C%20quiero%20disponibilidad%20de%20contenedores%20en%20Catalunya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
          >
            Escríbenos al 657 348 078 por WhatsApp
          </a>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          ¿Por qué comprar un contenedor marítimo en Catalunya?
        </h2>
        <div className="space-y-4 text-zinc-300 mb-12 leading-relaxed">
          <h3 className="text-xl font-bold text-white">Alta rotación de stock</h3>
          <p>
            La cercanía a corredores marítimos facilita la entrada constante de unidades One Trip y
            usadas en estado competitivo.
          </p>

          <h3 className="text-xl font-bold text-white">Disponibilidad de modelos</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contenedor de 20 pies</li>
            <li>Contenedor de 40 pies</li>
            <li>High Cube 40 pies</li>
            <li>Reefer y unidades especiales</li>
          </ul>

          <h3 className="text-xl font-bold text-white">Costes logísticos competitivos</h3>
          <p>Comprar cerca de puerto suele reducir transporte y plazos de entrega.</p>

          <h3 className="text-xl font-bold text-white">Inspección más fácil</h3>
          <p>
            Podemos coordinar vídeo detallado (puertas, esquinas, suelo y vista 360º) e inspección
            presencial con cita previa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <img
              src="/contenedor-40pies-nuevo.webp"
              alt="Contenedor marítimo de 40 pies nuevo"
              className="w-full h-48 object-cover rounded-xl border border-zinc-800"
              loading="lazy"
            />
            <img
              src="/contenedor-nuevo-20pies-interior.webp"
              alt="Interior de contenedor marítimo nuevo de 20 pies"
              className="w-full h-48 object-cover rounded-xl border border-zinc-800"
              loading="lazy"
            />
            <img
              src="/contenedorabierto-real-20pies-nuevo.webp"
              alt="Contenedor de 20 pies abierto en estado real"
              className="w-full h-48 object-cover rounded-xl border border-zinc-800"
              loading="lazy"
            />
            <img
              src="/puertacontenedor-40pies-nuevo.webp"
              alt="Detalle de puertas de contenedor marítimo de 40 pies"
              className="w-full h-48 object-cover rounded-xl border border-zinc-800"
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Medidas de contenedores marítimos: dimensiones oficiales y datos técnicos
        </h2>
        <div className="overflow-x-auto mb-12 border border-zinc-800 rounded-2xl">
          <table className="w-full min-w-[760px] text-sm text-left text-zinc-300">
            <thead className="bg-zinc-900 text-zinc-100">
              <tr>
                <th className="px-4 py-3">Modelo</th>
                <th className="px-4 py-3">Largo exterior</th>
                <th className="px-4 py-3">Ancho exterior</th>
                <th className="px-4 py-3">Alto exterior</th>
                <th className="px-4 py-3">Alto interior útil</th>
                <th className="px-4 py-3">Capacidad</th>
                <th className="px-4 py-3">Tara aprox.</th>
                <th className="px-4 py-3">Máx. bruto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Contenedor 20 pies</td>
                <td className="px-4 py-3">6,058 m</td>
                <td className="px-4 py-3">2,438 m</td>
                <td className="px-4 py-3">2,591 m</td>
                <td className="px-4 py-3">2,350 m</td>
                <td className="px-4 py-3">33.2 m³</td>
                <td className="px-4 py-3">2.200–2.400 kg</td>
                <td className="px-4 py-3">24.000 kg</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Contenedor 40 pies</td>
                <td className="px-4 py-3">12,192 m</td>
                <td className="px-4 py-3">2,438 m</td>
                <td className="px-4 py-3">2,591 m</td>
                <td className="px-4 py-3">2,350 m</td>
                <td className="px-4 py-3">67.7 m³</td>
                <td className="px-4 py-3">3.700–4.200 kg</td>
                <td className="px-4 py-3">30.480 kg</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">High Cube 40 pies</td>
                <td className="px-4 py-3">12,192 m</td>
                <td className="px-4 py-3">2,438 m</td>
                <td className="px-4 py-3">2,896 m</td>
                <td className="px-4 py-3">2,698 m</td>
                <td className="px-4 py-3">76.4 m³</td>
                <td className="px-4 py-3">3.900–4.300 kg</td>
                <td className="px-4 py-3">30.480 kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-zinc-300 mb-12 leading-relaxed">
          <strong className="text-white">Dato clave:</strong> el High Cube aporta unos 30 cm más
          de altura exterior y hasta 35–40 cm extra de altura interior útil.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <img
            src="/planocontenedor-20pies.webp"
            alt="Plano técnico de contenedor marítimo de 20 pies"
            className="w-full rounded-xl border border-zinc-800"
            loading="lazy"
          />
          <img
            src="/planocontenedor-40pies.webp"
            alt="Plano técnico de contenedor marítimo de 40 pies"
            className="w-full rounded-xl border border-zinc-800"
            loading="lazy"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Contenedor High Cube: ¿vale la pena pagar más?
        </h2>
        <div className="space-y-4 text-zinc-300 mb-12 leading-relaxed">
          <p>
            Si necesitas más volumen útil o una mejor altura interior para estanterías, equipos o
            instalaciones técnicas, el High Cube suele compensar su sobrecoste con más flexibilidad
            y mejor coste por m³.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ideal para proyectos modulares con techos más altos</li>
            <li>Muy útil para palés altos y mercancía volumétrica</li>
            <li>Recomendado en oficinas o habitáculos con instalaciones interiores</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Contenedor de 20 pies: el best-seller local
        </h2>
        <div className="space-y-4 text-zinc-300 mb-12 leading-relaxed">
          <h3 className="text-xl font-bold text-white">Beneficios rápidos</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transporte y maniobra sencillos</li>
            <li>Encaja en parcelas y naves estándar</li>
            <li>Excelente relación coste/volumen</li>
          </ul>
          <h3 className="text-xl font-bold text-white">Usos frecuentes</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trastero exterior</li>
            <li>Almacén de obra</li>
            <li>Taller móvil</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Precio de contenedores marítimos en 2026
        </h2>
        <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>20 pies usado (Cargo Worthy): 1.400 – 1.800 €</li>
            <li>40 pies usado: 1.800 – 2.200 €</li>
            <li>40 pies High Cube usado: 2.000 – 2.400 €</li>
            <li>One Trip 20': desde 2.450 €</li>
            <li>One Trip 40': desde 3.300 €</li>
            <li>Transporte y descarga: 350 – 900 €</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Contenedores usados vs nuevos
        </h2>
        <div className="overflow-x-auto mb-12 border border-zinc-800 rounded-2xl">
          <table className="w-full min-w-[700px] text-sm text-left text-zinc-300">
            <thead className="bg-zinc-900 text-zinc-100">
              <tr>
                <th className="px-4 py-3">Nuevo (One Trip)</th>
                <th className="px-4 py-3">Usado (Cargo Worthy / WWT)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Estética impecable y vida útil máxima</td>
                <td className="px-4 py-3">Ahorro significativo y mejor ROI de almacenaje</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Menos retoques iniciales</td>
                <td className="px-4 py-3">Listo para uso industrial y entrega rápida</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Precio superior</td>
                <td className="px-4 py-3">Más rentable para proyectos temporales</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Cómo trabajamos / Transporte y descarga
        </h2>
        <div className="space-y-4 text-zinc-300 mb-12 leading-relaxed">
          <p>
            Coordinamos la entrega con camión grúa, validamos maniobra previa y te indicamos el
            espacio mínimo necesario para descargar en parcela o nave sin incidencias.
          </p>
          <img
            src="/descargacontenedores-20pies-usado.webp"
            alt="Descarga de contenedor marítimo con camión grúa"
            className="w-full rounded-2xl border border-zinc-800"
            loading="lazy"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Revisiones técnicas antes de comprar
        </h2>
        <div className="mb-12 rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Estructura y estanqueidad sin perforaciones críticas</li>
            <li>Corner castings intactos</li>
            <li>Suelo en estado funcional</li>
            <li>Puertas y juntas correctamente selladas</li>
            <li>Acceso de camión grúa validado</li>
            <li>Normativa municipal para uso permanente</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Preguntas frecuentes (FAQ)</h2>
        <div className="space-y-6 text-zinc-300 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Cuánto cuesta un contenedor de 20 pies usado en la zona?
            </h3>
            <p>Entre 1.400 y 2.200 €, según estado y ubicación de stock.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Qué diferencia hay entre estándar y High Cube?
            </h3>
            <p>El High Cube ofrece más altura interior útil para almacenamiento vertical.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">¿Comprar nuevo o usado?</h3>
            <p>
              Para almacenaje e industria, usado suele ser la opción más rentable. Para imagen
              premium, One Trip.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-orange-500/40 bg-zinc-900 p-7">
          <h2 className="text-2xl font-extrabold text-white mb-3">Conclusión y siguiente paso</h2>
          <p className="text-zinc-300 mb-5 leading-relaxed">
            Elegir bien entre 20', 40', High Cube, usado o nuevo reduce costes y evita sorpresas.
            La disponibilidad cambia rápido según demanda portuaria.
          </p>
          <a
            href="tel:657348078"
            className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
          >
            Llama ahora al 657 348 078 y consulta disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalunyaContainersArticle;

