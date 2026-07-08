import React from 'react';
import { ChevronRight } from 'lucide-react';
import { breadcrumbsForPath } from '../site.config.mjs';

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  path: string;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path }) => {
  const configuredItems = breadcrumbsForPath(path) as BreadcrumbItem[];
  const items =
    configuredItems.length > 0
      ? configuredItems
      : [
          { name: 'Inicio', path: '/' },
          { name: 'Página no encontrada', path },
        ];

  return (
    <nav
      aria-label="Migas de pan"
      className="absolute left-0 right-0 top-32 z-30 px-6 md:top-24"
    >
      <ol className="container mx-auto flex max-w-6xl flex-wrap items-center gap-2 text-xs text-zinc-500">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <React.Fragment key={`${item.path}-${item.name}`}>
              {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
              <li>
                {isCurrent ? (
                  <span aria-current="page" className="text-zinc-300">
                    {item.name}
                  </span>
                ) : (
                  <a href={item.path} className="transition-colors hover:text-orange-500">
                    {item.name}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
