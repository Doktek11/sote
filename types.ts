
export type ContainerSize = '20ft' | '40ft' | '40ft HC';
export type ContainerState = 'Nuevo' | 'Ocasión';
export type ProjectType = 'Carga' | 'Arquitectura' | 'Refrigerado';

export interface ContainerProduct {
  id: string;
  name: string;
  size: ContainerSize;
  state: ContainerState;
  type: ProjectType;
  priceEstimate: string;
  specs: string[];
  imageUrl: string;
}

export interface TransformationProject {
  id: string;
  title: string;
  category: 'Vivienda' | 'Comercial' | 'Lúdico';
  description: string;
  imageUrl: string;
  features: string[];
}
