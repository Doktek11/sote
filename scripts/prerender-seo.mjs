import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { breadcrumbsForPath, ROUTES, SITE } from '../site.config.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const templatePath = path.join(distDir, 'index.html');

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const escapeXml = escapeHtml;

const canonicalForPath = (routePath) =>
  routePath === '/' ? SITE.url : `${SITE.url}${routePath.replace(/\/$/, '')}`;

const ENTITY_IDS = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
  editorialTeam: `${SITE.url}/#editorial-team`,
};

const organizationNode = () => ({
  '@type': 'Organization',
  '@id': ENTITY_IDS.organization,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  description: SITE.description,
  logo: {
    '@type': 'ImageObject',
    '@id': ENTITY_IDS.logo,
    url: `${SITE.url}${SITE.logo}`,
    contentUrl: `${SITE.url}${SITE.logo}`,
  },
  image: { '@id': ENTITY_IDS.logo },
  email: SITE.email,
  telephone: SITE.telephone,
  address: {
    '@type': 'PostalAddress',
    ...SITE.address,
  },
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: SITE.email,
    telephone: SITE.telephone,
    areaServed: SITE.areaServed,
    availableLanguage: ['es'],
  },
  sameAs: [SITE.instagram],
  knowsAbout: SITE.knowsAbout,
  publishingPrinciples: `${SITE.url}${SITE.editorialPath}`,
  ...(SITE.taxID ? { taxID: SITE.taxID } : {}),
});

const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': ENTITY_IDS.website,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.language,
  publisher: { '@id': ENTITY_IDS.organization },
});

const editorialTeamNode = () => ({
  '@type': 'Organization',
  '@id': ENTITY_IDS.editorialTeam,
  name: 'Equipo editorial de The Box',
  url: `${SITE.url}${SITE.editorialPath}`,
  description:
    'Equipo corporativo responsable de preparar y revisar las guías publicadas por The Box Container Design.',
  parentOrganization: { '@id': ENTITY_IDS.organization },
  publishingPrinciples: `${SITE.url}${SITE.editorialPath}`,
});

const absoluteUrl = (urlOrPath) =>
  urlOrPath.startsWith('http') ? urlOrPath : `${SITE.url}${urlOrPath}`;

const offerNode = (offer, canonical, id, itemOffered) => {
  const priceSpecification = {
    '@type': 'PriceSpecification',
    price: offer.price,
    priceCurrency: 'EUR',
  };

  if (typeof offer.vatIncluded === 'boolean') {
    priceSpecification.valueAddedTaxIncluded = offer.vatIncluded;
  }

  return {
    '@type': 'Offer',
    '@id': id,
    url: canonical,
    price: offer.price,
    priceCurrency: 'EUR',
    description: offer.description,
    priceSpecification,
    seller: { '@id': ENTITY_IDS.organization },
    ...(itemOffered ? { itemOffered } : {}),
  };
};

const commercialNode = (route, canonical) => {
  const commercial = route.commercial;
  if (!commercial) return null;

  const entityId = `${canonical}#${commercial.kind}`;
  const common = {
    '@id': entityId,
    name: commercial.name,
    description: route.description,
    url: canonical,
    image: absoluteUrl(commercial.image),
  };

  if (commercial.kind === 'product') {
    const product = {
      '@type': 'Product',
      ...common,
      category: commercial.category,
      brand: { '@id': ENTITY_IDS.organization },
    };

    if (commercial.offer) {
      product.offers = offerNode(
        commercial.offer,
        canonical,
        `${canonical}#offer`
      );
    }

    return product;
  }

  const service = {
    '@type': 'Service',
    ...common,
    serviceType: commercial.serviceType,
    provider: { '@id': ENTITY_IDS.organization },
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
  };

  if (commercial.offer) {
    service.offers = offerNode(
      commercial.offer,
      canonical,
      `${canonical}#offer`,
      { '@id': entityId }
    );
  }

  if (commercial.catalog) {
    service.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      '@id': `${canonical}#offer-catalog`,
      name: commercial.catalog.name,
      itemListElement: commercial.catalog.offers.map((offer, index) =>
        offerNode(
          offer,
          canonical,
          `${canonical}#catalog-offer-${index + 1}`,
          {
            '@type': 'Product',
            '@id': `${canonical}#catalog-product-${index + 1}`,
            name: offer.name,
            description: offer.description,
            url: canonical,
          }
        )
      ),
    };
  }

  return service;
};

const collectionNode = (route, canonical) => {
  if (!route.collection) return null;

  return {
    '@type': 'ItemList',
    '@id': `${canonical}#itemlist`,
    name: route.collection.name,
    numberOfItems: route.collection.items.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: route.collection.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalForPath(item.path),
    })),
  };
};

const breadcrumbNode = (route, canonical) => {
  const breadcrumbs = breadcrumbsForPath(route.path);
  if (breadcrumbs.length === 0) return null;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalForPath(item.path),
    })),
  };
};

const schemaForRoute = (route) => {
  const canonical = canonicalForPath(route.path);
  const webpageId = `${canonical}${route.path === '/' ? '/' : ''}#webpage`;
  const graph = [];
  const breadcrumb = breadcrumbNode(route, canonical);

  if (route.path === '/') {
    graph.push(organizationNode(), websiteNode());
  }

  const webpage = {
    '@type': route.pageType || 'WebPage',
    '@id': webpageId,
    url: canonical,
    name: route.title,
    description: route.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': ENTITY_IDS.website },
    about: { '@id': ENTITY_IDS.organization },
    ...(breadcrumb ? { breadcrumb: { '@id': breadcrumb['@id'] } } : {}),
  };

  if (route.type === 'article') {
    const articleId = `${canonical}#article`;
    webpage.mainEntity = { '@id': articleId };
    graph.push(webpage, {
      '@type': 'BlogPosting',
      '@id': articleId,
      headline: route.title,
      description: route.description,
      datePublished: route.datePublished,
      dateModified: route.dateModified,
      image: absoluteUrl(route.image),
      thumbnailUrl: absoluteUrl(route.image),
      articleSection: route.articleSection,
      keywords: route.keywords,
      about: route.about.map((name) => ({ '@type': 'Thing', name })),
      citation: route.citations.map((citation) => ({
        '@type': 'CreativeWork',
        name: citation.name,
        url: citation.url,
      })),
      isAccessibleForFree: true,
      inLanguage: SITE.language,
      author: {
        '@type': 'Organization',
        '@id': ENTITY_IDS.editorialTeam,
        name: 'Equipo editorial de The Box',
        url: `${SITE.url}${SITE.editorialPath}`,
      },
      publisher: {
        '@type': 'Organization',
        '@id': ENTITY_IDS.organization,
        name: SITE.name,
        logo: { '@id': ENTITY_IDS.logo },
      },
      mainEntityOfPage: { '@id': webpageId },
      isPartOf: { '@id': ENTITY_IDS.website },
    });
    if (breadcrumb) graph.push(breadcrumb);
  } else {
    const commercial = commercialNode(route, canonical);
    const collection = collectionNode(route, canonical);
    const editorialTeam =
      route.mainEntity === 'editorialTeam' ? editorialTeamNode() : null;

    if (editorialTeam) {
      webpage.mainEntity = { '@id': ENTITY_IDS.editorialTeam };
    } else if (route.mainEntity === 'organization') {
      webpage.mainEntity = { '@id': ENTITY_IDS.organization };
    } else if (commercial) {
      webpage.mainEntity = { '@id': commercial['@id'] };
    } else if (collection) {
      webpage.mainEntity = { '@id': collection['@id'] };
    }

    graph.push(webpage);
    if (editorialTeam) graph.push(editorialTeam);
    if (commercial) graph.push(commercial);
    if (collection) graph.push(collection);
    if (breadcrumb) graph.push(breadcrumb);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};

const buildHeadBlock = (route) => {
  const canonical = canonicalForPath(route.path);
  const robots = route.robots || 'index,follow,max-image-preview:large';
  const socialType = route.type === 'article' ? 'article' : 'website';
  const schema = JSON.stringify(schemaForRoute(route));
  const socialImage = route.image ? absoluteUrl(route.image) : null;

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="robots" content="${escapeHtml(robots)}" />`,
    `    <link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `    <meta property="og:type" content="${socialType}" />`,
    `    <meta property="og:site_name" content="${SITE.name}" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(canonical)}" />`,
    ...(socialImage
      ? [
          `    <meta property="og:image" content="${escapeHtml(socialImage)}" />`,
          `    <meta name="twitter:image" content="${escapeHtml(socialImage)}" />`,
        ]
      : []),
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `    <script type="application/ld+json">${schema.replaceAll('<', '\\u003c')}</script>`,
  ].join('\n');
};

const injectSeo = (html, route) => {
  const withoutTitle = html.replace(/    <title>[\s\S]*?<\/title>\r?\n?/, '');
  const withoutDescription = withoutTitle.replace(
    /    <meta\s+name="description"[\s\S]*?\/>\r?\n?/,
    ''
  );
  const withoutGeneratedSeo = withoutDescription.replace(
    /    <meta name="robots"[\s\S]*?    <script type="application\/ld\+json">[\s\S]*?<\/script>\r?\n?/,
    ''
  );

  return withoutGeneratedSeo.replace(
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n${buildHeadBlock(route)}`
  );
};

const outputPathForRoute = (routePath) => {
  if (routePath === '/') return templatePath;
  return path.join(distDir, `${routePath.replace(/^\//, '')}.html`);
};

const buildSitemap = () => {
  const urls = ROUTES.filter((route) => route.index !== false)
    .map(
      (route) => `  <url>
    <loc>${escapeXml(canonicalForPath(route.path))}</loc>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const buildRobots = () => `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

const buildLlms = () => {
  const sections = new Map();
  for (const route of ROUTES.filter((item) => item.index !== false && item.llmsSection)) {
    const entries = sections.get(route.llmsSection) || [];
    entries.push(route);
    sections.set(route.llmsSection, entries);
  }

  const lists = [...sections.entries()]
    .map(
      ([section, routes]) => `## ${section}\n\n${routes
        .map(
          (route) =>
            `- [${route.title}](${canonicalForPath(route.path)}): ${route.llmsDescription}`
        )
        .join('\n')}`
    )
    .join('\n\n');

  return `# The Box Container Design

> Empresa española especializada en venta, logística y transformación de contenedores marítimos para usos industriales, comerciales y residenciales.

The Box Container Design presta servicio en España. La información oficial de productos, precios orientativos, disponibilidad y condiciones debe verificarse en las páginas enlazadas o mediante contacto directo.

- Sitio oficial: ${SITE.url}
- Correo: ${SITE.email}
- Teléfono: ${SITE.telephone}
- Ubicación: ${SITE.location}

${lists}

## Recursos Markdown

- [Información de la empresa](${SITE.url}/ai/company.md): Identidad, contacto, ámbito de servicio y especialización.
- [Servicios y precios orientativos](${SITE.url}/ai/services.md): Resumen estructurado de servicios, productos y ofertas visibles.
- [Guías y fuentes](${SITE.url}/ai/guides.md): Artículos publicados, fechas y referencias externas.

## Optional

- [Contexto ampliado](${SITE.url}/llms-full.txt): Documento único con la información esencial de empresa, servicios y guías.
`;
};

const buildCompanyMarkdown = () => `# The Box Container Design

> ${SITE.description}

## Identidad

- Nombre: ${SITE.name}
- Titular legal: ${SITE.legalName}
${SITE.taxID ? `- NIF: ${SITE.taxID}` : ''}
- Sitio oficial: ${SITE.url}
- Área de servicio: España
- Ubicación: ${SITE.location}
- Idioma principal: español

## Especialización

${SITE.knowsAbout.map((topic) => `- ${topic}`).join('\n')}

## Contacto

- Correo: ${SITE.email}
- Teléfono: ${SITE.telephone}
- Instagram: ${SITE.instagram}

## Política editorial

- [Equipo editorial y criterios de publicación](${SITE.url}${SITE.editorialPath})
`;

const buildServicesMarkdown = () => {
  const services = ROUTES.filter((route) => route.commercial)
    .map((route) => {
      const commercial = route.commercial;
      const lines = [
        `## ${commercial.name}`,
        '',
        route.description,
        '',
        `- Tipo: ${commercial.kind === 'product' ? 'Producto' : 'Servicio'}`,
        `- Página oficial: ${canonicalForPath(route.path)}`,
      ];

      if (commercial.serviceType) lines.push(`- Categoría: ${commercial.serviceType}`);
      if (commercial.category) lines.push(`- Categoría: ${commercial.category}`);
      if (commercial.offer) lines.push(`- ${commercial.offer.description}`);

      if (commercial.catalog) {
        lines.push('', `### ${commercial.catalog.name}`, '');
        for (const offer of commercial.catalog.offers) {
          lines.push(`- ${offer.name}: ${offer.description}`);
        }
      }

      return lines.join('\n');
    })
    .join('\n\n');

  return `# Servicios y precios orientativos

> Los precios indicados son importes de partida visibles en la web. Deben confirmarse según configuración, stock, transporte, ubicación e impuestos aplicables.

${services}
`;
};

const buildGuidesMarkdown = () => {
  const guides = ROUTES.filter((route) => route.type === 'article')
    .map(
      (route) => `## ${route.title}

- URL: ${canonicalForPath(route.path)}
- Publicado: ${route.datePublished}
- Última modificación: ${route.dateModified}
- Sección: ${route.articleSection}
- Resumen: ${route.description}
- Temas: ${route.about.join(', ')}
- Fuentes:
${route.citations.map((citation) => `  - [${citation.name}](${citation.url})`).join('\n')}`
    )
    .join('\n\n');

  return `# Guías publicadas y fuentes

> Índice de contenidos editoriales publicados por el Equipo editorial de The Box.

${guides}
`;
};

const buildLlmsFull = () =>
  [buildCompanyMarkdown(), buildServicesMarkdown(), buildGuidesMarkdown()].join('\n\n---\n\n');

const notFoundRoute = {
  path: '/404',
  title: 'Página no encontrada | The Box Container Design',
  description: 'La página solicitada no existe o ha cambiado de dirección.',
  robots: 'noindex,follow',
};

const template = await readFile(templatePath, 'utf8');

await Promise.all(
  ROUTES.map(async (route) => {
    const outputPath = outputPathForRoute(route.path);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, injectSeo(template, route), 'utf8');
  })
);

await writeFile(path.join(distDir, '404.html'), injectSeo(template, notFoundRoute), 'utf8');

const generatedFiles = {
  'sitemap.xml': buildSitemap(),
  'robots.txt': buildRobots(),
  'llms.txt': buildLlms(),
  'llms-full.txt': buildLlmsFull(),
  'ai/company.md': buildCompanyMarkdown(),
  'ai/services.md': buildServicesMarkdown(),
  'ai/guides.md': buildGuidesMarkdown(),
};

await Promise.all(
  Object.entries(generatedFiles).flatMap(([filename, contents]) =>
    [publicDir, distDir].map(async (targetDir) => {
      const outputPath = path.join(targetDir, filename);
      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, contents, 'utf8');
    })
  )
);

console.log(
  `Generated SEO HTML for ${ROUTES.length} routes plus discovery files, Markdown resources and 404.html.`
);
