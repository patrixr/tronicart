import { RandomFunction } from '@tronicart/lang-helpers';
import { createCircle } from './circle';
import { createLineShape } from './line';
import { Object2DKind } from './shape';

export const objectFactories = {
  [Object2DKind.Circle]: createCircle,
  [Object2DKind.Line]: createLineShape
};

export function createRandomShape(
  x: number,
  y: number,
  size: number,
  random: RandomFunction = Math.random
) {
  const keys = Object.keys(objectFactories);
  const key = keys[Math.floor(random() * keys.length)];
  return objectFactories[key](x, y, size);
}
