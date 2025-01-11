const TWO_PI = Math.PI * 2;

export function circlePoints(radius: number, resolution: number, centerX = 0, centerY = 0) {
  const step = TWO_PI / resolution;
  const points: { x: number; y: number }[] = [];

  for (let i = 0; i < resolution; ++i) {
    const angle = i * step;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }

  return points;
}

export function dist(x1: number, y1: number, x2: number, y2: number) {
  let y = x2 - x1;
  let x = y2 - y1;
  return Math.sqrt(x * x + y * y);
}
