import { ContainerProduct, TransformationProject } from './types';

export const CONTAINERS: ContainerProduct[] = [
  {
    id: 'c1',
    name: 'Standard Cargo 20ft',
    size: '20ft',
    state: 'Nuevo',
    type: 'Carga',
    priceEstimate: 'Desde 2.400€',
    specs: ['Acero Corten', 'Suelo de Madera Naval', 'Cierre de Seguridad'],
    imageUrl: '/3contenedores-20pies-usado.webp'
  },
  {
    id: 'c2',
    name: 'High Cube 40ft',
    size: '40ft HC',
    state: 'Nuevo',
    type: 'Arquitectura',
    priceEstimate: 'Desde 4.800€',
    specs: ['Altura Extra (2.9m)', 'Capacidad Superior', 'Estructura Reforzada'],
    imageUrl: '/contenedor-40pies-nuevo.webp'
  },
  {
    id: 'c3',
    name: 'Standard 40ft Ocasión',
    size: '40ft',
    state: 'Ocasión',
    type: 'Carga',
    priceEstimate: 'Desde 1.900€',
    specs: ['Grado Cargo Worthy', 'Inspección CSC', 'Entrega Inmediata'],
    imageUrl: '/interiorcontenedor-40pies-oneway.webp'
  }
];

export const TRANSFORMATIONS: TransformationProject[] = [
  {
    id: 't1',
    title: 'Residencia Minimalista X1',
    category: 'Vivienda',
    description: 'Vivienda unifamiliar de 60m² utilizando dos módulos de 40ft HC. Aislamiento térmico de alta densidad y acabados en madera sostenible.',
    imageUrl: '/demogym-20metors-nuevo.webp',
    features: ['Aislamiento Pro', 'Ventanas Climalit', 'Domótica Integrada']
  },
  {
    id: 't2',
    title: 'The Box Bar & Lounge',
    category: 'Comercial',
    description: 'Unidad pop-up para eventos y hostelería. Aperturas hidráulicas laterales y terraza superior practicable.',
    imageUrl: '/montañacontenedores.webp',
    features: ['Apertura Hidráulica', 'Instalación Eléctrica', 'Terraza Solarium']
  },
  {
    id: 't3',
    title: 'Piscina Infinity Box',
    category: 'Lúdico',
    description: 'Piscina modular fabricada a partir de contenedor de 20ft. Revestimiento interno de fibra de vidrio y depuración oculta.',
    imageUrl: '/montañacontenedores2.webp',
    features: ['Filtración Integrada', 'Luz LED RGB', 'Escalera de Acero']
  }
];
