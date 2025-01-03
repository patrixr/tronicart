type CellInitializer<T> = (x: number, y: number) => T

type CellCallback<T> = (it: T, x: number, y: number) => any

interface CellRef<T> {
  x: number
  y: number
  value: T
}

interface CellCoord {
  x: number
  y: number
}

export class Grid<T> {
  private width: number
  private height: number
  private items: T[]

  constructor(width: number, height: number, initializer?: CellInitializer<T>) {
    this.width = width
    this.height = height
    const itemLen = width * height
    this.items = new Array(itemLen)

    if (initializer) {
      this.each((_, x, y) => this.set(x, y, initializer(x, y)))
    }
  }

  private idx(x: number, y: number): number {
    return y * this.width + x
  }

  public isValidCoord(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.width && y < this.height
  }

  private assertCoord(x: number, y: number): void {
    if (!this.isValidCoord(x, y)) {
      throw new Error(`Index Out Of Bounds (${x}, ${y})`)
    }
  }

  public get(x: number, y: number): T {
    this.assertCoord(x, y)
    return this.items[this.idx(x, y)]
  }

  public set(x: number, y: number, item: T): void {
    this.assertCoord(x, y)
    this.items[this.idx(x, y)] = item
  }

  public *rowIterator(): Generator<T[]> {
    for (let y = 0; y < this.height; ++y) {
      const leftIdx = this.idx(0, y)
      const rightIdx = this.idx(this.width, y)
      yield this.items.slice(leftIdx, rightIdx)
    }
  }

  public rows(): T[][] {
    return [...this.rowIterator()]
  }

  public each(cb: CellCallback<T>): void {
    for (let x = 0; x < this.width; ++x) {
      for (let y = 0; y < this.height; ++y) {
        cb(this.get(x, y), x, y)
      }
    }
  }

  public neighbors(x: number, y: number, includeSelf = false): CellRef<T>[] {
    const adjacent: CellCoord[] = [
      { x: x - 1, y: y - 1 },
      { x, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y },
      { x: x + 1, y },
      { x: x - 1, y: y + 1 },
      { x, y: y + 1 },
      { x: x + 1, y: y + 1 },
    ]

    const cells = includeSelf ? [...adjacent, { x, y }] : adjacent

    return cells
      .filter(({ x, y }) => this.isValidCoord(x, y))
      .map(({ x, y }) => ({
        x,
        y,
        value: this.get(x, y),
      }))
  }

  public fill(value: T): Grid<T> {
    this.items.fill(value)
    return this
  }

  public findCellRelativeToSurface(
    realX: number,
    realY: number,
    cellSize: number,
  ): CellCoord {
    return {
      x: Math.floor(realX / cellSize),
      y: Math.floor(realY / cellSize),
    }
  }
}
