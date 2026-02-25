export interface StudioRoute {
  title: string;
  category: string;
  price: string;
  heroImage: string;
  description: string;
  seoText: string[];
  highlights: string[];
  gallery: string[];
}

export const STUDIO_ROUTES: Record<string, StudioRoute> = {
  '/estudio/residencia-minimalista-contenedor': {
    title: 'Residencia Minimalista X1 en Contenedor',
    category: 'Vivienda modular',
    price: 'Proyecto a medida',
    heroImage: '/casacontenedor-plano-40pies-highcube.webp',
    description:
      'Vivienda modular premium de inspiración minimalista fabricada a partir de módulos marítimos preparados para uso residencial en España.',
    seoText: [
      'La Residencia Minimalista X1 está diseñada para clientes que buscan una casa contenedor moderna, eficiente y con acabados de alta gama. Se plantea como una solución arquitectónica flexible para primera residencia, segunda vivienda o activo turístico de alta ocupación.',
      'Cada proyecto se adapta a la parcela, normativa urbanística y necesidades energéticas del cliente. Integramos aislamiento reforzado, carpintería exterior de altas prestaciones y distribuciones interiores optimizadas para confort térmico durante todo el año.',
      'Si estás comparando precio de vivienda modular en contenedor en España, este modelo ofrece equilibrio entre diseño, velocidad de ejecución y control de costes en obra.'
    ],
    highlights: ['Diseño modular escalable', 'Aislamiento térmico reforzado', 'Grandes ventanales', 'Entrega llave en mano opcional'],
    gallery: ['/3contenedores-evergreen-20pies-usado.webp', '/instalacióncontenedores-20pies-usado.webp', '/contenedor-nuevo-20pies-interior.webp'],
  },
  '/estudio/bar-lounge-contenedor-eventos': {
    title: 'The Box Bar & Lounge para eventos',
    category: 'Espacio comercial',
    price: 'Desde 18.900€',
    heroImage: '/montañacontenedores.webp',
    description:
      'Espacio comercial en contenedor orientado a hostelería, pop-ups de marca y eventos itinerantes con alta visibilidad.',
    seoText: [
      'El modelo Bar & Lounge está pensado para negocios que quieren destacar con una imagen industrial premium. Su diseño favorece el flujo de clientes y la versatilidad en eventos privados, festivales y ferias.',
      'Configuramos aperturas frontales y laterales, barras técnicas, zonas de servicio y preparación para instalaciones eléctricas y de climatización según actividad.',
      'Es una opción ideal para quien busca un bar en contenedor con estética impactante, plazos de fabricación optimizados y estructura resistente para uso intensivo.'
    ],
    highlights: ['Formato pop-up', 'Aperturas comerciales', 'Preparación eléctrica', 'Acabados personalizables'],
    gallery: ['/3contenedores-20pies-usado.webp', '/descargacontenedores-20pies-usado.webp', '/puertacontenedor-40pies-nuevo.webp'],
  },
  '/estudio/piscina-infinity-box-contenedor': {
    title: 'Piscina Infinity Box de contenedor',
    category: 'Solución lúdica exterior',
    price: 'Desde 14.500€',
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
    price: 'Desde 9900€',
    heroImage: '/contenedorabierto-real-20pies-nuevo.webp',
    description:
      'Gimnasio modular compacto sobre contenedor de 20 pies, con ventanal frontal de aluminio, ventilación propia y máxima entrada de luz natural.',
    seoText: [
      'Este gimnasio en contenedor de 20 pies está orientado a entrenamientos funcionales, espacios wellness en hoteles, clubes deportivos y centros privados con limitación de superficie.',
      'La configuración incorpora apertura frontal acristalada, ventilación propia y distribución interior optimizada para aprovechar cada metro útil sin perder comodidad de uso.',
      'Para proyectos que buscan un gimnasio modular económico, este formato permite empezar desde 9900€ con posibilidad de ampliaciones, branding y equipamiento personalizado.'
    ],
    highlights: ['Contenedor marítimo de 20 pies', 'Ventanal de aluminio frontal', 'Ventilación integrada', 'Interior muy luminoso'],
    gallery: ['/contenedorabierto-real-20pies-nuevo.webp', '/contenedorabierto-20pies-nuevo.webp', '/contenedor-nuevo-20pies-interior.webp'],
  },
};
