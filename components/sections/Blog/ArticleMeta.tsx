import React from 'react';
import { PATHS, routeByPath } from '../../../site.config.mjs';

type ArticleMetaProps = {
  path: string;
};

type ArticleReference = {
  name: string;
  url: string;
};

const formatEditorialDate = (value: string) =>
  new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));

export const ArticleMeta: React.FC<ArticleMetaProps> = ({ path }) => {
  const article = routeByPath(path);

  if (!article || article.type !== 'article') {
    throw new Error(`No existe configuración editorial para ${path}`);
  }

  const published = article.datePublished;
  const modified = article.dateModified;

  return (
    <div className="mb-8 flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-500">
    <span>
      Por{' '}
      <a rel="author" href={PATHS.editorial} className="text-zinc-300 hover:text-orange-500">
        Equipo editorial de The Box
      </a>
    </span>
    <span aria-hidden="true">·</span>
    <span>
      Publicado el <time dateTime={published}>{formatEditorialDate(published)}</time>
    </span>
    {modified && modified !== published && (
      <>
        <span aria-hidden="true">·</span>
        <span>
          Actualizado el <time dateTime={modified}>{formatEditorialDate(modified)}</time>
        </span>
      </>
    )}
    </div>
  );
};

export const ArticleReferences: React.FC<{ items: ArticleReference[] }> = ({ items }) => (
  <section aria-labelledby="article-references" className="my-12 border-t border-zinc-800 pt-8">
    <h2 id="article-references" className="mb-4 text-2xl font-extrabold text-white">
      Fuentes y referencias
    </h2>
    <ul className="list-disc space-y-2 pl-6 text-zinc-300">
      {items.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 underline decoration-zinc-700 underline-offset-4 hover:text-orange-300"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </section>
);
