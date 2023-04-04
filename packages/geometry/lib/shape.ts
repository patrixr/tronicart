import { createCircle } from './circle';

export enum Object2DKind {
  Circle,
  Line
}

export interface Object2D {
  intersects(x: number, y: number): boolean;
  intersects(shape: Object2D): boolean;
  kind(): Object2DKind;
}

export type IntersectionMethod = Object2D['intersects'];
