import test from 'ava';
import { createCircle } from './circle';

test('Circle intersection with a point', (t) => {
  const circle = createCircle(0, 0, 100);
  t.assert(circle.intersects(0, 0) === true);
  t.assert(circle.intersects(0, 50) === true);
  t.assert(circle.intersects(50, 0) === true);
  t.assert(circle.intersects(25, 25) === true);
  t.assert(circle.intersects(125, 125) === false);
  t.assert(circle.intersects(0, -125) === false);
});

test('Circle intersection with a circle', (t) => {
  const circle = createCircle(0, 0, 100);
  t.assert(circle.intersects(createCircle(0, 0, 100)) === true);
  t.assert(circle.intersects(createCircle(99, 0, 100)) === true);
  t.assert(circle.intersects(createCircle(100, 0, 100)) === true);
  t.assert(circle.intersects(createCircle(101, 0, 100)) === false);
  t.assert(circle.intersects(createCircle(25, 25, 5)) === true);
});
