export interface Point {
  x: number
  y: number
}

const TWO_PI: number = Math.PI * 2

/**
 * Generates points on the circumference of a circle.
 * @param radius - The radius of the circle.
 * @param resolution - The number of points to generate.
 * @param centerX - The x-coordinate of the circle's center.
 * @param centerY - The y-coordinate of the circle's center.
 * @returns An array of points on the circumference of the circle.
 */
export function circlePoints(
  radius: number,
  resolution: number,
  centerX: number = 0,
  centerY: number = 0,
): Point[] {
  const step: number = TWO_PI / resolution
  const points: Point[] = []

  for (let i = 0; i < resolution; ++i) {
    const angle: number = i * step
    const x: number = centerX + radius * Math.cos(angle)
    const y: number = centerY + radius * Math.sin(angle)
    points.push({ x, y })
  }

  return points
}

/**
 * Represents a line in 2D space.
 */
export class Line {
  public p1: Point
  public p2: Point

  constructor(p1: Point, p2: Point) {
    this.p1 = p1
    this.p2 = p2
  }
}

/**
 * Represents a line segment in 2D space.
 */
export class Segment {
  public p1: Point
  public p2: Point

  constructor(p1: Point, p2: Point) {
    this.p1 = p1
    this.p2 = p2
  }
}

/**
 * Represents a ray in 2D space, capable of testing intersections with lines.
 */
export class Ray {
  public origin: Point
  public direction: Point

  constructor(origin: Point, direction: Point) {
    this.origin = origin
    this.direction = direction
  }

  /**
   * Tests intersection with a line segment.
   * @param segment - The segment to test intersection with.
   * @returns The intersection point or null if no intersection exists.
   */
  public intersectsSegment(segment: Segment): Point | null {
    const { x: x1, y: y1 } = this.origin
    const { x: x2, y: y2 } = this.direction
    const { p1, p2 } = segment
    const { x: x3, y: y3 } = p1
    const { x: x4, y: y4 } = p2

    const denominator: number = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

    if (denominator === 0) {
      return null
    }

    const t: number =
      ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator
    const u: number =
      -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator

    if (t >= 0 && u >= 0 && u <= 1) {
      return {
        x: x1 + t * (x2 - x1),
        y: y1 + t * (y2 - y1),
      }
    }

    return null
  }

  /**
   * Tests intersection with a line.
   * @param line - The line to test intersection with.
   * @returns The intersection point or null if no intersection exists.
   */
  public intersectsLine(line: Line): Point | null {
    const { x: x1, y: y1 } = this.origin
    const { x: x2, y: y2 } = this.direction
    const { p1, p2 } = line
    const { x: x3, y: y3 } = p1
    const { x: x4, y: y4 } = p2

    const denominator: number = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

    if (denominator === 0) {
      return null
    }

    const t: number =
      ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator
    const u: number =
      -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator

    if (t >= 0 && t <= 1 && u >= 0) {
      return {
        x: x1 + t * (x2 - x1),
        y: y1 + t * (y2 - y1),
      }
    }

    return null
  }
}

export function polarToCartesian(r: number, theta: number) {
  const x = r * Math.cos(theta)
  const y = r * Math.sin(theta)
  return [x, y]
}
