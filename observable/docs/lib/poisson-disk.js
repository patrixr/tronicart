import { Grid } from "./grid.js"
import { present } from "./helpers.js"

const MAX_ITERATIONS = 100000

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180)
}

function dist(x1, y1, x2, y2) {
  let x = x2 - x1
  let y = y2 - y1
  return Math.sqrt(x * x + y * y)
}

/**
 * Creates an instance of PoissonDiskSampling.
 * @param {Object} config - Configuration object for Poisson Disk Sampling.
 * @param {number} config.radius - Minimum distance between each point.
 * @param {P5} [config.p5=window] - P5 instance to use for drawing and utility functions. Defaults to the global P5 instance.
 * @param {number} [config.width=p5.width] - Width of the surface on which points are to be placed. Defaults to P5 canvas width.
 * @param {number} [config.height=p5.height] - Height of the surface on which points are to be placed. Defaults to P5 canvas height.
 * @param {number} [config.maxRetry=30] - Maximum number of attempts to place a new point before giving up.
 */
export class PoissonDiskSampling {
  constructor(config) {
    this.config = config
    this.points = []
  }

  generate() {
    const {
      p5 = window,
      height = p5.height,
      width = p5.width,
      maxRetry = 30,
      radius = p5.width / 20,
    } = this.config

    const randomInt = (min, max) => {
      if (max === undefined) {
        max = min
        min = 0
      }

      return Math.floor(p5.random() * (max - min + 1) + min)
    }

    const dimensions = 2
    const points = []
    const activePoints = []
    const cellSize = Math.ceil(radius / Math.sqrt(dimensions))
    const cellCountW = Math.ceil(width / cellSize)
    const cellCountH = Math.ceil(height / cellSize)
    const grid = new Grid(cellCountW, cellCountH).fill(null)
    const firstPoint = p5.createVector(
      width / 4 + randomInt(width / 2),
      height / 4 + randomInt(height / 2),
    )

    const isValidPoint = (p) => {
      if (p.x <= 0 || p.x >= width || p.y <= 0 || p.y >= height) {
        return false
      }

      const cellCoord = grid.findCellRelativeToSurface(p.x, p.y, cellSize)

      return grid
        .neighbors(cellCoord.x, cellCoord.y, true)
        .find(
          (n) =>
            present(n.value) && dist(n.value.x, n.value.y, p.x, p.y) <= radius,
        )
        ? false
        : true
    }

    activePoints.push(firstPoint)
    points.push(firstPoint)

    /* safety net */
    let iteractionTracker = MAX_ITERATIONS

    while (activePoints.length > 0) {
      const randidx = randomInt(activePoints.length - 1)
      const point = activePoints[randidx]

      let found = false

      for (let tries = 0; tries < maxRetry; tries++) {
        let theta = randomInt(360)
        let newRadius = randomInt(radius, 2 * radius)
        let pnewx = point.x + newRadius * Math.cos(degreesToRadians(theta))
        let pnewy = point.y + newRadius * Math.sin(degreesToRadians(theta))
        let pnew = p5.createVector(pnewx, pnewy)

        if (isValidPoint(pnew)) {
          /* new point found */
          points.push(pnew)
          activePoints.push(pnew)
          const targetCell = grid.findCellRelativeToSurface(
            pnew.x,
            pnew.y,
            cellSize,
          )
          grid.set(targetCell.x, targetCell.y, pnew)
          found = true
          break
        }
      }

      /* If no point was found after k tries, remove p */
      if (!found) {
        activePoints.splice(randidx, 1)
      }

      /* Small fallback to avoid any drama */
      if (--iteractionTracker <= 0) {
        console.warn(
          `PoissondiskSampling reached max ${MAX_ITERATIONS} iterations and stopped earlier than planned`,
        )
        break
      }
    }
    this.points = points
    return points
  }
}
