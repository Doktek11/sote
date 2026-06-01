export const SITE_URL = 'https://theboxcontainerdesign.com';

export const canonicalForPath = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return SITE_URL;
  return `${SITE_URL}${normalized.replace(/\/$/, '')}`;
};
