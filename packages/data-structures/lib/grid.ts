export type CellInitializer<T> = (x: number, y: number) => T;

export type CellCallback<T> = (it: T, x: number, y: number) => any;

export type CellRef<T> = {
  x: number;
  y: number;
  value: T;
};

export type Grid<T> = {
  get(x: number, y: number): T;
  set(x: number, y: number, item: T): void;
  rowIterator(): Generator<T[]>;
  rows(): Array<T[]>;
  each(cb: CellCallback<T>): void;
  neighbors(x: number, y: number, includeSelf?: boolean): CellRef<T>[];
  fill(value: T): Grid<T>;
  findCellRelativeToSurface(
    realX: number,
    realY: number,
    cellSize: number
  ): { x: number; y: number };
};

/**
 * Create a 2D grid with access functions
 *
 * @export
 * @template T
 * @param {number} width
 * @param {number} height
 * @return {*}  {Grid<T>}
 */
export function createGrid<T>(
  width: number,
  height: number,
  initializer?: CellInitializer<T>
): Grid<T> {
  const itemLen = width * height;
  const items: T[] = new Array<T>(itemLen);
  const idx = (x: number, y: number) => y * width + x;

  function isValidCoord(x: number, y: number) {
    return x >= 0 && y >= 0 && x < width && y < height;
  }

  function assertCoord(x: number, y: number) {
    if (!isValidCoord(x, y)) {
      throw new Error(`Index Out Of Bounds (${x}, ${y})`);
    }
  }

  function get(x, y) {
    assertCoord(x, y);
    return items[idx(x, y)];
  }

  function set(x, y, it) {
    assertCoord(x, y);
    items[idx(x, y)] = it;
  }

  function* rowIterator(): Generator<T[]> {
    for (let y = 0; y < height; ++y) {
      const leftIdx = idx(0, y);
      const rightIdx = idx(width, y);
      yield items.slice(leftIdx, rightIdx);
    }
  }

  function each(cb: CellCallback<T>) {
    for (let x = 0; x < width; ++x) {
      for (let y = 0; y < height; ++y) {
        cb(get(x, y), x, y);
      }
    }
  }

  function neighbors(x: number, y: number, includeSelf = false): CellRef<T>[] {
    const adjacent = [
      { x: x - 1, y: y - 1 },
      { x: x, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y: y },
      { x: x + 1, y: y },
      { x: x - 1, y: y + 1 },
      { x: x, y: y + 1 },
      { x: x + 1, y: y + 1 }
    ];

    const cells = includeSelf ? [...adjacent, { x, y }] : adjacent;

    return cells
      .filter(({ x, y }) => isValidCoord(x, y))
      .map(({ x, y }) => {
        return {
          x,
          y,
          value: get(x, y)
        };
      });
  }

  function fill(value: T): Grid<T> {
    items.fill(value);
    return this;
  }

  function findCellRelativeToSurface(realX: number, realY: number, cellSize: number) {
    return {
      x: Math.floor(realX / cellSize),
      y: Math.floor(realY / cellSize)
    };
  }

  if (initializer) {
    each((_, x, y) => set(x, y, initializer(x, y)));
  }

  return {
    get,
    set,
    rowIterator,
    each,
    neighbors,
    fill,
    findCellRelativeToSurface,
    rows: () => [...rowIterator()]
  };
}
