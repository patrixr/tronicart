const TWO_PI = Math.PI * 2;
export function circlePoints(radius, resolution, centerX = 0, centerY = 0) {
  const step = TWO_PI / resolution;
  const points = [];
  for (let i = 0; i < resolution; ++i) {
    const angle = i * step;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }
  return points;
}
export class Line {
  p1;
  p2;
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
}
export class Segment {
  p1;
  p2;
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
}
export class Ray {
  origin;
  direction;
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }
  /**
   * Tests intersection with a line segment.
   * @param segment - The segment to test intersection with.
   * @returns The intersection point or null if no intersection exists.
   */
  intersectsSegment(segment) {
    const { x: x1, y: y1 } = this.origin;
    const { x: x2, y: y2 } = this.direction;
    const { p1, p2 } = segment;
    const { x: x3, y: y3 } = p1;
    const { x: x4, y: y4 } = p2;
    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator === 0) {
      return null;
    }
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;
    if (t >= 0 && u >= 0 && u <= 1) {
      return {
        x: x1 + t * (x2 - x1),
        y: y1 + t * (y2 - y1)
      };
    }
    return null;
  }
  /**
   * Tests intersection with a line.
   * @param line - The line to test intersection with.
   * @returns The intersection point or null if no intersection exists.
   */
  intersectsLine(line) {
    const { x: x1, y: y1 } = this.origin;
    const { x: x2, y: y2 } = this.direction;
    const { p1, p2 } = line;
    const { x: x3, y: y3 } = p1;
    const { x: x4, y: y4 } = p2;
    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator === 0) {
      return null;
    }
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;
    if (t >= 0 && t <= 1 && u >= 0) {
      return {
        x: x1 + t * (x2 - x1),
        y: y1 + t * (y2 - y1)
      };
    }
    return null;
  }
}
