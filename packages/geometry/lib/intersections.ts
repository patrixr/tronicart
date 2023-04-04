// import { Shape2D, ShapeType } from './shape';

import { IVector } from './math';

// export type IntersectionFormula<A extends Shape2D, B extends Shape2D> = (s1: A, s2: B) => boolean;

// export const formulas: Record<string, IntersectionFormula<Shape2D, Shape2D>> = {};

// export type Klass<T> = { new (...args: any[]): T };

// export function getIntersectionFormula<A extends Shape2D, B extends Shape2D>(
//   shape1: A,
//   shape2: B
// ): IntersectionFormula<A, B> {
//   const key1 = `${shape1.kind()}x${shape2.kind()}`;
//   const key2 = `${shape2.kind()}x${shape1.kind()}`;
// }

// export function registerIntersectionFormula(type1: ShapeType, type2: ShapeType) {
//   const key1 = `${shape1.kind()}x${shape2.kind()}`;
//   const key2 = `${shape2.kind()}x${shape1.kind()}`;
// }

/**
 * Source: https://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment
 *
 * @param {IVector} linePnt1
 * @param {IVector} linePnt2
 * @param {IVector} pnt
 * @param {number} [lineThickness=2]
 * @return {*}
 */
export function pointInLine(linePnt1: IVector, linePnt2: IVector, pnt: IVector, lineThickness = 1) {
  var L2 =
    (linePnt2.x - linePnt1.x) * (linePnt2.x - linePnt1.x) +
    (linePnt2.y - linePnt1.y) * (linePnt2.y - linePnt1.y);
  if (L2 == 0) return false;
  var r =
    ((pnt.x - linePnt1.x) * (linePnt2.x - linePnt1.x) +
      (pnt.y - linePnt1.y) * (linePnt2.y - linePnt1.y)) /
    L2;

  //Assume line thickness is circular
  if (r < 0) {
    //Outside line1
    return (
      Math.sqrt(
        (linePnt1.x - pnt.x) * (linePnt1.x - pnt.x) + (linePnt1.y - pnt.y) * (linePnt1.y - pnt.y)
      ) <= lineThickness
    );
  } else if (0 <= r && r <= 1) {
    //On the line segment
    var s =
      ((linePnt1.y - pnt.y) * (linePnt2.x - linePnt1.x) -
        (linePnt1.x - pnt.x) * (linePnt2.y - linePnt1.y)) /
      L2;
    return Math.abs(s) * Math.sqrt(L2) <= lineThickness;
  } else {
    //Outside line2
    return (
      Math.sqrt(
        (linePnt2.x - pnt.x) * (linePnt2.x - pnt.x) + (linePnt2.y - pnt.y) * (linePnt2.y - pnt.y)
      ) <= lineThickness
    );
  }
}
