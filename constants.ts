
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
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    name: 'High Cube 40ft',
    size: '40ft HC',
    state: 'Nuevo',
    type: 'Arquitectura',
    priceEstimate: 'Desde 4.800€',
    specs: ['Altura Extra (2.9m)', 'Capacidad Superior', 'Estructura Reforzada'],
    imageUrl: 'https://images.unsplash.com/photo-1516387933901-8266444ecdf6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    name: 'Standard 40ft Ocasión',
    size: '40ft',
    state: 'Ocasión',
    type: 'Carga',
    priceEstimate: 'Desde 1.900€',
    specs: ['Grado Cargo Worthy', 'Inspección CSC', 'Entrega Inmediata'],
    imageUrl: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRANSFORMATIONS: TransformationProject[] = [
  {
    id: 't1',
    title: 'Residencia Minimalista X1',
    category: 'Vivienda',
    description: 'Vivienda unifamiliar de 60m² utilizando dos módulos de 40ft HC. Aislamiento térmico de alta densidad y acabados en madera sostenible.',
    imageUrl: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=800',
    features: ['Aislamiento Pro', 'Ventanas Climalit', 'Domótica Integrada']
  },
  {
    id: 't2',
    title: 'The Box Bar & Lounge',
    category: 'Comercial',
    description: 'Unidad pop-up para eventos y hostelería. Aperturas hidráulicas laterales y terraza superior practicable.',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    features: ['Apertura Hidráulica', 'Instalación Eléctrica', 'Terraza Solarium']
  },
  {
    id: 't3',
    title: 'Piscina Infinity Box',
    category: 'Lúdico',
    description: 'Piscina modular fabricada a partir de contenedor de 20ft. Revestimiento interno de fibra de vidrio y depuración oculta.',
    imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800',
    features: ['Filtración Integrada', 'Luz LED RGB', 'Escalera de Acero']
  }
];
