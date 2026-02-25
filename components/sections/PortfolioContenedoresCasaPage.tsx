import React from 'react';
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
    description: `META TITLE (≤60)

Casa contenedor en España | Precio y modelo Residencia X1

META DESCRIPTION (≤155)

Casa contenedor en España fabricada con contenedor marítimo reforzado. Diseño minimalista, cumplimiento CTE y proyecto personalizado.

H1
Casa contenedor en España – Modelo residencial Minimalista X1
H2
Vivienda modular fabricada con contenedor marítimo en España

La Residencia Minimalista X1 es una casa contenedor en España desarrollada a partir de un contenedor marítimo estructuralmente reforzado y adaptado a uso residencial conforme al Código Técnico de la Edificación (CTE).

Fabricada en España bajo criterios de construcción industrializada, esta vivienda combina:

Arquitectura contemporánea

Control estructural certificado

Eficiencia energética optimizada

Costes predecibles desde fase inicial

No se trata de una solución prefabricada estándar, sino de una vivienda con contenedor marítimo calculada para uso residencial legal en España.

Es ideal como:

Primera residencia

Segunda vivienda

Casa con contenedor marítimo para alquiler turístico

Inversión inmobiliaria de alta ocupación

📲 Solicita información técnica y estudio preliminar por WhatsApp: 657 34 80 78

H2
Proyecto de casa contenedor totalmente personalizado

Cada vivienda modular con contenedor se desarrolla considerando:

Parcela y orientación

Normativa urbanística local

Requisitos estructurales específicos

Necesidades energéticas

Distribución interior personalizada

Integramos:

Aislamiento térmico y acústico reforzado

Carpintería exterior de altas prestaciones

Adaptación estructural calculada por ingeniería

Cumplimiento explícito del CTE

Fabricación y transformación en España

Cada proyecto se analiza técnicamente antes de presupuestar.
No trabajamos con soluciones genéricas ni importaciones estándar sin adaptar.

H2
Precio de casa contenedor en España: diseño, control y eficiencia

Si estás comparando el precio de una casa contenedor en España, es importante entender qué incluye realmente cada propuesta.

La Residencia X1 ofrece equilibrio entre:

Diseño minimalista optimizado

Rapidez de ejecución

Ingeniería estructural adaptada a vivienda

Construcción industrializada precisa

Control real de costes en obra

El precio final dependerá de:

Superficie total

Número de módulos

Acabados seleccionados

Cimentación

Transporte e implantación

Antes de decidir solo por precio, es clave evaluar el alcance técnico completo del proyecto.

💬 Pide presupuesto preliminar y estudio de viabilidad por WhatsApp: 657 34 80 78

H3
Especificaciones técnicas del modelo Residencia X1

Tipo de módulo: Contenedor marítimo 20 pies

Superficie útil: 12,5 m²

Altura interior libre: 2,18 m

Estructura: Contenedor marítimo reforzado estructuralmente

Sistema constructivo: Adaptado a uso residencial en España

Aislamiento: Optimizado para eficiencia energética

Instalaciones: Preparadas para bajo consumo

Entrega: Opción llave en mano

(El peso final dependerá de configuración y acabados seleccionados.)

H2
¿Por qué elegir una casa contenedor como vivienda en España?

Una vivienda fabricada con contenedor marítimo bien diseñada permite:

Reducción significativa de tiempos de obra

Mayor previsibilidad presupuestaria

Construcción industrializada con precisión estructural

Estética contemporánea adaptable

Control técnico desde fase inicial

La diferencia real no está solo en el módulo marítimo, sino en:

La ingeniería aplicada

El refuerzo estructural

El cumplimiento normativo

La adaptación al CTE

La correcta implantación en parcela

CTA FINAL – Contacto técnico directo

Si estás valorando construir una casa contenedor en España, el siguiente paso es analizar tu parcela y objetivos concretos.

📲 Contacta directamente por WhatsApp: 657 34 80 78
Consulta técnica sin compromiso.`,
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
