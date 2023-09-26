import test from 'ava';
import { createNumericTween, createTween } from './tween';

test('raw tween increments', (t) => {
  const tween = createTween((pct) => ({ value: pct * 100 }));

  tween.delta(0.25);

  t.deepEqual(tween.value(), { value: 0 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 25 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 50 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 75 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 100 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 100 });
});

test('reversed tween increments', (t) => {
  const tween = createTween((pct) => ({ value: pct * 100 }));

  tween.delta(0.25);
  tween.reverse();

  t.deepEqual(tween.value(), { value: 100 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 75 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 50 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 25 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 0 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 0 });
});

test('reversed halfwa tween increments', (t) => {
  const tween = createTween((pct) => ({ value: pct * 100 }));

  tween.delta(0.25);

  t.deepEqual(tween.value(), { value: 0 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 25 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 50 });
  tween.reverse();
  tween.incr();
  t.deepEqual(tween.value(), { value: 25 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 0 });
  tween.incr();
  t.deepEqual(tween.value(), { value: 0 });
});

test('numeric tween', (t) => {
  const tween = createNumericTween(100, 200, 0.25);

  t.assert(tween.value() === 100);
  tween.incr();
  t.assert(tween.value() === 125);
  tween.incr();
  t.assert(tween.value() === 150);
  tween.incr();
  t.assert(tween.value() === 175);
  tween.incr();
  t.assert(tween.value() === 200);
});

test('numeric tween with objects', (t) => {
  const tween = createNumericTween({ x: 100, y: 100 }, { x: 200, y: 300 }, 0.25);

  t.assert(tween.value().x === 100);
  t.assert(tween.value().y === 100);
  tween.incr();
  t.assert(tween.value().x === 125);
  t.assert(tween.value().y === 150);
  tween.incr();
  t.assert(tween.value().x === 150);
  t.assert(tween.value().y === 200);
  tween.incr();
  t.assert(tween.value().x === 175);
  t.assert(tween.value().y === 250);
  tween.incr();
  t.assert(tween.value().x === 200);
  t.assert(tween.value().y === 300);
});
