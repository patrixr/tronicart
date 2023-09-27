import { Grid } from '../data/grid';
import { getGlobalP5 } from '../p5';
import { present } from '../utils/present';
import P5 from 'p5';

export type PoissondiskSamplingConfig = {
  radius: number;
  p5?: P5,
  surfaceWidth?: number;
  surfaceHeight?: number;
  maxRetry?: number;
};

const MAX_ITERATIONS = 100000;

function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

function dist(x1: number, y1: number, x2: number, y2: number) {
  let y = x2 - x1;
  let x = y2 - y1;
  return Math.sqrt(x * x + y * y);
}

export const PoissonDiskSampling = {

  computePoints(config: PoissondiskSamplingConfig) {
    const {
      p5 = getGlobalP5(),
      surfaceHeight = p5.height,
      surfaceWidth = p5.width,
      maxRetry = 30,
      radius
    } = config;

    const randomInt = (min: number, max?: number) => {
      if (max === undefined) {
        max = min;
        min = 0;
      }

      return Math.floor(p5.random() * (max - min + 1) + min);
    };

    const dimensions = 2;
    const points: P5.Vector[] = [];
    const activePoints: P5.Vector[] = [];
    const cellSize = Math.floor(radius / Math.sqrt(dimensions));
    const cellCountW = Math.ceil(surfaceWidth / cellSize) + 1;
    const cellCountH = Math.ceil(surfaceHeight / cellSize) + 1;
    const grid = new Grid<P5.Vector>(cellCountW, cellCountH).fill(null);
    const firstPoint = p5.createVector(
      surfaceWidth / 4 + randomInt(surfaceWidth / 2),
      surfaceHeight / 4 + randomInt(surfaceHeight / 2)
    );

    const isValidPoint = (p: P5.Vector) => {
      if (p.x < 0 || p.x >= surfaceWidth || p.y < 0 || p.y >= surfaceHeight) {
        return false;
      }

      const cellCoord = grid.findCellRelativeToSurface(p.x, p.y, cellSize);

      return grid
        .neighbors(cellCoord.x, cellCoord.y, true)
        .find((n) => present(n.value) && dist(n.value.x, n.value.y, p.x, p.y) < radius)
        ? false
        : true;
    };

    activePoints.push(firstPoint);
    points.push(firstPoint);

    /* safety net */
    let iteractionTracker = MAX_ITERATIONS;

    while (activePoints.length > 0) {
      const randidx = randomInt(activePoints.length - 1);
      const point = activePoints[randidx];

      let found = false;

      for (let tries = 0; tries < maxRetry; tries++) {
        let theta = randomInt(360);
        let newRadius = randomInt(radius, 2 * radius);
        let pnewx = point.x + newRadius * Math.cos(degreesToRadians(theta));
        let pnewy = point.y + newRadius * Math.sin(degreesToRadians(theta));
        let pnew = p5.createVector(pnewx, pnewy);

        if (isValidPoint(pnew)) {
          /* new point found */
          points.push(pnew);
          activePoints.push(pnew);
          const targetCell = grid.findCellRelativeToSurface(pnew.x, pnew.y, cellSize);
          grid.set(targetCell.x, targetCell.y, pnew);
          found = true;
          break;
        }
      }

      /* If no point was found after k tries, remove p */
      if (!found) {
        activePoints.splice(randidx, 1);
      }

      /* Small fallback to avoid any drama */
      if (--iteractionTracker <= 0) {
        console.warn(
          `PoissondiskSampling reached max ${MAX_ITERATIONS} iterations and stopped earlier than planned`
        );
        break;
      }
    }

    return points;
  }
}