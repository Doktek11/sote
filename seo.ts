import { useEffect } from 'react';
import { routeByPath, SITE } from './site.config.mjs';

export const SITE_URL = SITE.url;

export const canonicalForPath = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return SITE_URL;
  return `${SITE_URL}${normalized.replace(/\/$/, '')}`;
};

const normalizePath = (path: string) => path.replace(/\/$/, '') || '/';

export const useRouteSeo = (path: string) => {
  const normalizedPath = normalizePath(path);

  useEffect(() => {
    const route = routeByPath(normalizedPath);
    if (!route) {
      console.warn(`No existe configuración SEO central para ${normalizedPath}`);
      return;
    }

    const previousTitle = document.title;
    const restorers: Array<() => void> = [];

    const setAttribute = (
      selector: string,
      tagName: 'meta' | 'link',
      identityAttribute: 'name' | 'property' | 'rel',
      identityValue: string,
      valueAttribute: 'content' | 'href',
      value: string
    ) => {
      let element = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      const created = !element;

      if (!element) {
        element = document.createElement(tagName);
        element.setAttribute(identityAttribute, identityValue);
        document.head.appendChild(element);
      }

      const previousValue = element.getAttribute(valueAttribute);
      element.setAttribute(valueAttribute, value);
      restorers.push(() => {
        if (created) {
          element?.remove();
        } else if (previousValue === null) {
          element?.removeAttribute(valueAttribute);
        } else {
          element?.setAttribute(valueAttribute, previousValue);
        }
      });
    };

    const setNamedMeta = (name: string, value: string) =>
      setAttribute(`meta[name="${name}"]`, 'meta', 'name', name, 'content', value);
    const setPropertyMeta = (property: string, value: string) =>
      setAttribute(`meta[property="${property}"]`, 'meta', 'property', property, 'content', value);

    const canonical = canonicalForPath(normalizedPath);
    const robots = route.robots || 'index,follow,max-image-preview:large';
    const socialType = route.type === 'article' ? 'article' : 'website';
    const imagePath = route.image || route.commercial?.image;
    const socialImage = imagePath
      ? `${SITE_URL}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`
      : null;

    document.title = route.title;
    setNamedMeta('description', route.description);
    setNamedMeta('robots', robots);
    setAttribute('link[rel="canonical"]', 'link', 'rel', 'canonical', 'href', canonical);
    setPropertyMeta('og:type', socialType);
    setPropertyMeta('og:title', route.title);
    setPropertyMeta('og:description', route.description);
    setPropertyMeta('og:url', canonical);
    setPropertyMeta('og:site_name', SITE.name);
    setNamedMeta('twitter:card', socialImage ? 'summary_large_image' : 'summary');
    setNamedMeta('twitter:title', route.title);
    setNamedMeta('twitter:description', route.description);

    if (socialImage) {
      setPropertyMeta('og:image', socialImage);
      setNamedMeta('twitter:image', socialImage);
    }

    return () => {
      document.title = previousTitle;
      restorers.reverse().forEach((restore) => restore());
    };
  }, [normalizedPath]);
};
