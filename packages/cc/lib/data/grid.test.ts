import test from 'ava';
import { createGrid } from './grid';

test('we can set/get grid items', (t) => {
  const grid = createGrid<string>(4, 4);

  t.assert(grid.get(2, 2) === undefined);
  grid.set(2, 2, 'hi');
  t.assert(grid.get(2, 2) === 'hi');
});

test('grid throws when requesting items out of bounds', (t) => {
  const grid = createGrid<string>(4, 4);
  t.assert(grid.get(2, 2) === undefined);
  t.throws(() => {
    grid.get(2, 4);
  });
});

test('iterating through rows', (t) => {
  const grid = createGrid<string>(3, 3);

  // First row
  grid.set(0, 0, 'a');
  grid.set(1, 0, 'b');
  grid.set(2, 0, 'c');
  // Second row
  grid.set(0, 1, 'd');
  grid.set(1, 1, 'e');
  grid.set(2, 1, 'f');
  // Third row
  grid.set(0, 2, 'h');
  grid.set(1, 2, 'i');
  grid.set(2, 2, 'j');

  const gen = grid.rowIterator();

  t.deepEqual(gen.next().value, ['a', 'b', 'c']);
  t.deepEqual(gen.next().value, ['d', 'e', 'f']);
  t.deepEqual(gen.next().value, ['h', 'i', 'j']);
  t.assert(gen.next().done);
});

test('listing rows', (t) => {
  const grid = createGrid<string>(3, 3);

  // First row
  grid.set(0, 0, 'a');
  grid.set(1, 0, 'b');
  grid.set(2, 0, 'c');
  // Second row
  grid.set(0, 1, 'd');
  grid.set(1, 1, 'e');
  grid.set(2, 1, 'f');
  // Third row
  grid.set(0, 2, 'h');
  grid.set(1, 2, 'i');
  grid.set(2, 2, 'j');

  t.deepEqual(grid.rows(), [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['h', 'i', 'j']
  ]);
});

test('grid initializer', (t) => {
  const grid = createGrid<string>(2, 2, (x, y) => x + '-' + y);
  t.deepEqual(grid.rows(), [
    ['0-0', '1-0'],
    ['0-1', '1-1']
  ]);
});
