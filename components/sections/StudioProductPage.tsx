import React from 'react';
import { useRouteSeo } from '../../seo';

type StudioProductPageProps = {
  title: string;
  category: string;
  price: string;
  heroImage: string;
  description: string;
  sections?: {
    heading: string;
    level?: 2 | 3;
    body: string[];
    bullets?: string[];
  }[];
  seoText: string[];
  highlights: string[];
  gallery: string[];
};

export const StudioProductPage: React.FC<StudioProductPageProps> = ({
  title,
  category,
  price,
  heroImage,
  description,
  sections,
  seoText,
  highlights,
  gallery,
}) => {
  useRouteSeo(window.location.pathname);

  return (
    <section className="bg-zinc-950 text-zinc-100 pt-36 pb-20">
      <div className="container mx-auto px-6">
        <a href="/#studio" className="text-orange-500 font-mono text-xs uppercase tracking-widest hover:text-orange-400">
          ← Volver al estudio
        </a>

        <header className="mt-6 max-w-4xl">
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.3em]">{category}</p>
          <h1 className="text-4xl md:text-6xl mt-4 font-bold tracking-tight">{title}</h1>
          <p className="text-orange-500 text-xl md:text-2xl mt-6 font-semibold">{price}</p>
          <p className="text-zinc-300 mt-6 leading-relaxed">{description}</p>
        </header>

        <div className="mt-10 rounded-sm overflow-hidden border border-zinc-800 aspect-[16/9] bg-zinc-900">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="eager" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <article className="lg:col-span-2 space-y-6">
            {sections && sections.length > 0 ? (
              sections.map((section, index) => {
                const HeadingTag = section.level === 3 ? 'h3' : 'h2';
                return (
                  <div key={`${section.heading}-${index}`} className="space-y-4">
                    <HeadingTag className="text-2xl md:text-3xl font-bold text-white">
                      {section.heading}
                    </HeadingTag>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-zinc-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })
            ) : (
              seoText.map((paragraph) => (
                <p key={paragraph} className="text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))
            )}
          </article>

          <aside className="border border-zinc-800 rounded-sm p-6 h-fit bg-zinc-900/50">
            <h2 className="text-lg font-semibold">Características destacadas</h2>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="text-zinc-300 text-sm">• {item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {gallery.map((image, index) => (
            <div key={index} className="rounded-sm overflow-hidden border border-zinc-800 aspect-[16/9] bg-zinc-900">
              <img src={image} alt={`${title} detalle ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioProductPage;




