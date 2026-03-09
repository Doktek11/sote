import React, { useEffect } from 'react';

const SEO_TITLE =
  'Casa contenedor en España: guía completa de diseño, precio y normativa | THE BOX CONTAINER DESIGN';
const SEO_DESCRIPTION =
  'Guía práctica y técnica para evaluar una casa contenedor en España: costes orientativos, diseño, permisos, CTE, logística y errores comunes antes de iniciar tu proyecto.';
const SEO_CANONICAL = 'https://theboxcontainerdesign.com/blog/casa-contenedor-espana-guia';

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

export const CasaContenedorEspanaGuiaArticle: React.FC = () => {
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

    const organizationAndAuthorLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://theboxcontainerdesign.com/#organization',
          name: 'THE BOX CONTAINER DESIGN',
          url: 'https://theboxcontainerdesign.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://theboxcontainerdesign.com/logo.png'
          }
        },
        {
          '@type': 'Person',
          '@id': 'https://theboxcontainerdesign.com/#author-andres',
          name: 'Andrés De Eguía Haazer',
          jobTitle: 'Arquitecto técnico',
          worksFor: {
            '@id': 'https://theboxcontainerdesign.com/#organization'
          }
        }
      ]
    };

    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto dura una casa contenedor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Con tratamiento anticorrosión y mantenimiento periódico, puede superar los 50 años.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Necesita cimentación una casa contenedor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Puede resolverse con zapatas, losa o pilotes según estudio geotécnico y proyecto técnico.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Se puede ampliar una casa contenedor en el futuro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Una de las ventajas del sistema modular es la ampliación por fases mediante nuevos módulos.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Son frías en invierno?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, siempre que el aislamiento y la envolvente se diseñen y ejecuten correctamente conforme al CTE.'
          }
        }
      ]
    };

    const orgAuthorScript = document.createElement('script');
    orgAuthorScript.type = 'application/ld+json';
    orgAuthorScript.setAttribute('data-schema', 'casa-contenedor-org-author');
    orgAuthorScript.text = JSON.stringify(organizationAndAuthorLd);
    document.head.appendChild(orgAuthorScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-schema', 'casa-contenedor-faq');
    faqScript.text = JSON.stringify(faqLd);
    document.head.appendChild(faqScript);

    return () => {
      document.title = previousTitle;
      upsertMetaByName('description', previousDescription);
      upsertMetaByName('robots', previousRobots);
      if (previousCanonical) upsertCanonical(previousCanonical);

      const orgAuthor = document.querySelector('script[data-schema="casa-contenedor-org-author"]');
      if (orgAuthor) orgAuthor.remove();

      const faq = document.querySelector('script[data-schema="casa-contenedor-faq"]');
      if (faq) faq.remove();
    };
  }, []);

  return (
    <section className="bg-zinc-950 py-24 border-y border-zinc-900" aria-labelledby="casa-contenedor-title">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1
          id="casa-contenedor-title"
          className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white"
        >
          Guía completa de casa contenedor en España: diseño, precio y normativa
        </h1>

        <p className="text-zinc-300 max-w-4xl mb-10 leading-relaxed">
          Publicado por THE BOX CONTAINER DESIGN — guía práctica y técnica para entender cuándo una
          casa contenedor es una opción válida, cuánto cuesta orientativamente y qué permisos o
          aspectos técnicos debes revisar antes de empezar.
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Qué es una casa contenedor</h2>
        <p className="text-zinc-300 leading-relaxed mb-8">
          Una <strong>casa contenedor</strong> es una vivienda modular construida a partir de
          contenedores marítimos reutilizados o módulos prefabricados con geometría tipo
          contenedor. Se aprovecha la robustez del acero y la posibilidad de prefabricación en
          taller para reducir tiempos y controlar costes. La adaptación exige cortes controlados,
          refuerzos estructurales, aislamiento, instalaciones y acabados interiores.
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ventajas principales</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300 leading-relaxed mb-10">
          <li>
            <strong>Rapidez de ejecución.</strong> Gran parte del trabajo se realiza en taller;
            plazos típicos: 3–6 meses.
          </li>
          <li>
            <strong>Flexibilidad.</strong> Ampliaciones sencillas mediante nuevos módulos.
          </li>
          <li>
            <strong>Diseño contemporáneo.</strong> Estética industrial/minimalista con grandes
            posibilidades compositivas.
          </li>
          <li>
            <strong>Sostenibilidad.</strong> Reutilización de estructuras, menor generación de
            residuos y fácil integración de energías renovables.
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          ¿Cuánto cuesta una casa contenedor en España? (rangos orientativos)
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-6">
          <em>Nota metodológica:</em> los precios son <strong>rangos orientativos</strong>. Varían
          según el estado del contenedor, la accesibilidad del terreno, el nivel de acabados, la
          normativa local y las opciones técnicas. No use estas cifras como presupuesto definitivo;
          sirven para dimensionar proyectos.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          Tabla de partidas (costes aproximados por partida)
        </h3>
        <div className="overflow-x-auto mb-10 border border-zinc-800 rounded-2xl">
          <table className="w-full min-w-[760px] text-sm text-left text-zinc-300">
            <thead className="bg-zinc-900 text-zinc-100">
              <tr>
                <th className="px-4 py-3">Partida</th>
                <th className="px-4 py-3">Descripción breve</th>
                <th className="px-4 py-3">Rango orientativo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Contenedor (unidad)</td>
                <td className="px-4 py-3">Contenedor usado 20’ o 40’ HC, revisión y preparación</td>
                <td className="px-4 py-3">1.500 € – 6.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Acondicionamiento estructural</td>
                <td className="px-4 py-3">Refuerzos, cortes, marcos para aperturas</td>
                <td className="px-4 py-3">2.000 € – 8.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Aislamiento y revestimientos</td>
                <td className="px-4 py-3">Espuma proyectada, lana mineral, placas interiores</td>
                <td className="px-4 py-3">4.000 € – 18.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Instalaciones</td>
                <td className="px-4 py-3">Eléctrica, fontanería, ACS y climatización básica</td>
                <td className="px-4 py-3">5.000 € – 20.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Cimentación y estructura de apoyo</td>
                <td className="px-4 py-3">Zapatas, losa, pilotes según terreno</td>
                <td className="px-4 py-3">3.000 € – 25.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Transporte y grúa</td>
                <td className="px-4 py-3">Desde puerto/almacén a parcela y montaje</td>
                <td className="px-4 py-3">1.500 € – 8.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Acabados y carpintería</td>
                <td className="px-4 py-3">Suelos, puertas, pintura, mobiliario fijo</td>
                <td className="px-4 py-3">5.000 € – 30.000 €</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Honorarios profesionales</td>
                <td className="px-4 py-3">Proyecto, dirección de obra y trámites</td>
                <td className="px-4 py-3">3.000 € – 12.000 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          Escenarios ejemplo (rangos orientativos)
        </h3>
        <div className="space-y-5 text-zinc-300 leading-relaxed mb-10">
          <p>
            <strong>1) Básico — Tiny house (1 módulo 20’).</strong>
            <br />
            Superficie útil: ~12 m².
            <br />
            <strong>Rango orientativo:</strong> 30.000 € – 60.000 €
          </p>
          <p>
            <strong>2) Medio — Vivienda habitual pequeña (2–3 módulos 40’ HC).</strong>
            <br />
            Superficie útil: 50–90 m².
            <br />
            <strong>Rango orientativo:</strong> 70.000 € – 140.000 €
          </p>
          <p>
            <strong>3) Premium — Proyecto arquitectónico completo (4+ módulos).</strong>
            <br />
            Superficie útil: &gt;120 m².
            <br />
            <strong>Rango orientativo:</strong> desde 150.000 €
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Pídenos tu estudio de viabilidad gratuito (15 min)
          </h2>
          <p className="text-zinc-200 mb-5">
            ¿Quieres un presupuesto orientativo y una valoración de viabilidad? Te orientamos sobre
            número de módulos, m² útiles y rangos de presupuesto.
          </p>
          <a
            href="https://wa.me/34657348078?text=Hola%20TheBox,%20quiero%20un%20estudio%20de%20viabilidad%20(15%20min)%20para%20mi%20casa%20contenedor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500 transition-colors"
          >
            Solicitar estudio gratuito (WhatsApp)
          </a>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Tipos de contenedores y medidas habituales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300 leading-relaxed mb-10">
          <li>
            <strong>20 pies (20’):</strong> ~6 m largo × 2,35 m ancho × 2,39 m altura interior.
          </li>
          <li>
            <strong>40 pies High Cube (40’ HC):</strong> ~12 m largo × 2,35 m ancho × 2,69 m altura
            interior.
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Aspectos técnicos críticos</h2>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Aislamiento térmico y acústico</h3>
        <p className="text-zinc-300 leading-relaxed mb-6">
          El acero conduce el calor; un aislamiento correcto es esencial para cumplir el CTE y
          garantizar confort. Soluciones habituales: espuma proyectada, lana mineral o panel
          sándwich de alto rendimiento.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Refuerzos estructurales</h3>
        <p className="text-zinc-300 leading-relaxed mb-6">
          Cortes para ventanas y puertas requieren perfiles estructurales adecuados y cálculo
          técnico para mantener la integridad del módulo.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Instalaciones</h3>
        <p className="text-zinc-300 leading-relaxed mb-10">
          Planifica electricidad, fontanería, ventilación y climatización desde la fase de diseño
          para evitar retrabajos y pérdida de espacio útil.
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Permisos y normativa (por comunidades y ayuntamientos)
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          La aplicación práctica de la normativa puede variar entre comunidades autónomas y, sobre
          todo, entre ayuntamientos.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Pasos y documentos típicos</h3>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-300 leading-relaxed mb-10">
          <li>Consulta previa de usos en planeamiento municipal (PGOU).</li>
          <li>Proyecto técnico firmado por arquitecto con justificación de CTE.</li>
          <li>Licencia de obra mayor o autorización equivalente.</li>
          <li>Estudio de seguridad y salud (si aplica).</li>
          <li>Cédula/fin de obra y alta de suministros.</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Errores comunes y cómo evitarlos</h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300 leading-relaxed mb-10">
          <li>Comprar contenedores sin inspección anticorrosión y estructural.</li>
          <li>Subestimar aislamiento para el clima de la zona.</li>
          <li>No validar logística de acceso y grúa.</li>
          <li>Prescindir de dirección técnica durante ejecución.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Comparativa: casa contenedor vs obra tradicional (misma calidad)
        </h2>
        <div className="overflow-x-auto mb-8 border border-zinc-800 rounded-2xl">
          <table className="w-full min-w-[540px] text-sm text-left text-zinc-300">
            <thead className="bg-zinc-900 text-zinc-100">
              <tr>
                <th className="px-4 py-3">Sistema</th>
                <th className="px-4 py-3">Coste orientativo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Casa tradicional</td>
                <td className="px-4 py-3">~1.100–1.400 €/m²</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="px-4 py-3">Casa contenedor optimizada</td>
                <td className="px-4 py-3">~700–1.000 €/m²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-zinc-300 leading-relaxed mb-10">
          Comparando misma superficie, acabados e instalaciones, la vivienda modular en
          contenedores suele resultar similar o más económica por m², salvo proyectos premium o
          logística compleja.
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Preguntas frecuentes (FAQ)</h2>
        <dl className="space-y-4 text-zinc-300 leading-relaxed mb-10">
          <div>
            <dt className="font-bold text-white">¿Cuánto dura una casa contenedor?</dt>
            <dd>Con tratamiento anticorrosión y mantenimiento, puede superar los 50 años.</dd>
          </div>
          <div>
            <dt className="font-bold text-white">¿Necesita cimentación?</dt>
            <dd>Sí. Zapatas, losa o pilotes según el estudio geotécnico.</dd>
          </div>
          <div>
            <dt className="font-bold text-white">¿Se pueden ampliar en el futuro?</dt>
            <dd>Sí; añadir módulos es una de las ventajas del sistema.</dd>
          </div>
          <div>
            <dt className="font-bold text-white">¿Son frías en invierno?</dt>
            <dd>No, si el aislamiento se diseña y ejecuta correctamente conforme al CTE.</dd>
          </div>
        </dl>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Autor y credenciales</h2>
        <p className="text-zinc-300 leading-relaxed">
          Andrés De Eguía Haazer — arquitecto técnico con experiencia en proyectos modulares y en
          conversión de contenedores para vivienda y uso turístico.
        </p>
      </div>
    </section>
  );
};
