/**
 * Initializes a cell with a value based on its coordinates.
 * @callback CellInitializer
 * @param {number} x - The x-coordinate of the cell.
 * @param {number} y - The y-coordinate of the cell.
 * @returns {T} The initial value for the cell.
 */

/**
 * Performs an action on a cell with its coordinates.
 * @callback CellCallback
 * @param {T} it - The current cell's value.
 * @param {number} x - The x-coordinate of the cell.
 * @param {number} y - The y-coordinate of the cell.
 * @returns {any}
 */

/**
 * Represents a reference to a cell with its coordinates and value.
 * @typedef {Object} CellRef
 * @property {number} x - The x-coordinate of the cell.
 * @property {number} y - The y-coordinate of the cell.
 * @property {T} value - The value of the cell.
 */

/**
 * Represents a grid of items of generic type T.
 * @template T
 */
export class Grid {
  /**
   * Creates an instance of the Grid class.
   * @param {number} width - The width of the grid.
   * @param {number} height - The height of the grid.
   * @param {CellInitializer<T>} [initializer] - An optional initializer function.
   */
  constructor(width, height, initializer) {
    this.width = width
    this.height = height
    const itemLen = width * height
    this.items = new Array(itemLen)

    if (initializer) {
      this.each((_, x, y) => this.set(x, y, initializer(x, y)))
    }
  }

  /**
   * Converts x, y coordinates to an index in the items array.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {number} The index of the cell in the items array.
   */
  idx(x, y) {
    return y * this.width + x
  }

  /**
   * Checks if the coordinates are within the bounds of the grid.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {boolean} True if the coordinates are valid, false otherwise.
   */
  isValidCoord(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height
  }

  /**
   * Asserts that the given coordinates are within the bounds of the grid.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  assertCoord(x, y) {
    if (!this.isValidCoord(x, y)) {
      throw new Error(`Index Out Of Bounds (${x}, ${y})`)
    }
  }

  /**
   * Retrieves the value of a cell at the given coordinates.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {T} The value of the cell.
   */
  get(x, y) {
    this.assertCoord(x, y)
    return this.items[this.idx(x, y)]
  }

  /**
   * Sets the value of a cell at the given coordinates.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @param {T} item - The new value for the cell.
   */
  set(x, y, item) {
    this.assertCoord(x, y)
    this.items[this.idx(x, y)] = item
  }

  /**
   * Iterator for the rows of the grid.
   * @returns {Generator<T[]>} A generator that yields arrays of cells for each row.
   */
  *rowIterator() {
    for (let y = 0; y < this.height; ++y) {
      const leftIdx = this.idx(0, y)
      const rightIdx = this.idx(this.width, y)
      yield this.items.slice(leftIdx, rightIdx)
    }
  }

  /**
   * Returns an array of all the rows in the grid.
   * @returns {Array<T[]>} An array of rows, each row is an array of cell values.
   */
  rows() {
    return [...this.rowIterator()]
  }

  /**
   * Executes a callback function for each cell in the grid.
   * @param {CellCallback<T>} cb - The callback to execute.
   */
  each(cb) {
    for (let x = 0; x < this.width; ++x) {
      for (let y = 0; y < this.height; ++y) {
        cb(this.get(x, y), x, y)
      }
    }
  }

  /**
   * Retrieves all neighboring cells of a given cell, optionally including the cell itself.
   * @param {number} x - The x-coordinate of the cell.
   * @param {number} y - The y-coordinate of the cell.
   * @param {boolean} [includeSelf=false] - Whether to include the cell itself in the results.
   * @returns {CellRef<T>[]} An array of cell references for all neighbors.
   */
  neighbors(x, y, includeSelf = false) {
    const adjacent = [
      { x: x - 1, y: y - 1 },
      { x: x, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y: y },
      { x: x + 1, y: y },
      { x: x - 1, y: y + 1 },
      { x: x, y: y + 1 },
      { x: x + 1, y: y + 1 },
    ]

    const cells = includeSelf ? [...adjacent, { x, y }] : adjacent

    return cells
      .filter(({ x, y }) => this.isValidCoord(x, y))
      .map(({ x, y }) => {
        return {
          x,
          y,
          value: this.get(x, y),
        }
      })
  }

  /**
   * Fills the entire grid with a specific value.
   * @param {T} value - The value to fill the grid with.
   * @returns {Grid<T>} The grid instance for chaining.
   */
  fill(value) {
    this.items.fill(value)
    return this
  }

  /**
   * Finds the cell coordinates relative to a surface point and cell size.
   * @param {number} realX - The x-coordinate on the surface.
   * @param {number} realY - The y-coordinate on the surface.
   * @param {number} cellSize - The size of each cell.
   * @returns {{x: number, y: number}} The coordinates of the cell.
   */
  findCellRelativeToSurface(realX, realY, cellSize) {
    return {
      x: Math.floor(realX / cellSize),
      y: Math.floor(realY / cellSize),
    }
  }
}
