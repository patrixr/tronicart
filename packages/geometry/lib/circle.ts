import { dist } from './math';
import { IntersectionMethod, Object2D, Object2DKind } from './shape';

export interface Circle extends Object2D {
  readonly x: number;
  readonly y: number;
  readonly diameter: number;
  readonly radius: number;
}

/**
 * Type guard for circles
 *
 * @export
 * @param {Object2D} shape
 * @return {*}  {shape is Circle}
 */
export function isCircle(shape: Object2D): shape is Circle {
  return shape.kind() === Object2DKind.Circle;
}

/**
 * Create a circle shape
 *
 * @export
 * @param {number} x center x
 * @param {number} y center y
 * @param {number} diameter diameter of the circle
 * @return {*}  {Circle}
 */
export function createCircle(x: number, y: number, diameter: number): Circle {
  const radius = diameter / 2;

  const kind = () => Object2DKind.Circle;

  const intersects: IntersectionMethod = (
    shapeOrX: number | Object2D,
    maybeY?: number
  ): boolean => {
    if (typeof shapeOrX === 'number') {
      const px = shapeOrX;
      const py = maybeY;
      return dist(x, y, px, py) <= radius;
    }

    const shape = shapeOrX;

    if (isCircle(shape)) {
      return dist(x, y, shape.x, shape.y) <= radius + shape.radius;
    }

    throw new Error('To implement intersection with ' + shape.kind());
  };

  return {
    radius,
    diameter,
    intersects,
    kind,
    x,
    y
  };
}
