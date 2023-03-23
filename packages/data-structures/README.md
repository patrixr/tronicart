# @tronicart/data-structures

`@tronicart/data-structures` is a TypeScript npm package that provides reusable data structures used for creative coding. Currently, it only provides one data structure called `Grid`.

## `Grid`

A `Grid` is a two-dimensional data structure that stores values in a grid-like layout. It provides methods to get and set values at specific coordinates, iterate over its rows, and get the neighbors of a cell. Here is the type definition for `Grid`:

```typescript
export type Grid<T> = {
  get(x: number, y: number): T;
  set(x: number, y: number, item: T): void;
  rowIterator(): Generator<T[]>;
  rows(): T[][];
  each(cb: CellCallback<T>): void;
  neighbors(x: number, y: number, includeSelf?: boolean): CellRef<T>[];
  fill(value: T): Grid<T>;
  findCellRelativeToSurface(
    realX: number,
    realY: number,
    cellSize: number
  ): { x: number; y: number };
};
```

### Creating a grid

The `createGrid` function creates a new `Grid<T>` with the specified `width` and `height`. If `initializer` is provided, it will be called for each cell in the grid to set its initial value. The `initializer` should be a function that takes the `x` and `y` coordinates of a cell as arguments and returns an initial `T` value.

```typescript
export function createGrid<T>(
  width: number,
  height: number,
  initializer?: CellInitializer<T>
): Grid<T>;
```

### Methods

#### `get(x: number, y: number): T`

Returns the value at the specified `x` and `y` coordinates.

#### `set(x: number, y: number, item: T): void`

Sets the value at the specified `x` and `y` coordinates to `item`.

#### `rowIterator(): Generator<T[]>`

Returns a generator that iterates over the rows of the grid, yielding an array of values for each row.

#### `rows(): T[][]`

Returns an array of arrays that represent the rows of the grid.

#### `each(cb: CellCallback<T>): void`

Calls the `cb` function for each cell in the grid, passing the cell value, `x`, and `y` coordinates as arguments.

#### `neighbors(x: number, y: number, includeSelf = false): CellRef<T>[]`

Returns an array of neighbor `CellRef<T>` objects for the cell at the specified `x` and `y` coordinates. If `includeSelf` is `true`, the array will include the cell itself.

#### `fill(value: T): Grid<T>`

Sets every cell in the grid to the specified `value`.

#### `findCellRelativeToSurface(realX: number, realY: number, cellSize: number): { x: number; y: number }`

Returns the `(x, y)` indices of the cell in the grid that contains the point `(realX, realY)`, where `realX` and `realY` are measured in pixels and `cellSize` is the size of each cell in the grid.

## License

This package is licensed under the MIT License.
