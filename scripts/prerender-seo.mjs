import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://theboxcontainerdesign.com';
const SITE_NAME = 'THE BOX CONTAINER DESIGN';
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

const routes = [
  {
    path: '/',
    title: 'Contenedores marítimos en España | Venta y Transformación | The Box',
    description:
      'Venta y transformación de contenedores marítimos en España. Vivienda modular, espacios comerciales y proyectos técnicos con asesoría e ingeniería.',
    priority: '1.0',
  },
  {
    path: '/preguntas-frecuentes',
    title: 'FAQ contenedores marítimos | Compra segura y logística | The Box',
    description:
      'Respuestas sobre compra, inspección, transporte, permisos y plazos. Consejos prácticos para evitar errores y estafas.',
  },
  {
    path: '/venta-contenedores-maritimos-espana',
    title: 'Venta de contenedores marítimos en España (20 y 40 pies) | The Box',
    description:
      'Stock real en puerto, inspección propia y vídeo de la unidad. Entrega 3-10 días y presupuesto cerrado con transporte incluido.',
  },
  {
    path: '/portfolio-contenedores-casa',
    title: 'Portfolio de contenedores casa | Diseños y transformaciones | The Box',
    description:
      'Descubre nuestro portfolio de contenedores casa: vivienda modular, bar lounge, piscina y gimnasio en contenedor con enfoque técnico y diseño funcional.',
  },
  {
    path: '/estudio/residencia-minimalista-contenedor',
    title: 'Residencia Minimalista X1 | Casa contenedor en España | The Box',
    description:
      'Casa contenedor moderna en España con diseño contemporáneo, eficiencia energética y acabados premium. Proyecto modular a medida.',
  },
  {
    path: '/estudio/bar-lounge-contenedor-eventos',
    title: 'Bar & Lounge en contenedor | Espacio comercial | The Box',
    description:
      'Espacio comercial en contenedor para hostelería y eventos. Desde 18.900 EUR, personalizable y entrega en España.',
  },
  {
    path: '/estudio/piscina-infinity-box-contenedor',
    title: 'Piscina Infinity Box de contenedor | Próximamente | The Box',
    description:
      'Esta sección está en actualización. Estamos preparando nuevos materiales y detalles técnicos.',
  },
  {
    path: '/estudio/gimnasio-contenedor-20-pies',
    title: 'Gimnasio en contenedor de 20 pies | Próximamente | The Box',
    description:
      'Esta sección está en actualización. Muy pronto publicaremos fotos y especificaciones completas.',
  },
  {
    path: '/blog',
    title: 'Blog contenedores marítimos | Guías de compra y precios | The Box',
    description:
      'Guías prácticas sobre compra segura, precios reales, logística y transformación de contenedores en España.',
  },
  {
    path: '/blog/como-evitar-estafas-al-comprar-un-contenedor-maritimo-2026',
    title: 'Cómo evitar estafas al comprar un contenedor marítimo | Guía 2026',
    description:
      'Señales de alerta, precios reales y checklist de verificación antes de pagar. Compra segura paso a paso.',
    type: 'article',
    datePublished: '2026-02-24',
    dateModified: '2026-02-24',
  },
  {
    path: '/blog/catalunya-venta-contenedores-maritimos-medidas-tipos-guia-precios-2026',
    title: 'Catalunya: venta de contenedores marítimos 2026 | Medidas y precios',
    description:
      'Guía 2026 con medidas ISO, diferencias 20/40 pies y High Cube, precios orientativos y checklist de compra.',
    type: 'article',
    datePublished: '2026-03-04',
    dateModified: '2026-03-04',
  },
  {
    path: '/blog/casa-contenedor-espana-guia',
    title: 'Casa contenedor en España: precio, normativa y diseño | The Box',
    description:
      'Guía práctica: costes orientativos, permisos y CTE, logística y errores comunes antes de empezar tu casa contenedor.',
    type: 'article',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
  },
  {
    path: '/legal',
    title: 'Aviso legal, privacidad y cookies | The Box Container Design',
    description:
      'Información legal, política de privacidad y política de cookies de The Box Container Design.',
    robots: 'noindex,follow',
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const canonicalForPath = (routePath) =>
  routePath === '/' ? SITE_URL : `${SITE_URL}${routePath.replace(/\/$/, '')}`;

const schemaForRoute = (route) => {
  const canonical = canonicalForPath(route.path);

  if (route.type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: route.title,
      description: route.description,
      datePublished: route.datePublished,
      dateModified: route.dateModified,
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: canonical,
  };
};

const buildHeadBlock = (route) => {
  const canonical = canonicalForPath(route.path);
  const robots = route.robots || 'index,follow,max-image-preview:large';
  const type = route.type === 'article' ? 'article' : 'website';
  const schema = JSON.stringify(schemaForRoute(route));

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="robots" content="${escapeHtml(robots)}" />`,
    `    <link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `    <meta property="og:type" content="${type}" />`,
    `    <meta property="og:site_name" content="${SITE_NAME}" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(canonical)}" />`,
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
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
};

const template = await readFile(templatePath, 'utf8');

await Promise.all(
  routes.map(async (route) => {
    const outputPath = outputPathForRoute(route.path);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, injectSeo(template, route), 'utf8');
  })
);

console.log(`Prerendered SEO HTML for ${routes.length} routes.`);
