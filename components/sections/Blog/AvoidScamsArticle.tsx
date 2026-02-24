// AvoidScamsArticle.tsx
import React, { useCallback, useEffect } from 'react';

const SEO_TITLE = 'Cómo evitar estafas al comprar un contenedor marítimo en 2026 | Guía segura';
const SEO_DESCRIPTION =
  'Guía 2026 para evitar estafas al comprar un contenedor marítimo. Señales de alerta, precios reales de mercado y checklist de verificación antes de pagar.';

// Sustituye por tu ID de medición GA4 (formato G-XXXXXXXXXX).
// Si lo dejas como 'G-XXXXXXXXXX' el componente no inyectará el snippet automáticamente,
// pero seguirá intentando enviar eventos si gtag/dataLayer ya existen en la página.
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Teléfono WhatsApp (formato internacional sin espacios ni signos)
const WHATSAPP_PHONE = '+34657348078';
const WHATSAPP_LINK = `https://wa.me/34${WHATSAPP_PHONE.replace(/\D/g, '').slice(2)}`;

const upsertMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

function injectGtag(measurementId: string) {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') return;
  // Evita inyectar doble vez
  if (document.querySelector(`script[data-gtag-id="${measurementId}"]`)) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script1.setAttribute('data-gtag-id', measurementId);
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.setAttribute('data-gtag-id', measurementId);
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { send_page_view: true });
  `;
  document.head.appendChild(script2);
}

export const AvoidScamsArticle: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';

    document.title = SEO_TITLE;
    upsertMeta('description', SEO_DESCRIPTION);
    upsertMeta('robots', 'index,follow');

    // Inyectar gtag si hay ID válido
    injectGtag(GA_MEASUREMENT_ID);

    // Inyectar JSON-LD Schema (Article) usando datos dinámicos del documento
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Cómo evitar estafas al comprar un contenedor marítimo',
      'description': SEO_DESCRIPTION,
      'datePublished': '2026-02-24',
      'dateModified': '2026-02-24',
      'author': {
        '@type': 'Organization',
        'name': 'THE BOX CONTAINER DESIGN'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'THE BOX CONTAINER DESIGN'
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': window.location.href
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'avoid-scams-article');
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      upsertMeta('description', previousDescription);
      // limpiar schema y metadatos añadidos
      const injected = document.querySelector('script[data-schema="avoid-scams-article"]');
      if (injected) injected.remove();
      // no se remueve gtag para no romper otras partes del sitio
    };
  }, []);

  // Función que envía evento GA4 y dataLayer, luego abre WhatsApp.
  // Intenta usar gtag primero; si no existe, hace dataLayer.push como fallback.
  const handleWhatsAppClick = useCallback(
    (label = 'WhatsApp CTA', extra: Record<string, any> = {}) => (e?: React.MouseEvent<HTMLAnchorElement>) => {
      if (e) e.preventDefault();

      const eventPayload = {
        event_category: 'engagement',
        event_label: label,
        method: 'whatsapp',
        phone: WHATSAPP_PHONE,
        page_title: document.title,
        page_location: window.location.href,
        ...extra
      };

      try {
        // gtag (GA4) call (si está disponible)
        if ((window as any).gtag && typeof (window as any).gtag === 'function') {
          // Nombre de evento personalizado: whatsapp_contact
          (window as any).gtag('event', 'whatsapp_contact', eventPayload);
        }
      } catch (err) {
        // silencioso
        // console.warn('gtag error', err);
      }

      try {
        // dataLayer fallback
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: 'whatsapp_click', ...eventPayload });
      } catch (err) {
        // silencioso
      }

      // Abrir WhatsApp en nueva ventana
      // Añadimos utm para distinguir tráfico si se usa en analytics
      const url = `${WHATSAPP_LINK}?utm_source=site&utm_medium=cta&utm_campaign=whatsapp_contact`;
      window.open(url, '_blank', 'noopener,noreferrer');
    },
    []
  );

  // Helper que retorna el handler para enlaces en línea (diferentes labels)
  const waHandler = (label?: string) => {
    return handleWhatsAppClick(label ?? 'WhatsApp CTA');
  };

  return (
    <section className="bg-zinc-950 py-24 border-y border-zinc-900" aria-labelledby="avoid-scams-title">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-orange-500 mb-4">Guía 2026</p>

        <h1 id="avoid-scams-title" className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
          Cómo evitar estafas al comprar un contenedor marítimo
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-zinc-200 mb-6">
          Señales de alerta, precios reales y cómo proteger su inversión
        </h2>

        <p className="text-zinc-300 mb-12">
          El mercado de los contenedores marítimos ha visto un aumento de estafas digitales cada vez más sofisticadas.
          Ya no son correos mal escritos; ahora son estructuras bien diseñadas para engañar incluso a compradores con experiencia.
        </p>

        {/* SECCIÓN 1 */}
        <article className="space-y-6 text-zinc-300 mb-16">
          <h2 className="text-2xl font-bold text-white">1. El gancho: contenedores “casi nuevos” a precios imposibles</h2>

          <p>
            Si ve un contenedor 40’ High Cube One Way por 1.500€ o 1.800€, desconfíe inmediatamente.
            En el mercado europeo actual, en 2026, un 40’ HC One Way rara vez baja de 2.800€ según disponibilidad y puerto.
          </p>

          <p>
            El precio está ligado al coste del acero, la demanda logística y las rutas marítimas internacionales.
            Nadie vende muy por debajo del mercado sin un motivo claro.
          </p>

          <div className="border-l-4 border-orange-500 pl-6">
            <p className="font-semibold text-white">La trampa</p>
            <p>Utilizan fotografías reales robadas de terminales portuarias para aparentar stock.</p>

            <p className="font-semibold text-white mt-4">La realidad</p>
            <p>No tienen contenedores. Solo buscan la transferencia rápida.</p>
          </div>

          <a
            href={WHATSAPP_LINK}
            onClick={waHandler('Consultar precio real por WhatsApp')}
            className="inline-flex mt-4 rounded-lg bg-orange-600 px-5 py-3 font-semibold hover:bg-orange-500 transition-colors text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar precio real por WhatsApp
          </a>
        </article>

        {/* SECCIÓN 2 */}
        <article className="space-y-6 text-zinc-300 mb-16">
          <h2 className="text-2xl font-bold text-white">2. Webs perfectas pero vacías (webs fantasma)</h2>

          <p>
            Hoy en día crear una web profesional es sencillo. Las llamadas webs fantasma están diseñadas para parecer empresas consolidadas.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Certificados falsos.</li>
            <li>Textos legales genéricos.</li>
            <li>Direcciones en puertos reales donde nadie conoce a la empresa.</li>
          </ul>

          <p className="font-semibold text-white">Señales claras de alerta:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Solo permiten pago por transferencia.</li>
            <li>No responden preguntas técnicas.</li>
            <li>No ofrecen visita ni vídeo real.</li>
            <li>El IBAN no coincide con el titular.</li>
          </ul>

          <a
            href={WHATSAPP_LINK}
            onClick={waHandler('Verificar empresa antes de pagar')}
            className="inline-flex mt-4 rounded-lg bg-orange-600 px-5 py-3 font-semibold hover:bg-orange-500 transition-colors text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verificar empresa antes de pagar
          </a>
        </article>

        {/* SECCIÓN 3 */}
        <article className="space-y-6 text-zinc-300 mb-16">
          <h2 className="text-2xl font-bold text-white">3. El riesgo del “Click y Compra” sin asesoramiento técnico</h2>

          <p>Comprar un contenedor marítimo para vivienda requiere análisis previo:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Nivelación del terreno.</li>
            <li>Accesos para camión grúa.</li>
            <li>Estado estructural.</li>
            <li>Aislamiento si es para vivienda.</li>
          </ul>

          <p>Señal clara de alerta: la web obliga a añadir al carrito y pagar sin consulta técnica previa.</p>

          <a
            href={WHATSAPP_LINK}
            onClick={waHandler('Solicitar asesoramiento técnico')}
            className="inline-flex mt-4 rounded-lg bg-orange-600 px-5 py-3 font-semibold hover:bg-orange-500 transition-colors text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar asesoramiento técnico
          </a>
        </article>

        {/* SECCIÓN 4 */}
        <article className="space-y-6 text-zinc-300 mb-16">
          <h2 className="text-2xl font-bold text-white">4. El triángulo del silencio</h2>

          <p>Tras realizar la transferencia suele repetirse el patrón:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmación automática.</li>
            <li>Excusas logísticas.</li>
            <li>Desaparición total.</li>
          </ul>

          <p>Recuperar el dinero es extremadamente difícil si no se ha verificado previamente la identidad fiscal y bancaria del vendedor.</p>

          <a
            href={WHATSAPP_LINK}
            onClick={waHandler('Confirmar datos antes de transferir')}
            className="inline-flex mt-4 rounded-lg bg-orange-600 px-5 py-3 font-semibold hover:bg-orange-500 transition-colors text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar datos antes de transferir
          </a>
        </article>

        {/* CHECKLIST */}
        <div className="mt-20 p-8 rounded-2xl border border-orange-500/30 bg-orange-500/5">
          <h2 className="text-2xl font-extrabold mb-6 text-white">Checklist antes de comprar un contenedor marítimo</h2>

          <ul className="space-y-3 text-zinc-300">
            <li>¿La empresa tiene CIF verificable?</li>
            <li>¿El IBAN coincide con el titular?</li>
            <li>¿Puede hablar con una persona real?</li>
            <li>¿Existe dirección física comprobable?</li>
            <li>¿Le ofrecen vídeo real del contenedor?</li>
            <li>¿El precio está dentro del rango de mercado?</li>
          </ul>

          <a
            href={WHATSAPP_LINK}
            onClick={waHandler('Hablar ahora con un asesor')}
            className="inline-flex mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-500 transition-colors text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar ahora con un asesor
          </a>
        </div>
      </div>
    </section>
  );
};

export default AvoidScamsArticle;
