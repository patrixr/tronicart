import { getGlobalP5 } from './configure';

const TWO_PI = Math.PI * 2;

export function circlePoints(radius: number, resolution: number, centerX = 0, centerY = 0) {
  const step = TWO_PI / resolution;
  const points: { x: number; y: number }[] = [];
  const p5 = getGlobalP5();

  for (let i = 0; i < resolution; ++i) {
    const angle = i * step;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }

  return points;
}
