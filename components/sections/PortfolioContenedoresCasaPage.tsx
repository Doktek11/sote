imimport React from 'react';
import { ArrowUpRight } from 'lucide-react';

type PortfolioFamily = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  href: string;
};

const PORTFOLIO_FAMILIES: PortfolioFamily[] = [
  {
    id: 'p1',
    title: 'Residencia Minimalista X1 en Contenedor',
    category: 'Vivienda modular',
    description:
      'Casa contenedor premium con diseño minimalista, distribución flexible y acabados de alta gama para proyecto residencial a medida.',
    imageUrl: '/demogym-20metors-nuevo.webp',
    href: '/estudio/residencia-minimalista-contenedor',
  },
  {
    id: 'p2',
    title: 'The Box Bar & Lounge para eventos',
    category: 'Espacio comercial',
    description:
      'Contenedor transformado para hostelería y eventos, con aperturas comerciales y configuración adaptable para pop-ups y activaciones.',
    imageUrl: '/montañacontenedores.webp',
    href: '/estudio/bar-lounge-contenedor-eventos',
  },
  {
    id: 'p3',
    title: 'Piscina Infinity Box de contenedor',
    category: 'Solución lúdica exterior',
    description:
      'Piscina modular sobre contenedor marítimo, pensada para instalación rápida en vivienda, hotel o espacio turístico.',
    imageUrl: '/montañacontenedores2.webp',
    href: '/estudio/piscina-infinity-box-contenedor',
  },
  {
    id: 'p4',
    title: 'Gimnasio en contenedor de 20 pies',
    category: 'Fitness modular',
    description:
      'Formato compacto desde 20 pies con ventanal frontal de aluminio, ventilación integrada y espacio interior luminoso.',
    imageUrl: '/contenedorabierto-real-20pies-nuevo.webp',
    href: '/estudio/gimnasio-contenedor-20-pies',
  },
];

export const portfolioContenedoresCasaPath = '/portfolio-contenedores-casa';

export const PortfolioContenedoresCasaPage: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-20 md:py-24">
      <div className="container mx-auto px-6">
        <header className="mb-12 md:mb-16">
          <span className="font-mono text-zinc-500 text-xs md:text-sm uppercase tracking-[0.25em]">
            Portfolio Contenedores Casa
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-light tracking-tight text-white">
            Familias de diseño y transformaciones
          </h1>
          <p className="mt-6 max-w-3xl text-zinc-400 leading-relaxed">
            Página intermedia para centralizar todas las familias de producto del estudio. Aquí puedes ampliar el catálogo en el futuro sin
            perder la selección destacada de 4 familias en portada.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PORTFOLIO_FAMILIES.map((family) => (
            <article key={family.id} className="group border border-zinc-800 bg-zinc-900/40 overflow-hidden">
              <a href={family.href} className="block" aria-label={`Ver detalle de ${family.title}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={family.imageUrl}
                    alt={family.title}
                    className="h-full w-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-500">{family.category}</span>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{family.title}</h2>
                    <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-white" />
                  </div>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{family.description}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
