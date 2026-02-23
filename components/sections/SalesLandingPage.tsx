import React, { useEffect } from 'react';

const SEO_TITLE = 'Venta de Contenedores Marítimos en España | 20 y 40 Pies - Nuevos y Usados';
const SEO_DESCRIPTION =
  'Compra directa de contenedores marítimos en España con inspección técnica propia, vídeo real de unidad y entrega estimada en 5 días. Precios orientativos y transporte gestionado.';
const CANONICAL_PATH = '/venta-contenedores-maritimos-espana';

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

export const SalesLandingPage: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const previousCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';

    document.title = SEO_TITLE;
    upsertMeta('description', SEO_DESCRIPTION);
    upsertCanonical(`${window.location.origin}${CANONICAL_PATH}`);

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
          <h1 id="landing-main-title" className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-5">
            Venta de Contenedores Marítimos en España | 20 y 40 Pies - Nuevos y Usados
          </h1>
          <p className="text-xl text-orange-400 font-semibold mb-6">
            Compra directa, inspección técnica propia y entrega estimada en 5 días.
          </p>
          <p className="text-zinc-300 max-w-4xl mb-6">
            Si busca comprar un contenedor marítimo en España con garantía real de estado y sin intermediarios invisibles,
            trabajamos con operativa directa en puerto y verificación física antes de cada entrega.
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-zinc-200 mb-6">
            <li>✔ Compra directa sin brokers</li>
            <li>✔ Inspección estructural propia antes de salida</li>
            <li>✔ Vídeo real de la unidad seleccionada</li>
            <li>✔ Entrega estimada en 5 días desde la confirmación del 50% (sujeta a ubicación y accesos)</li>
            <li>✔ Transporte gestionado en toda España</li>
          </ul>
          <p className="text-zinc-300 mb-3">
            En un sector donde abundan fotos genéricas y reventas sin control, nosotros verificamos cada unidad físicamente antes de enviarla.
          </p>
          <p className="text-orange-300 font-semibold mb-8">Las unidades First Trip son limitadas y rotan semanalmente en puerto.</p>
          <a
            href="#cotizacion"
            className="inline-flex rounded-xl bg-orange-600 px-7 py-4 font-bold tracking-wide hover:bg-orange-500 transition-colors"
          >
            CONSULTAR DISPONIBILIDAD REAL
          </a>
        </header>

        <section id="precios" className="mb-14">
          <h2 className="text-3xl font-black mb-4">¿Cuánto cuesta un contenedor marítimo?</h2>
          <p className="text-zinc-300 mb-4">
            El precio depende de: medidas, estado (Usado Grado A / B o First Trip), puerto de salida y distancia de transporte.
            Las tarifas varían según rotación de stock portuario.
          </p>
          <h3 className="text-xl font-bold mb-3">Precios orientativos (desde):</h3>
          <ul className="space-y-2 text-zinc-200 mb-5">
            <li>• Contenedor 20 pies usado Grado A: desde 1.600 €</li>
            <li>• Contenedor 40 pies usado Grado A: desde 1.900 €</li>
            <li>• Contenedor 40 pies High Cube First Trip: desde 2.800 €</li>
            <li>• Contenedor 20 pies First Trip: desde 2.000 €</li>
          </ul>
          <p className="text-zinc-300 mb-5">Solicite precio actualizado con transporte incluido y sin costes ocultos.</p>
          <a href="#cotizacion" className="inline-flex text-orange-400 font-semibold hover:text-orange-300 transition-colors">
            RECIBIR PRESUPUESTO CERRADO →
          </a>
        </section>

        <section id="errores" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Evite errores comunes al comprar un contenedor marítimo</h2>
          <h3 className="text-xl font-bold mb-3">Nuestra diferencia</h3>
          <ul className="space-y-2 text-zinc-200 mb-4">
            <li>✔ Inspección visual y estructural propia antes del envío</li>
            <li>✔ Vídeo real de la unidad concreta</li>
            <li>✔ Presupuesto cerrado con transporte incluido</li>
            <li>✔ Asesoramiento previo sobre accesos y descarga</li>
            <li>✔ Operativa directa con puertos y terminales logísticas</li>
          </ul>
          <p className="text-zinc-100 font-semibold">No vendemos contenedores sobre papel. Entregamos unidades verificadas.</p>
        </section>

        <section id="comparativa" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Contenedores Usados vs First Trip – Comparativa Clara</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="p-3">Característica</th>
                  <th className="p-3">Usado Grado A</th>
                  <th className="p-3">First Trip</th>
                </tr>
              </thead>
              <tbody className="bg-zinc-950">
                <tr className="border-t border-zinc-800"><td className="p-3">Estado estructural</td><td className="p-3">Íntegro y estanco</td><td className="p-3">Prácticamente nuevo</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Estética</td><td className="p-3">Puede tener marcas externas</td><td className="p-3">Superficie limpia</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Suelo</td><td className="p-3">Funcional y resistente</td><td className="p-3">Perfecto estado</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Ideal para</td><td className="p-3">Almacenaje y logística</td><td className="p-3">Vivienda y proyectos premium</td></tr>
                <tr className="border-t border-zinc-800"><td className="p-3">Precio</td><td className="p-3">Más económico</td><td className="p-3">Inversión superior</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-zinc-200 font-semibold">No trabajamos con unidades estructuralmente comprometidas.</p>
        </section>

        <section id="resistencia" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Resistencia Estructural Real</h2>
          <p className="text-zinc-300 mb-3">
            Un contenedor marítimo no es una caseta prefabricada. Está diseñado para apilamiento marítimo, transporte extremo
            y cargas elevadas en entornos salinos. Fabricado en acero Corten anticorrosión; pensado para décadas de uso real.
          </p>
          <p className="text-sm text-zinc-400">Consulte fichas por modelo para datos de carga y apilamiento.</p>
        </section>

        <section id="usos" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Usos recomendados</h2>
          <ul className="space-y-2 text-zinc-200 mb-5">
            <li>• Almacenaje industrial</li>
            <li>• Protección de maquinaria</li>
            <li>• Vivienda modular y oficinas</li>
            <li>• Piscinas estructurales</li>
            <li>• Pop-up stores comerciales</li>
          </ul>
          <p className="text-orange-300 font-semibold">
            No es sólo almacenamiento. Es la estructura que puede arrancar su vivienda, oficina o negocio en semanas.
          </p>
        </section>

        <section id="especificaciones" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Especificaciones Técnicas</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-zinc-200">
            <li><strong>Material:</strong> Acero Corten anticorrosión</li>
            <li><strong>Certificación:</strong> Placa CSC válida</li>
            <li><strong>Medidas estándar:</strong> 20 pies (6 m) / 40 pies HC (12 m)</li>
            <li><strong>Puertas:</strong> Doble hoja con cierre de seguridad</li>
            <li><strong>Estanqueidad:</strong> Protegido frente a lluvia y viento</li>
            <li><strong>Vida útil estimada:</strong> &gt;25 años (con mantenimiento básico)</li>
          </ul>
        </section>

        <section id="entrega" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Entrega y Logística</h2>
          <p className="text-zinc-300">
            Gestionamos el proceso completo: transporte en camión portacontenedores o grúa, coordinación logística y asesoramiento
            sobre accesos. Entrega habitual 3–10 días; estimada en 5 días tras pago del 50% (sujeta a ubicación y permisos).
            Antes del envío, vídeo real de la unidad.
          </p>
        </section>

        <section id="garantia" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Garantía y Compromiso</h2>
          <ul className="space-y-2 text-zinc-200">
            <li>✔ Unidad estructuralmente íntegra</li>
            <li>✔ Estanqueidad comprobada</li>
            <li>✔ Correspondencia entre presupuesto y entrega</li>
            <li>✔ Transparencia total en estado y precio</li>
          </ul>
        </section>

        <section id="faqs-extra" className="mb-14">
          <h2 className="text-3xl font-black mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">¿Puedo instalar un contenedor en suelo rústico?</h3>
              <p className="text-zinc-300">Dependerá de la normativa autonómica y municipal. Ofrecemos asesoramiento previo para su caso.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">¿Cuánto cuesta la descarga con grúa?</h3>
              <p className="text-zinc-300">Depende de accesos y maniobra. Se incorpora desglosado en el presupuesto.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">¿Qué documentación acompaña al contenedor?</h3>
              <p className="text-zinc-300">Placa CSC, certificado de inspección y registro de fotos/vídeo pre-entrega.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/40">
              <h3 className="font-bold mb-2">¿Qué plazo de reclamación tengo tras la entrega?</h3>
              <p className="text-zinc-300">Recomendado: 48–72 horas para notificar incidencias con evidencia visual.</p>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="rounded-2xl border border-orange-500/40 bg-orange-500/10 p-8">
          <h2 className="text-3xl font-black mb-4">Solicitar cotización ahora</h2>
          <p className="text-zinc-100 mb-6">
            Reciba disponibilidad real en puerto, fotografías o vídeo de la unidad, precio cerrado con transporte incluido
            y asesoramiento técnico previo. (Stock sujeto a rotación portuaria.)
          </p>
          <a
            href="/#quote"
            className="inline-flex rounded-xl bg-orange-600 px-7 py-4 font-bold tracking-wide hover:bg-orange-500 transition-colors"
          >
            SOLICITAR COTIZACIÓN AHORA
          </a>
        </section>
      </div>

      <a
        href="#cotizacion"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold shadow-xl hover:bg-orange-500 transition-colors"
      >
        CONSULTAR DISPONIBILIDAD REAL
      </a>
    </section>
  );
};
