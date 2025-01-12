import { Grid } from "./grid"
import { present } from "./helpers"
import P5 from "p5"

const MAX_ITERATIONS = 100000

interface PoissonConfig {
  radius: number
  p5?: P5
  width?: number
  height?: number
  maxRetry?: number
}

function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

function dist(x1: number, y1: number, x2: number, y2: number): number {
  const x = x2 - x1
  const y = y2 - y1
  return Math.sqrt(x * x + y * y)
}

export class PoissonDiskSampling {
  private config: PoissonConfig
  public points: P5.Vector[]

  constructor(config: PoissonConfig) {
    this.config = config
    this.points = []
  }

  generate(): P5.Vector[] {
    const {
      p5 = window as unknown as P5,
      height = p5.height,
      width = p5.width,
      maxRetry = 30,
      radius = p5.width / 20,
    } = this.config

    const randomInt = (min: number, max?: number): number => {
      if (max === undefined) {
        max = min
        min = 0
      }

      return Math.floor(p5.random() * (max - min + 1) + min)
    }

    const dimensions = 2
    const points: P5.Vector[] = []
    const activePoints: P5.Vector[] = []
    const cellSize = Math.ceil(radius / Math.sqrt(dimensions))
    const cellCountW = Math.ceil(width / cellSize)
    const cellCountH = Math.ceil(height / cellSize)
    const grid = new Grid<P5.Vector | null>(cellCountW, cellCountH).fill(null)
    const firstPoint = p5.createVector(
      width / 4 + randomInt(width / 2),
      height / 4 + randomInt(height / 2),
    )

    const isValidPoint = (p: P5.Vector): boolean => {
      if (p.x <= 0 || p.x >= width || p.y <= 0 || p.y >= height) {
        return false
      }

      const cellCoord = grid.findCellRelativeToSurface(p.x, p.y, cellSize)

      return !grid
        .neighbors(cellCoord.x, cellCoord.y, true)
        .find(
          (n) =>
            present(n.value) && dist(n.value.x, n.value.y, p.x, p.y) <= radius,
        )
    }

    activePoints.push(firstPoint)
    points.push(firstPoint)

    let iteractionTracker = MAX_ITERATIONS

    while (activePoints.length > 0) {
      const randidx = randomInt(activePoints.length - 1)
      const point = activePoints[randidx]

      let found = false

      for (let tries = 0; tries < maxRetry; tries++) {
        const theta = randomInt(360)
        const newRadius = randomInt(radius, 2 * radius)
        const pnewx = point.x + newRadius * Math.cos(degreesToRadians(theta))
        const pnewy = point.y + newRadius * Math.sin(degreesToRadians(theta))
        const pnew = p5.createVector(pnewx, pnewy)

        if (isValidPoint(pnew)) {
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

      if (!found) {
        activePoints.splice(randidx, 1)
      }

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
