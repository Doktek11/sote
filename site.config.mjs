export const SITE = {
  url: 'https://www.theboxcontainerdesign.com',
  name: 'THE BOX CONTAINER DESIGN',
  displayName: 'The Box Container Design',
  legalName: 'Andrés De Eguía Haazer',
  taxID: '39923029C',
  legalLastUpdated: '2026-07-08',
  legalLastUpdatedLabel: '8 de julio de 2026',
  language: 'es',
  description:
    'Venta y transformación de contenedores marítimos en España. Vivienda modular, espacios comerciales y proyectos técnicos con asesoría e ingeniería.',
  email: 'info@theboxcontainerdesign.com',
  telephone: '+34 657 348 078',
  logo: '/logo-theboxcontainerdesign4.svg',
  instagram: 'https://www.instagram.com/box_container_design',
  editorialPath: '/equipo-editorial',
  location: 'Reus, Tarragona, España',
  address: {
    streetAddress: 'Avinguda del Comerç s/n',
    postalCode: '43206',
    addressLocality: 'Reus',
    addressRegion: 'Tarragona',
    addressCountry: 'ES',
  },
  areaServed: 'ES',
  knowsAbout: [
    'Venta de contenedores marítimos',
    'Transformación de contenedores marítimos',
    'Arquitectura modular',
    'Viviendas modulares',
    'Logística y transporte de contenedores',
  ],
};

export const PATHS = Object.freeze({
  home: '/',
  sales: '/venta-contenedores-maritimos-espana',
  portfolio: '/portfolio-contenedores-casa',
  studioResidence: '/estudio/residencia-minimalista-contenedor',
  studioBar: '/estudio/bar-lounge-contenedor-eventos',
  studioPool: '/estudio/piscina-infinity-box-contenedor',
  studioGym: '/estudio/gimnasio-contenedor-20-pies',
  blog: '/blog',
  editorial: '/equipo-editorial',
  articleScams: '/blog/como-evitar-estafas-al-comprar-un-contenedor-maritimo-2026',
  articleCatalunya: '/blog/catalunya-venta-contenedores-maritimos-medidas-tipos-guia-precios-2026',
  articleContainerHouse: '/blog/casa-contenedor-espana-guia',
  faq: '/preguntas-frecuentes',
  legal: '/legal',
});

export const ROUTES = [
  {
    path: '/',
    title: 'Contenedores marítimos en España | Venta y Transformación | The Box',
    description: SITE.description,
    changefreq: 'weekly',
    priority: '1.0',
    llmsSection: 'Principal',
    llmsDescription: 'Presentación de la empresa, catálogo y servicios principales.',
  },
  {
    path: '/venta-contenedores-maritimos-espana',
    title: 'Venta de contenedores marítimos en España (20 y 40 pies) | The Box',
    description:
      'Stock real en puerto, inspección propia y vídeo de la unidad. Entrega 3-10 días y presupuesto cerrado con transporte incluido.',
    changefreq: 'weekly',
    priority: '0.9',
    llmsSection: 'Servicios',
    llmsDescription: 'Venta, inspección, disponibilidad y transporte de contenedores.',
    commercial: {
      kind: 'service',
      name: 'Venta de contenedores marítimos en España',
      serviceType: 'Venta, inspección y logística de contenedores marítimos',
      image: '/3contenedores-20pies-usado.webp',
      catalog: {
        name: 'Precios orientativos de contenedores marítimos',
        offers: [
          {
            name: 'Contenedor 20 pies usado Grado A',
            description: 'Precio orientativo desde 1.600 EUR, sujeto a ubicación y stock.',
            price: 1600,
          },
          {
            name: 'Contenedor 40 pies usado Grado A',
            description: 'Precio orientativo desde 1.900 EUR, sujeto a ubicación y stock.',
            price: 1900,
          },
          {
            name: 'Contenedor 40 pies High Cube First Trip',
            description: 'Precio orientativo desde 2.800 EUR, sujeto a ubicación y stock.',
            price: 2800,
          },
          {
            name: 'Contenedor 20 pies First Trip',
            description: 'Precio orientativo desde 2.000 EUR, sujeto a ubicación y stock.',
            price: 2000,
          },
        ],
      },
    },
  },
  {
    path: '/portfolio-contenedores-casa',
    title: 'Portfolio de contenedores casa | Diseños y transformaciones | The Box',
    description:
      'Descubre nuestro portfolio de contenedores casa: vivienda modular, bar lounge, piscina y gimnasio en contenedor con enfoque técnico y diseño funcional.',
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Proyectos',
    llmsDescription: 'Selección de viviendas y espacios modulares desarrollados en contenedores.',
    pageType: 'CollectionPage',
    collection: {
      name: 'Portfolio de contenedores transformados',
      items: [
        {
          name: 'Residencia Minimalista X1',
          path: '/estudio/residencia-minimalista-contenedor',
        },
        {
          name: 'The Box Bar & Lounge',
          path: '/estudio/bar-lounge-contenedor-eventos',
        },
        {
          name: 'Gimnasio modular en contenedor de 20 pies',
          path: '/estudio/gimnasio-contenedor-20-pies',
        },
      ],
    },
  },
  {
    path: '/estudio/residencia-minimalista-contenedor',
    title: 'Residencia Minimalista X1 | Casa contenedor en España | The Box',
    description:
      'Casa contenedor moderna en España con diseño contemporáneo, eficiencia energética y acabados premium. Proyecto modular a medida.',
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Proyectos',
    llmsDescription: 'Servicio de diseño de vivienda modular personalizada en contenedor.',
    commercial: {
      kind: 'service',
      name: 'Residencia Minimalista X1',
      serviceType: 'Diseño y construcción de vivienda modular en contenedor',
      image: '/casacontenedor-40pies-disenofinal.webp',
    },
  },
  {
    path: '/estudio/bar-lounge-contenedor-eventos',
    title: 'Bar & Lounge en contenedor | Espacio comercial | The Box',
    description:
      'Espacio comercial en contenedor para hostelería y eventos. Desde 18.900 EUR, personalizable y entrega en España.',
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Proyectos',
    llmsDescription: 'Espacio comercial modular para hostelería, eventos y acciones de marca.',
    commercial: {
      kind: 'service',
      name: 'The Box Bar & Lounge para eventos',
      serviceType: 'Diseño y transformación de espacio comercial en contenedor',
      image: '/contenedorbar-20pies-nuevo.webp',
      offer: {
        price: 18900,
        description: 'Precio orientativo desde 18.900 EUR para una configuración personalizada.',
      },
    },
  },
  {
    path: '/estudio/gimnasio-contenedor-20-pies',
    title: 'Gimnasio modular 20 pies | Contenedor fitness | The Box',
    description:
      'Gimnasio modular en contenedor de 20 pies desde 13.625 EUR más IVA. Fachada acristalada, interior aislado y configuración para fitness.',
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Proyectos',
    llmsDescription: 'Módulo de gimnasio de 20 pies configurable para fitness y wellness.',
    commercial: {
      kind: 'product',
      name: 'Gimnasio modular en contenedor de 20 pies',
      category: 'Gimnasio modular',
      image: '/gym_20pies_tricarril.webp',
      offer: {
        price: 13625,
        vatIncluded: false,
        description: 'Precio base desde 13.625 EUR más IVA, sujeto a configuración y transporte.',
      },
    },
  },
  {
    path: '/blog',
    title: 'Blog contenedores marítimos | Guías de compra y precios | The Box',
    description:
      'Guías prácticas sobre compra segura, precios reales, logística y transformación de contenedores en España.',
    changefreq: 'weekly',
    priority: '0.9',
    llmsSection: 'Guías',
    llmsDescription: 'Índice de guías técnicas y de compra de contenedores.',
  },
  {
    path: '/equipo-editorial',
    title: 'Equipo editorial y criterios de publicación | The Box',
    description:
      'Conoce cómo prepara, revisa y actualiza The Box Container Design sus guías sobre contenedores, logística y construcción modular.',
    pageType: 'AboutPage',
    mainEntity: 'editorialTeam',
    changefreq: 'yearly',
    priority: '0.6',
    llmsSection: 'Información',
    llmsDescription: 'Autoría corporativa, metodología, fuentes y política de correcciones.',
  },
  {
    path: '/blog/como-evitar-estafas-al-comprar-un-contenedor-maritimo-2026',
    title: 'Cómo evitar estafas al comprar un contenedor marítimo | Guía 2026',
    description:
      'Señales de alerta, precios reales y checklist de verificación antes de pagar. Compra segura paso a paso.',
    type: 'article',
    datePublished: '2026-02-24',
    dateModified: '2026-02-24',
    image: '/3contenedorescerrados-evergreen-20pies-usado.webp',
    articleSection: 'Compra segura',
    keywords: ['estafas de contenedores', 'compra segura', 'contenedores marítimos'],
    about: ['Compra segura de contenedores marítimos', 'Fraude en compras online'],
    citations: [
      {
        name: 'Fraudes online — Centro Europeo del Consumidor en España',
        url: 'https://portal-cec.consumo.gob.es/es/informacion-general/compras-online/fraudes-online',
      },
    ],
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Guías',
    llmsDescription: 'Checklist para verificar vendedores, unidades y pagos antes de comprar.',
  },
  {
    path: '/blog/catalunya-venta-contenedores-maritimos-medidas-tipos-guia-precios-2026',
    title: 'Catalunya: venta de contenedores marítimos 2026 | Medidas y precios',
    description:
      'Guía 2026 con medidas ISO, diferencias 20/40 pies y High Cube, precios orientativos y checklist de compra.',
    type: 'article',
    datePublished: '2026-03-04',
    dateModified: '2026-03-04',
    image: '/montañacontenedores.webp',
    articleSection: 'Medidas y precios',
    keywords: ['contenedores en Catalunya', 'medidas de contenedores', 'precios 2026'],
    about: ['Contenedores marítimos en Catalunya', 'Dimensiones de contenedores ISO'],
    citations: [
      {
        name: 'ISO 668:2020 — Clasificación, dimensiones y masas brutas',
        url: 'https://www.iso.org/standard/76912.html',
      },
    ],
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Guías',
    llmsDescription: 'Medidas, tipos y rangos orientativos de contenedores en Catalunya.',
  },
  {
    path: '/blog/casa-contenedor-espana-guia',
    title: 'Casa contenedor en España: precio, normativa y diseño | The Box',
    description:
      'Guía práctica: costes orientativos, permisos y CTE, logística y errores comunes antes de empezar tu casa contenedor.',
    type: 'article',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    image: '/casacontenedor-40pies-disenofinal.webp',
    articleSection: 'Construcción modular',
    keywords: ['casa contenedor', 'normativa CTE', 'vivienda modular'],
    about: ['Casas contenedor en España', 'Código Técnico de la Edificación'],
    citations: [
      {
        name: 'Marco reglamentario del Código Técnico de la Edificación',
        url: 'https://www.codigotecnico.org/QueEsCTE/MarcoReglamentario.html',
      },
    ],
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Guías',
    llmsDescription: 'Guía sobre costes, permisos, diseño y viabilidad de una casa contenedor.',
  },
  {
    path: '/preguntas-frecuentes',
    title: 'FAQ contenedores marítimos | Compra segura y logística | The Box',
    description:
      'Respuestas sobre compra, inspección, transporte, permisos y plazos. Consejos prácticos para evitar errores y estafas.',
    changefreq: 'monthly',
    priority: '0.8',
    llmsSection: 'Información',
    llmsDescription: 'Respuestas sobre compra, transporte, permisos, instalación y plazos.',
  },
  {
    path: '/estudio/piscina-infinity-box-contenedor',
    title: 'Piscina Infinity Box de contenedor | Próximamente | The Box',
    description:
      'Esta sección está en actualización. Estamos preparando nuevos materiales y detalles técnicos.',
    robots: 'noindex,follow',
    index: false,
  },
  {
    path: '/legal',
    title: 'Aviso legal, privacidad y cookies | The Box Container Design',
    description:
      'Información legal, política de privacidad y política de cookies de The Box Container Design.',
    robots: 'noindex,follow',
    index: false,
  },
];

export const routeByPath = (path) => ROUTES.find((route) => route.path === path);

export const breadcrumbsForPath = (path) => {
  const route = routeByPath(path);
  if (!route || path === '/') return [];

  const breadcrumbs = [{ name: 'Inicio', path: '/' }];

  if (path.startsWith('/blog/')) {
    breadcrumbs.push({ name: 'Blog', path: '/blog' });
  } else if (path.startsWith('/estudio/')) {
    breadcrumbs.push({ name: 'Portfolio', path: PATHS.portfolio });
  }

  breadcrumbs.push({
    name: route.breadcrumbLabel || route.title.split('|')[0].trim(),
    path: route.path,
  });

  return breadcrumbs;
};
