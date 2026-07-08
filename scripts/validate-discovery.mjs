import { readFile, readdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PATHS, ROUTES, SITE } from '../site.config.mjs';
import { validateLive } from './validate-live.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const canonicalForPath = (routePath) =>
  routePath === '/' ? SITE.url : `${SITE.url}${routePath.replace(/\/$/, '')}`;

const htmlPathForRoute = (routePath) =>
  routePath === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, `${routePath.replace(/^\//, '')}.html`);

const schemaFromHtml = (html, label) => {
  const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert(matches.length === 1, `${label}: se esperaba exactamente un bloque JSON-LD`);

  let schema;
  try {
    schema = JSON.parse(matches[0][1]);
  } catch (error) {
    throw new Error(`${label}: JSON-LD inválido (${error.message})`);
  }

  assert(schema['@context'] === 'https://schema.org', `${label}: @context incorrecto`);
  assert(Array.isArray(schema['@graph']), `${label}: falta @graph`);

  const graphIds = schema['@graph'].map((node) => node['@id']).filter(Boolean);
  assert(new Set(graphIds).size === graphIds.length, `${label}: hay @id duplicados en @graph`);
  return schema;
};

const requiredArticleFields = [
  'headline',
  'description',
  'datePublished',
  'dateModified',
  'image',
  'author',
  'publisher',
  'mainEntityOfPage',
  'about',
  'citation',
  'keywords',
];

let checkedRoutes = 0;
let checkedArticles = 0;
let checkedCommercialPages = 0;

const routePaths = ROUTES.map((route) => route.path);
const routeTitles = ROUTES.map((route) => route.title);
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
const formatSpanishDate = (value) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));

assert(new Set(routePaths).size === routePaths.length, 'ROUTES contiene rutas duplicadas');
assert(new Set(routeTitles).size === routeTitles.length, 'ROUTES contiene títulos SEO duplicados');
assert(isoDatePattern.test(SITE.legalLastUpdated), 'legalLastUpdated debe usar YYYY-MM-DD');
assert(
  SITE.legalLastUpdatedLabel === formatSpanishDate(SITE.legalLastUpdated),
  'legalLastUpdatedLabel no coincide con legalLastUpdated'
);

for (const route of ROUTES) {
  assert(route.path.startsWith('/'), `${route.path}: la ruta debe comenzar por /`);
  assert(route.path === '/' || !route.path.endsWith('/'), `${route.path}: la ruta no debe terminar en /`);
  assert(route.title?.trim(), `${route.path}: falta title centralizado`);
  assert(route.description?.trim(), `${route.path}: falta description centralizada`);
  if (route.index !== false) {
    assert(route.llmsSection, `${route.path}: falta llmsSection`);
    assert(route.llmsDescription, `${route.path}: falta llmsDescription`);
  }
  if (route.type === 'article') {
    assert(isoDatePattern.test(route.datePublished), `${route.path}: datePublished inválida`);
    assert(isoDatePattern.test(route.dateModified), `${route.path}: dateModified inválida`);
    assert(
      Date.parse(`${route.dateModified}T00:00:00Z`) >= Date.parse(`${route.datePublished}T00:00:00Z`),
      `${route.path}: dateModified es anterior a datePublished`
    );
  }
}

for (const [name, configuredPath] of Object.entries(PATHS)) {
  assert(routePaths.includes(configuredPath), `PATHS.${name} no existe en ROUTES (${configuredPath})`);
}

const vercelConfig = JSON.parse(await readFile(path.join(rootDir, 'vercel.json'), 'utf8'));
assert(vercelConfig.cleanUrls === true, 'vercel.json debe mantener cleanUrls=true');
assert(vercelConfig.trailingSlash === false, 'vercel.json debe mantener trailingSlash=false');

for (const route of ROUTES) {
  const canonical = canonicalForPath(route.path);
  const html = await readFile(htmlPathForRoute(route.path), 'utf8');
  const expectedRobots = route.robots || 'index,follow,max-image-preview:large';

  assert(html.includes(`<link rel="canonical" href="${canonical}" />`), `${route.path}: canonical incorrecto`);
  assert(html.includes(`<meta name="robots" content="${expectedRobots}" />`), `${route.path}: robots incorrecto`);
  assert(html.includes('<meta name="description"'), `${route.path}: falta meta description`);
  assert((html.match(/<title>/g) || []).length === 1, `${route.path}: title duplicado o ausente`);
  assert((html.match(/<meta name="description"/g) || []).length === 1, `${route.path}: meta description duplicada`);
  assert((html.match(/<meta name="robots"/g) || []).length === 1, `${route.path}: meta robots duplicada`);
  assert((html.match(/<link rel="canonical"/g) || []).length === 1, `${route.path}: canonical duplicado`);
  assert((html.match(/<meta property="og:url"/g) || []).length === 1, `${route.path}: og:url duplicado o ausente`);

  const schema = schemaFromHtml(html, route.path);
  const graph = schema['@graph'];
  const webpage = graph.find((node) => ['WebPage', 'CollectionPage', 'AboutPage'].includes(node['@type']));
  assert(webpage, `${route.path}: falta nodo de página`);
  assert(webpage.url === canonical, `${route.path}: URL del nodo de página incorrecta`);

  if (route.path === '/') {
    assert(graph.some((node) => node['@type'] === 'Organization'), 'Portada: falta Organization');
    assert(graph.some((node) => node['@type'] === 'WebSite'), 'Portada: falta WebSite');
  } else {
    const breadcrumb = graph.find((node) => node['@type'] === 'BreadcrumbList');
    assert(breadcrumb, `${route.path}: falta BreadcrumbList`);
    assert(webpage.breadcrumb?.['@id'] === breadcrumb['@id'], `${route.path}: breadcrumb no conectado`);
  }

  if (route.type === 'article') {
    const article = graph.find((node) => node['@type'] === 'BlogPosting');
    assert(article, `${route.path}: falta BlogPosting`);
    for (const field of requiredArticleFields) {
      assert(article[field], `${route.path}: BlogPosting sin ${field}`);
    }
    assert(article.author['@id'] === `${SITE.url}/#editorial-team`, `${route.path}: autor incorrecto`);
    assert(article.publisher['@id'] === `${SITE.url}/#organization`, `${route.path}: publisher incorrecto`);
    assert(html.includes('<meta property="og:image"'), `${route.path}: falta og:image`);
    checkedArticles += 1;
  }

  if (route.commercial) {
    const expectedType = route.commercial.kind === 'product' ? 'Product' : 'Service';
    const entity = graph.find((node) => node['@type'] === expectedType);
    assert(entity, `${route.path}: falta ${expectedType}`);
    assert(webpage.mainEntity?.['@id'] === entity['@id'], `${route.path}: entidad comercial no conectada`);
    checkedCommercialPages += 1;
  }

  checkedRoutes += 1;
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
for (const route of ROUTES) {
  const isPresent = sitemap.includes(`<loc>${canonicalForPath(route.path)}</loc>`);
  assert(route.index === false ? !isPresent : isPresent, `${route.path}: presencia incorrecta en sitemap`);
}

const generatedFiles = [
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'llms-full.txt',
  'ai/company.md',
  'ai/services.md',
  'ai/guides.md',
];

for (const filename of generatedFiles) {
  const [publicContents, distContents] = await Promise.all([
    readFile(path.join(publicDir, filename), 'utf8'),
    readFile(path.join(distDir, filename), 'utf8'),
  ]);
  assert(publicContents === distContents, `${filename}: public y dist no coinciden`);
  assert(publicContents.trim().length > 40, `${filename}: contenido insuficiente`);
}

const llms = await readFile(path.join(distDir, 'llms.txt'), 'utf8');
for (const resource of ['/ai/company.md', '/ai/services.md', '/ai/guides.md', '/llms-full.txt']) {
  assert(llms.includes(`${SITE.url}${resource}`), `llms.txt: falta ${resource}`);
}

const notFoundHtml = await readFile(path.join(distDir, '404.html'), 'utf8');
assert(notFoundHtml.includes('noindex,follow'), '404.html: falta noindex,follow');

assert(SITE.address.addressLocality === 'Reus', 'La localidad central debe ser Reus');
assert(SITE.address.addressRegion === 'Tarragona', 'La provincia central debe ser Tarragona');
assert(SITE.taxID === '39923029C', 'El NIF debe usar el formato AEAT de persona física: ocho cifras y letra final');

const legalSource = await readFile(
  path.join(rootDir, 'components', 'sections', 'LegalPage.tsx'),
  'utf8'
);
assert(!legalSource.includes('Cambrils'), 'LegalPage todavía contiene la localidad Cambrils');
assert(!legalSource.includes('C-39923029'), 'LegalPage todavía contiene el CIF descartado');
assert(!legalSource.includes('39923023C'), 'LegalPage todavía contiene el NIF no verificado');
assert(!/new Date\s*\(/.test(legalSource), 'LegalPage no debe calcular dinámicamente su fecha de actualización');

const sourceExtensions = new Set(['.ts', '.tsx', '.mjs', '.html', '.css', '.md']);
const ignoredDirectories = new Set(['.git', 'dist', 'node_modules']);

const checkEncoding = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await checkEncoding(entryPath);
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      const contents = await readFile(entryPath, 'utf8');
      assert(
        !/[\u00c3\u00c2]|\u00e2\u201a\u00ac/.test(contents),
        `${entryPath}: posible texto mal codificado`
      );
      if (path.extname(entry.name) === '.tsx') {
        assert(!/\bSEO_(?:TITLE|DESCRIPTION|CANONICAL)\b/.test(contents), `${entryPath}: SEO duplicado fuera de site.config.mjs`);
        assert(!/\bupsert(?:Meta|Canonical)\b/.test(contents), `${entryPath}: manipulador SEO local duplicado`);
        assert(!/published="\d{4}-\d{2}-\d{2}"/.test(contents), `${entryPath}: fecha editorial duplicada fuera de site.config.mjs`);
      }
    }
  }
};

await checkEncoding(rootDir);

const cleanUrlServer = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || '/', 'http://127.0.0.1');
  const pathname = decodeURIComponent(requestUrl.pathname);

  if (pathname.includes('..')) {
    response.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
    return;
  }

  const relativePath = pathname.replace(/^\/+/, '');
  const hasExtension = path.extname(relativePath) !== '';
  const requestedFile =
    pathname === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, hasExtension ? relativePath : `${relativePath}.html`);

  try {
    const contents = await readFile(requestedFile);
    const extension = path.extname(requestedFile);
    const contentTypes = {
      '.html': 'text/html; charset=utf-8',
      '.xml': 'application/xml; charset=utf-8',
      '.txt': 'text/plain; charset=utf-8',
      '.md': 'text/markdown; charset=utf-8',
    };
    response.writeHead(200, {
      'content-type': contentTypes[extension] || 'application/octet-stream',
    });
    response.end(contents);
  } catch {
    const notFound = await readFile(path.join(distDir, '404.html'));
    response.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    response.end(notFound);
  }
});

await new Promise((resolve, reject) => {
  cleanUrlServer.once('error', reject);
  cleanUrlServer.listen(0, '127.0.0.1', resolve);
});

try {
  const address = cleanUrlServer.address();
  assert(address && typeof address === 'object', 'No se pudo iniciar la validación HTTP');
  const baseUrl = `http://127.0.0.1:${address.port}`;

  for (const route of ROUTES) {
    const response = await fetch(`${baseUrl}${route.path}`);
    const html = await response.text();
    assert(response.status === 200, `${route.path}: estado HTTP ${response.status}`);
    assert(response.headers.get('content-type')?.startsWith('text/html'), `${route.path}: Content-Type no es HTML`);
    assert(
      html.includes(`<link rel="canonical" href="${canonicalForPath(route.path)}" />`),
      `${route.path}: el HTML servido no corresponde a su canonical`
    );
    assert((html.match(/<link rel="canonical"/g) || []).length === 1, `${route.path}: canonical HTTP duplicado`);
    schemaFromHtml(html, `${route.path} (HTTP)`);
  }

  const missingResponse = await fetch(`${baseUrl}/ruta-que-no-existe`);
  const missingHtml = await missingResponse.text();
  assert(missingResponse.status === 404, 'La ruta inexistente no responde con HTTP 404');
  assert(missingHtml.includes('noindex,follow'), 'El HTML 404 servido no contiene noindex,follow');

  await validateLive(baseUrl);
} finally {
  await new Promise((resolve) => cleanUrlServer.close(resolve));
}

console.log(
  `Discovery validation passed: ${checkedRoutes} routes, ${checkedArticles} BlogPosting, ${checkedCommercialPages} commercial pages and ${generatedFiles.length} synchronized discovery files.`
);
