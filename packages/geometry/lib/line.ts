import { pointInLine } from './intersections';
import { IntersectionMethod, Object2D, Object2DKind } from './shape';

export interface Line extends Object2D {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
}

/**
 * Type guard for circles
 *
 * @export
 * @param {Object2D} shape
 * @return {*}  {shape is Circle}
 */
export function isLine(shape: Object2D): shape is Line {
  return shape.kind() === Object2DKind.Line;
}

/**
 * Create a line
 *
 * @export
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {*}  {Line}
 */
export function createLineShape(x1: number, y1: number, x2: number, y2: number): Line {
  const kind = () => Object2DKind.Line;

  const intersects: IntersectionMethod = (
    shapeOrX: number | Object2D,
    maybeY?: number
  ): boolean => {
    if (typeof shapeOrX === 'number') {
      const pointx = shapeOrX;
      const pointy = maybeY;
      return pointInLine({ x: x1, y: y1 }, { x: x2, y: y2 }, { x: pointx, y: pointy });
    }

    const shape = shapeOrX;

    throw new Error('To implement intersection with ' + shape.kind());
  };

  return {
    x1,
    y1,
    x2,
    y2,
    intersects,
    kind
  };
}
