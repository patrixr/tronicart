import P5, { Vector } from 'p5';
import { getP5 } from './configure';

const { TWO_PI } = P5.prototype;

export function circlePoints(radius: number, resolution: number, centerX = 0, centerY = 0) {
  const step = TWO_PI / resolution;
  const points: Vector[] = [];
  const p5 = getP5();

  for (let i = 0; i < resolution; ++i) {
    const angle = i * step;
    const x = centerX + radius * p5.cos(angle);
    const y = centerY + radius * p5.sin(angle);
    points.push(p5.createVector(x, y));
  }

  return points;
}
