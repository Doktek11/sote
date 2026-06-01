export interface StudioRoute {
  title: string;
  category: string;
  price: string;
  heroImage: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  sections?: {
    heading: string;
    level?: 2 | 3;
    body: string[];
    bullets?: string[];
  }[];
  schemaLd?: Record<string, unknown>;
  seoText: string[];
  highlights: string[];
  gallery: string[];
}

export const STUDIO_ROUTES: Record<string, StudioRoute> = {
  '/estudio/residencia-minimalista-contenedor': {
    title: 'Residencia Minimalista X1 en Contenedor',
    category: 'Vivienda modular',
    price: 'Proyecto a medida',
    heroImage: '/casacontenedor-40pies-disenofinal.webp',
    description:
      'Residencia Minimalista X1 es una casa contenedor moderna pensada para quienes buscan una vivienda modular en contenedor en España con diseño contemporáneo, eficiencia energética y acabados de alta gama. Esta propuesta de arquitectura con contenedores marítimos combina estética minimalista, rapidez de ejecución y control de costes, convirtiéndose en una solución versátil para vivienda habitual, segunda residencia o alquiler turístico.',
    seoTitle: 'Residencia Minimalista X1 | Casa contenedor en España | The Box',
    seoDescription:
      'Casa contenedor moderna en España con diseño contemporáneo, eficiencia energética y acabados premium. Proyecto modular a medida.',
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
    schemaLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Residencia Minimalista X1',
      description:
        'Residencia Minimalista X1 es una casa contenedor moderna pensada para quienes buscan una vivienda modular en contenedor en España con diseño contemporáneo, eficiencia energética y acabados de alta gama.',
      serviceType: 'Vivienda modular en contenedor',
      areaServed: 'ES',
      provider: {
        '@type': 'Organization',
        name: 'The Box Container Design',
        url: 'https://theboxcontainerdesign.com'
      },
      image: 'https://theboxcontainerdesign.com/casacontenedor-40pies-disenofinal.webp',
      url: 'https://theboxcontainerdesign.com/estudio/residencia-minimalista-contenedor'
    },
    seoText: [],
    highlights: ['Diseño modular escalable', 'Aislamiento térmico reforzado', 'Grandes ventanales', 'Entrega llave en mano opcional'],
    gallery: ['/casacontenedor-plano-40pies-highcube.webp', '/instalacióncontenedores-20pies-usado.webp', '/planocontenedor-40pies.webp'],
  },
  '/estudio/bar-lounge-contenedor-eventos': {
    title: 'The Box Bar & Lounge para eventos',
    category: 'Espacio comercial',
    price: 'Desde 18.900 €',
    heroImage: '/contenedorbar-20pies-nuevo.webp',
    description:
      'Espacio comercial en contenedor orientado a hostelería, pop-ups de marca y eventos itinerantes con alta visibilidad.',
    seoTitle: 'Bar & Lounge en contenedor | Espacio comercial | The Box',
    seoDescription:
      'Espacio comercial en contenedor para hostelería y eventos. Desde 18.900 €, personalizable y entrega en España.',
    seoText: [
      'El modelo Bar & Lounge está pensado para negocios que quieren destacar con una imagen industrial premium. Su diseño favorece el flujo de clientes y la versatilidad en eventos privados, festivales y ferias.',
      'Configuramos aperturas frontales y laterales, barras técnicas, zonas de servicio y preparación para instalaciones eléctricas y de climatización según actividad.',
      'Es una opción ideal para quien busca un bar en contenedor con estética impactante, plazos de fabricación optimizados y estructura resistente para uso intensivo.'
    ],
    highlights: ['Formato pop-up', 'Aperturas comerciales', 'Preparación eléctrica', 'Acabados personalizables'],
    gallery: ['/contenedorbar-streetfood-20pies.webp', '/planocontenedor-bar-20pies.webp'],
  },
  '/estudio/piscina-infinity-box-contenedor': {
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
  '/estudio/gimnasio-contenedor-20-pies': {
    title: 'Gimnasio en contenedor de 20 pies',
    category: 'Fitness modular',
    price: 'Desde 9.900 €',
    heroImage: '/contenedorabierto-real-20pies-nuevo.webp',
    description:
      'Gimnasio modular compacto sobre contenedor de 20 pies, con ventanal frontal de aluminio, ventilación propia y máxima entrada de luz natural.',
    seoText: [
      'Este gimnasio en contenedor de 20 pies está orientado a entrenamientos funcionales, espacios wellness en hoteles, clubes deportivos y centros privados con limitación de superficie.',
      'La configuración incorpora apertura frontal acristalada, ventilación propia y distribución interior optimizada para aprovechar cada metro útil sin perder comodidad de uso.',
      'Para proyectos que buscan un gimnasio modular económico, este formato permite empezar desde 9.900 € con posibilidad de ampliaciones, branding y equipamiento personalizado.'
    ],
    highlights: ['Contenedor marítimo de 20 pies', 'Ventanal de aluminio frontal', 'Ventilación integrada', 'Interior muy luminoso'],
    gallery: ['/contenedorabierto-real-20pies-nuevo.webp', '/contenedorabierto-20pies-nuevo.webp', '/contenedor-nuevo-20pies-interior.webp'],
  },
};






