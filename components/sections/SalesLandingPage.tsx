import React, { useEffect } from 'react';
import { canonicalForPath } from '../../seo';

const SEO_TITLE = 'Venta de Contenedores MarÃ­timos en EspaÃ±a | 20 y 40 Pies - Nuevos y Usados';
const SEO_DESCRIPTION =
  'Compra directa de contenedores marÃ­timos en EspaÃ±a con inspecciÃ³n tÃ©cnica propia, vÃ­deo real de unidad y entrega estimada en 5 dÃ­as. Precios orientativos y transporte gestionado.';
const CANONICAL_PATH = '/venta-contenedores-maritimos-espana';
const WHATSAPP_BASE = 'https://wa.me/34657348078';

const upsertMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', href);
};

const buildWhatsappUrl = (message: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

export const SalesLandingPage: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const previousCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';

    document.title = SEO_TITLE;
    upsertMeta('description', SEO_DESCRIPTION);
    upsertCanonical(canonicalForPath(CANONICAL_PATH));

    return () => {
      document.title = previousTitle;
      upsertMeta('description', previousDescription);
      if (previousCanonical) {
        upsertCanonical(previousCanonical);
      }
    };
  }, []);

  return (
    <section className="bg-zinc-950 text-white" aria-labelledby="landing-main-title">
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-6xl">
        <header className="mb-14">
          <h1 id="landing-main-title" className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-5">
            Venta de Contenedores MarÃ­timos en EspaÃ±a | 20 y 40 Pies - Nuevos y Usados
          </h1>
          <p className="text-xl text-orange-400 font-semibold mb-6">
            Compra directa, inspecciÃ³n tÃ©cnica propia y entrega estimada en 5 dÃ­as.
          </p>
          <p className="text-zinc-300 max-w-4xl mb-6">
            Si busca comprar un contenedor marÃ­timo en EspaÃ±a con garantÃ­a real de estado y sin intermediarios invisibles,
            trabajamos con operativa directa en puerto y verificaciÃ³n fÃ­sica antes de cada entrega.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-zinc-200 mb-6">
            <li>âœ” Compra directa sin brokers</li>
            <li>âœ” InspecciÃ³n estructural propia antes de salida</li>
            <li>âœ” VÃ­deo real de la unidad seleccionada</li>
            <li>âœ” Entrega estimada en 5 dÃ­as desde la confirmaciÃ³n del 50% (sujeta a ubicaciÃ³n y accesos)</li>
            <li>âœ” Transporte gestionado en toda EspaÃ±a</li>
          </ul>
          <p className="text-zinc-300 mb-3">
            En un sector donde abundan fotos genÃ©ricas y reventas sin control, nosotros verificamos cada unidad fÃ­sicamente antes de enviarla.
          </p>
          <p className="text-orange-300 font-semibold mb-8">Las unidades First Trip son limitadas y rotan semanalmente en puerto.</p>
          <a
            href={buildWhatsappUrl('Hola, quiero consultar disponibilidad real de contenedores en puerto (20 y 40 pies).')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-orange-600 px-7 py-4 font-bold tracking-wide hover:bg-orange-500 transition-colors"
          >
            CONSULTAR DISPONIBILIDAD REAL
          </a>
        </header>

        <section id="precios" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Â¿CuÃ¡nto cuesta un contenedor marÃ­timo?</h2>
          <p className="text-zinc-300 mb-4">
            El precio depende de: medidas, estado (Usado Grado A / B o First Trip), puerto de salida y distancia de transporte.
            Las tarifas varÃ­an segÃºn rotaciÃ³n de stock portuario.
          </p>
          <h3 className="text-xl font-bold mb-3">Precios orientativos (desde):</h3>
          <ul className="space-y-2 text-zinc-200 mb-5">
            <li>â€¢ Contenedor 20 pies usado Grado A: desde 1.600 â‚¬</li>
            <li>â€¢ Contenedor 40 pies usado Grado A: desde 1.900 â‚¬</li>
            <li>â€¢ Contenedor 40 pies High Cube First Trip: desde 2.800 â‚¬</li>
            <li>â€¢ Contenedor 20 pies First Trip: desde 2.000 â‚¬</li>
          </ul>
          <p className="text-zinc-300 mb-5">Solicite precio actualizado con transporte incluido y sin costes ocultos.</p>
          <a
            href={buildWhatsappUrl('Hola, quiero recibir un presupuesto cerrado con transporte incluido para un contenedor marÃ­timo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-orange-400 font-semibold hover:text-orange-300 transition-colors"
          >
            RECIBIR PRESUPUESTO CERRADO â†’
          </a>
        </section>

        <section id="errores" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Evite errores comunes al comprar un contenedor marÃ­timo</h2>
          <h3 className="text-xl font-bold mb-3">Nuestra diferencia</h3>
          <ul className="space-y-2 text-zinc-200 mb-4">
            <li>âœ” InspecciÃ³n visual y estructural propia antes del envÃ­o</li>
            <li>âœ” VÃ­deo real de la unidad concreta</li>
            <li>âœ” Presupuesto cerrado con transporte incluido</li>
            <li>âœ” Asesoramiento previo sobre accesos y descarga</li>
            <li>âœ” Operativa directa con puertos y terminales logÃ­sticas</li>
          </ul>
          <p className="text-zinc-100 font-semibold">No vendemos contenedores sobre papel. Entregamos unidades verificadas.</p>
        </section>

        <section id="comparativa" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Contenedores Usados vs First Trip â€“ Comparativa Clara</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="p-3">CaracterÃ­stica</th>
                  <th className="p-3">Usado Grado A</th>
                  <th className="p-3">First Trip</th>
                </tr>
              </thead>
              <tbody className="bg-zinc-950">
                <tr className="border-t border-zinc-800"><td className="p-3">Estado estructural</td><td className="p-3">Ãntegro y estanco</td><td className="p-3">PrÃ¡cticamente nuevo</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">EstÃ©tica</td><td className="p-3">Puede tener marcas externas</td><td className="p-3">Superficie limpia</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Suelo</td><td className="p-3">Funcional y resistente</td><td className="p-3">Perfecto estado</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Ideal para</td><td className="p-3">Almacenaje y logÃ­stica</td><td className="p-3">Vivienda y proyectos premium</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Precio</td><td className="p-3">MÃ¡s econÃ³mico</td><td className="p-3">InversiÃ³n superior</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-zinc-200 font-semibold">No trabajamos con unidades estructuralmente comprometidas.</p>
        </section>

        <section id="resistencia" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Resistencia Estructural Real</h2>
          <p className="text-zinc-300 mb-3">
            Un contenedor marÃ­timo no es una caseta prefabricada. EstÃ¡ diseÃ±ado para apilamiento marÃ­timo, transporte extremo
            y cargas elevadas en entornos salinos. Fabricado en acero Corten anticorrosiÃ³n; pensado para dÃ©cadas de uso real.
          </p>
          <p className="text-sm text-zinc-400">Consulte fichas por modelo para datos de carga y apilamiento.</p>
        </section>

        <section id="usos" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Usos recomendados</h2>
          <ul className="space-y-2 text-zinc-200 mb-5">
            <li>â€¢ Almacenaje industrial</li>
            <li>â€¢ ProtecciÃ³n de maquinaria</li>
            <li>â€¢ Vivienda modular y oficinas</li>
            <li>â€¢ Piscinas estructurales</li>
            <li>â€¢ Pop-up stores comerciales</li>
          </ul>
          <p className="text-orange-300 font-semibold">
            No es sÃ³lo almacenamiento. Es la estructura que puede arrancar su vivienda, oficina o negocio en semanas.
          </p>
        </section>

        <section id="especificaciones" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Especificaciones TÃ©cnicas</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-zinc-200">
            <li><strong>Material:</strong> Acero Corten anticorrosiÃ³n</li>
            <li><strong>CertificaciÃ³n:</strong> Placa CSC vÃ¡lida</li>
            <li><strong>Medidas estÃ¡ndar:</strong> 20 pies (6 m) / 40 pies HC (12 m)</li>
            <li><strong>Puertas:</strong> Doble hoja con cierre de seguridad</li>
            <li><strong>Estanqueidad:</strong> Protegido frente a lluvia y viento</li>
            <li><strong>Vida Ãºtil estimada:</strong> &gt;25 aÃ±os (con mantenimiento bÃ¡sico)</li>
          </ul>
        </section>

        <section id="entrega" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Entrega y LogÃ­stica</h2>
          <p className="text-zinc-300">
            Gestionamos el proceso completo: transporte en camiÃ³n portacontenedores o grÃºa, coordinaciÃ³n logÃ­stica y asesoramiento
            sobre accesos. Entrega habitual 3â€“10 dÃ­as; estimada en 5 dÃ­as tras pago del 50% (sujeta a ubicaciÃ³n y permisos).
            Antes del envÃ­o, vÃ­deo real de la unidad.
          </p>
        </section>

        <section id="garantia" className="mb-14">
          <h2 className="text-3xl font-black mb-4">GarantÃ­a y Compromiso</h2>
          <ul className="space-y-2 text-zinc-200">
            <li>âœ” Unidad estructuralmente Ã­ntegra</li>
            <li>âœ” Estanqueidad comprobada</li>
            <li>âœ” Correspondencia entre presupuesto y entrega</li>
            <li>âœ” Transparencia total en estado y precio</li>
          </ul>
        </section>

        <section id="faqs-extra" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">Â¿Puedo instalar un contenedor en suelo rÃºstico?</h3>
              <p className="text-zinc-300">DependerÃ¡ de la normativa autonÃ³mica y municipal. Ofrecemos asesoramiento previo para su caso.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">Â¿CuÃ¡nto cuesta la descarga con grÃºa?</h3>
              <p className="text-zinc-300">Depende de accesos y maniobra. Se incorpora desglosado en el presupuesto.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">Â¿QuÃ© documentaciÃ³n acompaÃ±a al contenedor?</h3>
              <p className="text-zinc-300">Placa CSC, certificado de inspecciÃ³n y registro de fotos/vÃ­deo pre-entrega.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">Â¿QuÃ© plazo de reclamaciÃ³n tengo tras la entrega?</h3>
              <p className="text-zinc-300">Recomendado: 48â€“72 horas para notificar incidencias con evidencia visual.</p>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="rounded-2xl border border-orange-500/40 bg-orange-500/10 p-8">
          <h2 className="text-3xl font-black mb-4">Solicitar cotizaciÃ³n ahora</h2>
          <p className="text-zinc-100 mb-6">
            Reciba disponibilidad real en puerto, fotografÃ­as o vÃ­deo de la unidad, precio cerrado con transporte incluido
            y asesoramiento tÃ©cnico previo. (Stock sujeto a rotaciÃ³n portuaria.)
          </p>
          <a
            href={buildWhatsappUrl('Hola, quiero solicitar cotizaciÃ³n ahora con disponibilidad real, vÃ­deo/fotos y transporte incluido.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-orange-600 px-7 py-4 font-bold tracking-wide hover:bg-orange-500 transition-colors"
          >
            SOLICITAR COTIZACIÃ“N AHORA
          </a>
        </section>
      </div>

      <a
        href={buildWhatsappUrl('Hola, quiero consultar disponibilidad real de contenedores en puerto y opciones de entrega.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold shadow-xl hover:bg-orange-500 transition-colors"
      >
        CONSULTAR DISPONIBILIDAD REAL
      </a>
    </section>
  );
};
