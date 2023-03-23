import { dist } from './math';

export interface Shape2D {
  intersects(x: number, y: number): boolean;
  kind(): Symbol;
}

export function createCircleShape(centerX: number, centerY: number, diameter: number): Shape2D {
  const radius = diameter / 2;
  const kind = Symbol('Circle');

  return {
    intersects(x, y) {
      return dist(x, y, centerX, centerY) <= radius;
    },
    kind() {
      return kind;
    }
  };
}

export function createRandomShape(x: number, y: number, size: number) {
  return createCircleShape(x, y, size / 2);
}
