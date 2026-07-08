import { PATHS } from '../../site.config.mjs';

export interface StudioRoute {
  title: string;
  category: string;
  price: string;
  heroImage: string;
  description: string;
  sections?: {
    heading: string;
    level?: 2 | 3;
    body: string[];
    bullets?: string[];
  }[];
  seoText: string[];
  highlights: string[];
  gallery: string[];
}

export const STUDIO_ROUTES: Record<string, StudioRoute> = {
  [PATHS.studioResidence]: {
    title: 'Residencia Minimalista X1 en Contenedor',
    category: 'Vivienda modular',
    price: 'Proyecto a medida',
    heroImage: '/casacontenedor-40pies-disenofinal.webp',
    description:
      'Residencia Minimalista X1 es una casa contenedor moderna pensada para quienes buscan una vivienda modular en contenedor en España con diseño contemporáneo, eficiencia energética y acabados de alta gama. Esta propuesta de arquitectura con contenedores marítimos combina estética minimalista, rapidez de ejecución y control de costes, convirtiéndose en una solución versátil para vivienda habitual, segunda residencia o alquiler turístico.',
    sections: [
      {
        heading: 'Arquitectura modular personalizada',
        level: 2,
        body: [
          'Cada proyecto de casa contenedor se adapta de forma personalizada a la parcela, a la normativa urbanística y a las necesidades energéticas de cada cliente. Gracias a un sistema de construcción modular con contenedores, es posible reducir plazos de obra sin renunciar al confort, la calidad ni a una imagen arquitectónica actual.'
        ]
      },
      {
        heading: 'Eficiencia energética y confort',
        level: 2,
        body: [
          'Esta vivienda modular de contenedor incorpora aislamiento térmico reforzado, carpintería exterior de altas prestaciones y una distribución interior optimizada para mejorar la eficiencia energética durante todo el año. Su diseño aprovecha la luz natural, mejora el confort interior y refuerza la sensación de amplitud, características muy valoradas en una casa prefabricada en contenedor.'
        ]
      },
      {
        heading: 'Precio y propuesta de valor',
        level: 2,
        body: [
          'Si estás comparando el precio de una casa contenedor en España, la Residencia Minimalista X1 destaca por su equilibrio entre diseño, sostenibilidad, funcionalidad y coste. Es una alternativa innovadora frente a la construcción tradicional para quienes buscan una casa contenedor llave en mano, una vivienda modular sostenible o una solución residencial de rápida ejecución.'
        ]
      },
      {
        heading: 'Características destacadas',
        level: 3,
        body: [],
        bullets: [
          'Diseño modular escalable y personalizable',
          'Aislamiento térmico reforzado para mayor eficiencia energética',
          'Grandes ventanales con abundante luz natural',
          'Construcción rápida con contenedores marítimos',
          'Opción de entrega llave en mano',
          'Ideal como vivienda principal, segunda residencia o inversión turística'
        ]
      }
    ],
    seoText: [],
    highlights: ['Diseño modular escalable', 'Aislamiento térmico reforzado', 'Grandes ventanales', 'Entrega llave en mano opcional'],
    gallery: ['/casacontenedor-plano-40pies-highcube.webp', '/instalacióncontenedores-20pies-usado.webp', '/planocontenedor-40pies.webp'],
  },
  [PATHS.studioBar]: {
    title: 'The Box Bar & Lounge para eventos',
    category: 'Espacio comercial',
    price: 'Desde 18.900 €',
    heroImage: '/contenedorbar-20pies-nuevo.webp',
    description:
      'Espacio comercial en contenedor orientado a hostelería, pop-ups de marca y eventos itinerantes con alta visibilidad.',
    seoText: [
      'El modelo Bar & Lounge está pensado para negocios que quieren destacar con una imagen industrial premium. Su diseño favorece el flujo de clientes y la versatilidad en eventos privados, festivales y ferias.',
      'Configuramos aperturas frontales y laterales, barras técnicas, zonas de servicio y preparación para instalaciones eléctricas y de climatización según actividad.',
      'Es una opción ideal para quien busca un bar en contenedor con estética impactante, plazos de fabricación optimizados y estructura resistente para uso intensivo.'
    ],
    highlights: ['Formato pop-up', 'Aperturas comerciales', 'Preparación eléctrica', 'Acabados personalizables'],
    gallery: ['/contenedorbar-streetfood-20pies.webp', '/planocontenedor-bar-20pies.webp'],
  },
  [PATHS.studioPool]: {
    title: 'Piscina Infinity Box de contenedor',
    category: 'Solución lúdica exterior',
    price: 'Desde 14.500 €',
    heroImage: '/montañacontenedores2.webp',
    description:
      'Piscina fabricada sobre contenedor marítimo para viviendas, hoteles y espacios turísticos que necesitan instalación rápida y estética diferenciada.',
    seoText: [
      'La Infinity Box aprovecha la robustez del contenedor para crear una piscina compacta y visualmente potente. Es ideal para proyectos residenciales y hoteleros que necesitan una solución modular y fácil de implantar.',
      'Incluye opciones de acabados interiores, sistemas de depuración ocultos y elementos de seguridad adaptados al tipo de uso previsto.',
      'Si buscas una piscina contenedor en España con buena relación entre coste, durabilidad y diseño, esta alternativa permite reducir tiempos frente a obra tradicional.'
    ],
    highlights: ['Instalación rápida', 'Depuración integrada', 'Acabado premium opcional', 'Mantenimiento simplificado'],
    gallery: ['/contenedorabierto-20pies-nuevo.webp', '/interiorcontenedor-40pies-oneway.webp', '/contenedor2-40pies-nuevo.webp'],
  },
  [PATHS.studioGym]: {
    title: 'Gimnasio modular en contenedor de 20 pies',
    category: 'Fitness modular',
    price: 'Desde 13.625 € + IVA',
    heroImage: '/gym_20pies_tricarril.webp',
    description:
      'Gimnasio modular compacto fabricado sobre contenedor marítimo de 20 pies, preparado para entrenamiento funcional, wellness privado o espacio deportivo profesional con instalación rápida.',
    sections: [
      {
        heading: 'Espacio fitness listo para adaptar',
        level: 2,
        body: [
          'Este gimnasio modular de 20 pies convierte la estructura resistente de un contenedor marítimo en un espacio deportivo luminoso, aislado y de rápida implantación. Es una solución pensada para viviendas, hoteles, centros wellness, clubes deportivos o negocios que necesitan ampliar superficie sin una obra tradicional larga.',
          'La propuesta incorpora una fachada acristalada corredera, revestimiento interior limpio, pavimento cálido y zonas preparadas para equipamiento cardiovascular, pesas, entrenamiento funcional o yoga.'
        ]
      },
      {
        heading: 'Construcción y confort interior',
        level: 2,
        body: [
          'El sistema se plantea con aislamiento en paramentos y cubierta, acabado interior en panel blanco, iluminación empotrada y una envolvente exterior de acero con imagen industrial. El objetivo es ofrecer un espacio compacto pero profesional, con buena entrada de luz natural y una imagen cuidada para uso privado o comercial.'
        ],
        bullets: [
          'Contenedor marítimo de 20 pies transformado',
          'Fachada de vidrio corredera con perfilería negra',
          'Aislamiento en paredes y techo',
          'Acabado interior claro para mayor amplitud visual',
          'Pavimento efecto madera y zonas técnicas para entrenamiento',
          'Configuración adaptable según actividad y equipamiento'
        ]
      },
      {
        heading: 'Precio orientativo',
        level: 2,
        body: [
          'El precio parte desde 13.625 € + IVA para la configuración base del módulo. El importe final puede variar según transporte, ubicación, equipamiento deportivo, climatización, instalaciones y nivel de personalización.'
        ]
      }
    ],
    seoText: [],
    highlights: [
      'Desde 13.625 € + IVA',
      'Contenedor marítimo de 20 pies',
      'Fachada acristalada corredera',
      'Interior aislado y acabado',
      'Uso fitness, wellness o entrenamiento privado'
    ],
    gallery: [
      '/gym_20pies_tricarril_materiales.webp',
      '/gym_20pies_basico.webp',
      '/gym_20pies_basico_materiales.webp'
    ],
  },
};






