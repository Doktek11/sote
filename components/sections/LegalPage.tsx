import React, { useEffect } from 'react';

const SEO_TITLE = 'Política de Privacidad y Aviso Legal | The Box Container Design';
const SEO_DESCRIPTION =
  'Consulta la Política de Privacidad y el Aviso Legal de The Box Container Design conforme al RGPD, LOPDGDD y LSSI-CE.';
const CANONICAL_PATH = '/legal';

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

const SectionTitle: React.FC<{ id?: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-black mt-12 mb-4 text-white">
    {children}
  </h2>
);

export const LegalPage: React.FC = () => {
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
      if (previousCanonical) upsertCanonical(previousCanonical);
    };
  }, []);

  useEffect(() => {
    const scrollToHashSection = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    scrollToHashSection();
    const timeoutId = window.setTimeout(scrollToHashSection, 120);
    window.addEventListener('hashchange', scrollToHashSection);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('hashchange', scrollToHashSection);
    };
  }, []);

  return (
    <section className="bg-zinc-950 text-zinc-200" aria-labelledby="legal-main-title">
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-5xl">
        <h1 id="legal-main-title" className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          Política de Privacidad y Aviso Legal
        </h1>
        <p className="text-zinc-400 mb-10">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

        <SectionTitle id="privacidad">Política de Privacidad</SectionTitle>
        <p className="mb-4">En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD), se informa al usuario de lo siguiente:</p>

        <h3 className="font-bold text-white mt-6 mb-2">1. Responsable del Tratamiento</h3>
        <ul className="space-y-1">
          <li><strong>Identidad:</strong> Andrés De Eguía Haazer</li>
          <li><strong>Nombre comercial:</strong> The Box Container Design</li>
          <li><strong>CIF:</strong> C-39923029</li>
          <li><strong>Dirección:</strong> Avinguda del Comerç s/n, Cambrils, España</li>
          <li><strong>Correo electrónico:</strong> info@theboxcontainerdesign.com</li>
          <li><strong>Teléfono:</strong> +34 657 348 078</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">2. Datos que recopilamos</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Nombre y apellidos</li>
          <li>Teléfono</li>
          <li>Dirección de correo electrónico</li>
          <li>Dirección o ubicación de entrega</li>
          <li>Información relativa a su proyecto (uso previsto, medidas, presupuesto estimado)</li>
          <li>Datos de facturación, cuando exista relación contractual</li>
        </ul>
        <p className="mt-2">Los datos solicitados en formularios marcados con * serán obligatorios para atender su solicitud.</p>

        <h3 className="font-bold text-white mt-6 mb-2">3. Finalidad del tratamiento</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Atender solicitudes de información o presupuesto.</li>
          <li>Gestionar la relación comercial y contractual.</li>
          <li>Coordinar transporte y entrega de contenedores.</li>
          <li>Emitir facturación y cumplir obligaciones fiscales.</li>
          <li>Enviar comunicaciones comerciales, cuando exista consentimiento previo.</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">4. Base jurídica</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Consentimiento del interesado.</li>
          <li>Ejecución de contrato o precontrato.</li>
          <li>Cumplimiento de obligaciones legales aplicables.</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">5. Conservación de los datos</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Mientras se mantenga la relación comercial.</li>
          <li>Plazos fiscales y contables exigidos por ley (generalmente entre 4 y 6 años).</li>
          <li>Hasta solicitud de supresión, cuando proceda.</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">6. Destinatarios de los datos</h3>
        <p>Sus datos no se venden ni ceden a terceros salvo obligación legal o necesidad del servicio, como:</p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Empresas de transporte y logística.</li>
          <li>Asesoría fiscal y contable.</li>
          <li>Proveedores tecnológicos (hosting, correo, gestión).</li>
        </ul>
        <p className="mt-2">Si se usan herramientas fuera del EEE, se aplicarán garantías adecuadas según RGPD.</p>

        <h3 className="font-bold text-white mt-6 mb-2">7. Medidas de seguridad</h3>
        <p>The Box Container Design aplica medidas técnicas y organizativas para evitar accesos no autorizados, pérdida o alteración de datos.</p>
        <p className="mt-2">Nunca solicitaremos pagos ni datos sensibles por canales no oficiales. Ante dudas, verifique en el +34 657 348 078.</p>

        <h3 className="font-bold text-white mt-6 mb-2">8. Derechos del usuario</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Acceso, rectificación, supresión, oposición y limitación.</li>
          <li>Portabilidad de los datos cuando sea aplicable.</li>
        </ul>
        <p className="mt-2">Puede ejercerlos escribiendo a <strong>info@theboxcontainerdesign.com</strong>.</p>
        <p className="mt-2">También puede reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>

        <h3 id="cookies" className="font-bold text-white mt-6 mb-2">9. Política de Cookies</h3>
        <p>Este sitio utiliza cookies técnicas y, en su caso, analíticas. Consulte la política de cookies para más detalle.</p>

        <h3 className="font-bold text-white mt-6 mb-2">10. Cambios en la Política</h3>
        <p>The Box Container Design podrá modificar esta política para adaptarla a cambios legales o de actividad.</p>

        <SectionTitle id="aviso-legal">Aviso Legal</SectionTitle>
        <p className="mb-4">En cumplimiento del artículo 10 de la LSSI-CE, se informa de los datos identificativos del titular del sitio web:</p>

        <h3 className="font-bold text-white mt-6 mb-2">1. Datos Identificativos</h3>
        <ul className="space-y-1">
          <li><strong>Titular:</strong> Andrés De Eguía Haazer</li>
          <li><strong>Nombre comercial:</strong> The Box Container Design</li>
          <li><strong>NIF:</strong> 39923023C</li>
          <li><strong>Domicilio fiscal:</strong> Avinguda del Comerç s/n, 43206 Reus, Tarragona, España</li>
          <li><strong>Teléfono:</strong> +34 657 348 078</li>
          <li><strong>Correo electrónico:</strong> info@theboxcontainerdesign.com</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">2. Objeto y Condiciones de Uso</h3>
        <p>Este sitio ofrece información y servicios relacionados con la comercialización de contenedores marítimos y servicios asociados.</p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>Uso lícito y adecuado del sitio y contenidos.</li>
          <li>No realizar actividades contrarias a la ley, buena fe u orden público.</li>
          <li>No introducir malware ni elementos dañinos.</li>
          <li>No acceder a áreas restringidas sin autorización.</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">3. Propiedad Intelectual e Industrial</h3>
        <p>Los contenidos del sitio (textos, imágenes, diseños, logotipos, estructura y código) son titularidad de The Box Container Design o cuentan con licencia. Queda prohibida su explotación sin autorización expresa.</p>

        <h3 className="font-bold text-white mt-6 mb-2">4. Protección de Datos Personales</h3>
        <p>El tratamiento de datos personales se rige por el RGPD y la LOPDGDD. Consulte la sección de Política de Privacidad para información detallada sobre finalidades, base jurídica, conservación, cesiones y derechos.</p>

        <h3 className="font-bold text-white mt-6 mb-2">5. Política de Seguridad y Prevención de Fraude</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>No se solicitarán pagos sin factura o proforma oficial vinculada al NIF 39923023C.</li>
          <li>Las comunicaciones oficiales se realizan desde direcciones corporativas.</li>
          <li>Se recomienda verificar operaciones por teléfono oficial.</li>
        </ul>

        <h3 className="font-bold text-white mt-6 mb-2">6. Exclusión de Responsabilidad</h3>
        <p>El titular no garantiza disponibilidad permanente ni ausencia total de errores, aunque aplicará medidas correctoras cuando se detecten.</p>

        <h3 className="font-bold text-white mt-6 mb-2">7. Legislación y Jurisdicción</h3>
        <p>La relación con el usuario se rige por la legislación española. Para conflictos, las partes se someten a los Juzgados y Tribunales de Tarragona, salvo norma imperativa distinta.</p>
      </div>
    </section>
  );
};
