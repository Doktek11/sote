import { ROUTES, SITE } from '../site.config.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const validateLive = async (requestedBaseUrl = SITE.url) => {
const baseUrl = new URL(requestedBaseUrl);

if (!['http:', 'https:'].includes(baseUrl.protocol)) {
  throw new Error('La URL de despliegue debe usar http o https');
}

baseUrl.pathname = baseUrl.pathname.replace(/\/$/, '');

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const canonicalForPath = (routePath) =>
  routePath === '/' ? SITE.url : `${SITE.url}${routePath}`;

const fetchLive = async (pathname) =>
  fetch(new URL(pathname, `${baseUrl.href}/`), {
    redirect: 'follow',
    headers: { 'user-agent': 'TheBox-Discovery-Validator/1.0' },
    signal: AbortSignal.timeout(15000),
  });

let checkedRoutes = 0;

for (const route of ROUTES) {
  const response = await fetchLive(route.path);
  const html = await response.text();
  const canonical = canonicalForPath(route.path);
  const expectedRobots = route.robots || 'index,follow,max-image-preview:large';

  assert(response.status === 200, `${route.path}: HTTP ${response.status}`);
  assert(
    response.headers.get('content-type')?.includes('text/html'),
    `${route.path}: Content-Type no es HTML`
  );
  assert(
    html.includes(`<link rel="canonical" href="${canonical}" />`),
    `${route.path}: canonical incorrecto en el despliegue`
  );
  assert(
    html.includes(`<meta name="robots" content="${expectedRobots}" />`),
    `${route.path}: robots incorrecto en el despliegue`
  );
  assert((html.match(/<link rel="canonical"/g) || []).length === 1, `${route.path}: canonical duplicado`);
  assert((html.match(/<meta name="description"/g) || []).length === 1, `${route.path}: description duplicada`);
  assert((html.match(/application\/ld\+json/g) || []).length === 1, `${route.path}: JSON-LD duplicado o ausente`);

  checkedRoutes += 1;
}

const discoveryResources = new Map([
  ['/robots.txt', 'Sitemap:'],
  ['/sitemap.xml', '<urlset'],
  ['/llms.txt', '# The Box Container Design'],
  ['/llms-full.txt', '# The Box Container Design'],
  ['/ai/company.md', '39923029C'],
  ['/ai/services.md', 'Servicios'],
  ['/ai/guides.md', 'Guías'],
]);

for (const [pathname, expectedText] of discoveryResources) {
  const response = await fetchLive(pathname);
  const contents = await response.text();
  assert(response.status === 200, `${pathname}: HTTP ${response.status}`);
  assert(contents.includes(expectedText), `${pathname}: contenido inesperado o desactualizado`);
}

const missingPath = `/__discovery-healthcheck-missing-${Date.now()}__`;
const missingResponse = await fetchLive(missingPath);
const missingHtml = await missingResponse.text();
assert(missingResponse.status === 404, `${missingPath}: debe responder HTTP 404`);
assert(missingHtml.includes('noindex,follow'), `${missingPath}: el 404 no contiene noindex,follow`);

console.log(
  `Live discovery validation passed for ${baseUrl.origin}: ${checkedRoutes} routes, ${discoveryResources.size} discovery resources and a real 404.`
);
};

const isDirectExecution =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isDirectExecution) {
  await validateLive(process.argv[2] || SITE.url);
}
