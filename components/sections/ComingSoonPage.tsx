import React, { useEffect } from 'react';
import { canonicalForPath } from '../../seo';

type ComingSoonPageProps = {
  title: string;
  description: string;
  canonicalPath: string;
};

const upsertMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title,
  description,
  canonicalPath,
}) => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const previousCanonical =
      document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';

    document.title = `${title} | PrÃ³ximamente | The Box`;
    upsertMeta('description', description);
    upsertCanonical(canonicalForPath(canonicalPath));

    return () => {
      document.title = previousTitle;
      upsertMeta('description', previousDescription);
      if (previousCanonical) upsertCanonical(previousCanonical);
    };
  }, [title, description, canonicalPath]);

  return (
    <section className="bg-zinc-950 text-zinc-100 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.3em]">PrÃ³ximamente</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
          <p className="mt-6 text-zinc-300 leading-relaxed">{description}</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-sm border border-zinc-800">
          <img
            src="/proximamentetbcd.webp"
            alt={`PrÃ³ximamente: ${title}`}
            className="w-full h-[420px] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

