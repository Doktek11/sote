import React, { useEffect } from 'react';

const SEO_TITLE = 'Preguntas frecuentes sobre contenedores marítimos | The Box Container Design';
const SEO_DESCRIPTION =
  'FAQ – Compra segura de contenedores marítimos. Inspección propia, fotos y vídeo con número de serie, entrega estimada en 7 días laborables y asesoramiento en permisos y logística.';

const faqItems = [
  {
    question: '¿Cómo puedo saber que esta es una compra segura y no una estafa?',
    answer: [
      'Ofrecemos garantías verificables: visita presencial a nuestras campas logísticas; inspección estructural propia antes de autorizar la salida; contrato y factura legal con condiciones detalladas; atención directa por un experto; y envío de fotos y vídeo en tiempo real del contenedor exacto (con su número de serie).',
      'Si no puede desplazarse, le remitimos fotos y vídeo del contenedor seleccionado antes de su envío.',
    ],
    cta: { label: 'Solicitar vídeo', href: '/#quote' },
  },
  {
    question: '¿Qué documentación recibe con el contenedor?',
    answer: [
      'Placa CSC (cuando aplica).',
      'Informe o certificado de inspección propia.',
      'Registro fotográfico y vídeo pre-entrega.',
      'Factura y contrato con condiciones claras de venta y transporte.',
    ],
  },
  {
    question: '¿Qué diferencia hay entre un contenedor usado y uno First Trip?',
    answer: [
      'First Trip (One Way): unidad con un solo trayecto desde fábrica; estado prácticamente nuevo; recomendable para transformaciones (vivienda, oficina, espacios comerciales).',
      'Usado (Grado A): ha tenido servicio marítimo; puede presentar marcas estéticas; es estanco e íntegro estructuralmente; ideal para almacenaje y usos industriales.',
    ],
    cta: { label: 'Ver unidades disponibles', href: '/#logistica' },
  },
  {
    question: '¿Qué es un High Cube (HC) y cuándo lo necesito?',
    answer: [
      'Contenedor estándar ≈ 2,59 m de altura.',
      'High Cube ≈ 2,89 m (≈ +30 cm). Se recomienda para aislamiento con falso techo, instalaciones técnicas o mayor sensación de espacio en proyectos habitables.',
    ],
  },
  {
    question: '¿Cómo se transporta y descarga el contenedor?',
    answer: [
      'Camión portacontenedores (requiere equipo de descarga en destino).',
      'Camión grúa (pluma) (colocación directa si accesos y espacio lo permiten).',
      'En el presupuesto indicamos la opción recomendada según el acceso y condiciones del punto de entrega.',
    ],
    cta: { label: 'Solicitar presupuesto de transporte', href: '/#quote' },
  },
  {
    question: '¿Qué preparación necesita mi terreno?',
    answer: [
      'Superficie nivelada y estable.',
      'Puntos de apoyo (bloques de hormigón o solera) en las esquinas para elevarlo ligeramente y permitir ventilación inferior.',
      'Si lo desea, le enviamos una checklist PDF para valorar accesos y preparar la descarga.',
    ],
    cta: { label: 'Descargar checklist (PDF)', href: '/#quote' },
  },
  {
    question: '¿Cuánto cuesta la descarga con grúa?',
    answer: [
      'El coste varía según ubicación y accesos; se incluye como línea separada en el presupuesto.',
      'Podemos ofrecer una tarifa orientativa al facilitar la dirección exacta y fotos del acceso.',
    ],
  },
  {
    question: '¿Cuáles son los plazos de entrega?',
    answer: [
      'Entrega estimada en 7 días laborables desde la confirmación del pago del 50% (sujeta a disponibilidad en puerto, accesos en destino y permisos necesarios).',
      'En el presupuesto se indicará siempre la fecha estimada concreta de entrega.',
      'Los plazos pueden verse afectados por operaciones portuarias o condiciones extraordinarias; en ese caso se informará al cliente.',
    ],
  },
  {
    question: '¿Necesito permiso de obra para instalar un contenedor?',
    answer: [
      'Depende del uso y del municipio.',
      'Almacenaje temporal: suele considerarse elemento móvil.',
      'Vivienda o actividad fija: normalmente requiere proyecto técnico y licencia de obra.',
      'Ofrecemos asesoramiento inicial gratuito y orientación sobre los trámites municipales para que pueda consultar correctamente en su ayuntamiento.',
    ],
    cta: { label: 'Solicitar asesoramiento sobre permisos', href: '/#quote' },
  },
  {
    question: '¿Se puede colocar un contenedor en suelo rústico?',
    answer: [
      'La normativa varía según comunidad autónoma y planeamiento local.',
      'Podemos orientarle caso por caso y, si lo desea, facilitar contacto con técnicos especializados en su zona.',
    ],
  },
  {
    question: '¿Cuánto dura un contenedor marítimo?',
    answer: [
      'Construidos en acero Corten y con mantenimiento básico (repaso de pintura y engrase de cierres), pueden durar varias décadas.',
      'La vida útil depende del uso y del entorno; cada unidad se valora individualmente en la inspección técnica.',
    ],
  },
  {
    question: '¿Qué comprobaciones realizamos antes de enviar una unidad?',
    answer: [
      'Revisión estructural visible (marcos, vigas, esquinas y puertas).',
      'Comprobación de estanqueidad (juntas y cierres).',
      'Verificación del suelo y del estado interior.',
      'Registro fotográfico y vídeo con número de serie para su aprobación previa.',
    ],
    cta: { label: 'Solicitar fotos y vídeo de inspección', href: '/#quote' },
  },
  {
    question: '¿Cuánto tiempo tengo para aceptar o reclamar la unidad entregada?',
    answer: [
      'Las incidencias deben notificarse en un plazo de 48–72 horas desde la entrega.',
      'Para tramitar una reclamación deberá enviarse: número de pedido o referencia; fotografías claras de la incidencia; y descripción detallada del problema.',
      'Nuestro equipo técnico analizará el caso y responderá con la solución correspondiente.',
    ],
  },
];

const upsertMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

export const FaqSection: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';

    document.title = SEO_TITLE;
    upsertMeta('description', SEO_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      upsertMeta('description', previousDescription);
    };
  }, []);

  return (
    <section className="bg-zinc-950 py-24 border-y border-zinc-900" aria-labelledby="faq-main-title">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-orange-500 mb-4">Centro de Ayuda</p>
        <h1 id="faq-main-title" className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          Preguntas frecuentes sobre contenedores marítimos
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-200 mb-6">Compra, logística, normativa y seguridad</h2>
        <p className="text-zinc-300 max-w-3xl mb-12">
          En The Box Container Design creemos que la transparencia es la base de cualquier gran proyecto.
          Aquí encontrará respuestas claras y prácticas sobre adquisición, logística, normativa y seguridad en la compra de contenedores marítimos.
        </p>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold text-white flex items-center justify-between gap-4">
                <h3>{item.question}</h3>
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="mt-4 space-y-3 text-zinc-300">
                {item.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {item.cta && (
                  <a
                    href={item.cta.href}
                    className="inline-flex mt-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {item.cta.label} →
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-orange-500/30 bg-orange-500/5">
          <h2 className="text-2xl font-extrabold mb-3">¿No encuentra su pregunta?</h2>
          <p className="text-zinc-300 mb-4">
            Solicite asesoramiento técnico sin compromiso. Le orientamos según su proyecto
            (almacenaje, transformación, normativa municipal y acceso de descarga).
          </p>
          <a
            href="/#quote"
            className="inline-flex items-center rounded-lg bg-orange-600 px-5 py-3 font-semibold hover:bg-orange-500 transition-colors"
          >
            Contactar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
};
