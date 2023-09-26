import { IVector } from '@tronicart/cc/types';
import { IsometricObject, IsoObjectTypes } from './world';

export type PlaneProps = {};

export const createPlane = (size: number, props: PlaneProps): IsometricObject => {
  const quad: IVector[] = [{ x: 0, y: 0 }];
  for (let angle = Math.PI / 6; angle < Math.PI; angle += Math.PI / 3) {
    quad.push({
      x: Math.cos(angle) * size,
      y: Math.sin(angle) * size
    });
  }

  return {
    quads: 1,
    type: IsoObjectTypes.Plane,
    draw(p5) {
      p5.stroke(0, 0, 0);
      p5.fill(255, 255, 80, 50);
      p5.quad(
        quad[0].x,
        quad[0].y,
        quad[1].x,
        quad[1].y,
        quad[2].x,
        quad[2].y,
        quad[3].x,
        quad[3].y
      );
    }
  };
};
