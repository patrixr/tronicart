import test from 'ava';
import { createLineShape } from './line';

test('Line intersection with a point', (t) => {
  t.assert(createLineShape(0, 1, 1, 0).intersects(0.5, 0.5) === true);
  t.assert(createLineShape(0, 0, 0, 100).intersects(0, 50) === true);
  t.assert(createLineShape(0, 0, 0, 100).intersects(0, 20) === true);
  t.assert(createLineShape(0, 0, 0, 100).intersects(0, 120) === false);
  t.assert(createLineShape(0, 0, 100, 100).intersects(120, 120) === false);
  t.assert(createLineShape(0, 0, 100, 100).intersects(3, 3) === true);
});
