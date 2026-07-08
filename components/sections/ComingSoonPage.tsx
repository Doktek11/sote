import React from 'react';
import { useRouteSeo } from '../../seo';

type ComingSoonPageProps = {
  title: string;
  description: string;
  canonicalPath: string;
};

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title,
  description,
  canonicalPath,
}) => {
  useRouteSeo(canonicalPath);

  return (
    <section className="bg-zinc-950 text-zinc-100 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.3em]">Próximamente</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
          <p className="mt-6 text-zinc-300 leading-relaxed">{description}</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-sm border border-zinc-800">
          <img
            src="/proximamentetbcd.webp"
            alt={`Próximamente: ${title}`}
            className="w-full h-[420px] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
