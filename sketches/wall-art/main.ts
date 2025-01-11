import P5 from 'p5';
import type { Graphics, Image } from 'p5';
import { Palette } from '@tronicart/cc/drawing/palette';
import { Coordinates } from '@tronicart/cc/algo/coordinates';
import { lerpingColor } from '@tronicart/cc/drawing/colors';
import { Drawable } from '@tronicart/cc/types'

const SPEED_MULTIPLIER = 10;
const { dist } = Coordinates;

export interface Circle {
  readonly x: number;
  readonly y: number;
  readonly diameter: number;
  readonly radius: number;
  intersects: (shape: Circle) => boolean
}

export function createCircle(x: number, y: number, diameter: number): Circle {
  const radius = diameter / 2;
  const intersects = (shape: Circle) => dist(x, y, shape.x, shape.y) <= radius + shape.radius;
  return { radius, diameter, intersects, x,  y };
}


const sketch = (p5: P5) => {
  let debug = false;
  let centers: Circle[];
  let satellites: Drawable[];
  let bgImage: Image;
  let shapeGraphics: Graphics;
  let layers: (Graphics | Image)[];
  let tick = 0;

  const createSatellite = () => {
    let currentCenter: Circle = p5.random(centers);
    let allCenters = p5.shuffle([...centers]);
    let angle = p5.random(0, p5.TWO_PI);
    let angleStep = 0.01;
    let angleTravelled = 0;
    let gradient = lerpingColor({ p5, colors: p5.shuffle(Palette.allColors()) });
    let trail = [];
    let minAngleTravelled = p5.random(p5.PI / 10, p5.PI / 2);

    return {
      draw() {
        // if (allCenters.length === 0) {
        //   return;
        // }

        gradient.update();
        angle += angleStep;
        angleTravelled += Math.abs(angleStep);

        const distanceErrorMargin = 2;
        const x = currentCenter.x + currentCenter.radius * p5.cos(angle);
        const y = currentCenter.y + currentCenter.radius * p5.sin(angle);

        // If we've been on the same circle for a little white...
        if (angleTravelled >= minAngleTravelled) {
          // Try swapping center
          for (const center of allCenters) {
            if (center === currentCenter) continue;

            const distFromCenter = p5.dist(x, y, center.x, center.y);

            if (
              distFromCenter > center.radius - distanceErrorMargin &&
              distFromCenter < center.radius + distanceErrorMargin &&
              p5.random() > 0.2
            ) {
              currentCenter = center;
              angle = Math.atan2(y - center.y, x - center.x);
              angleStep *= p5.random([-1, -1, 1]);
              angleTravelled = 0;
              // allCenters = allCenters.filter((c) => c !== center);
              // allCenters.push(center);
              break;
            }
          }
        }

        shapeGraphics.noStroke();
        shapeGraphics.fill(0);
        shapeGraphics.circle(x, y, 45);

        trail.push({ x, y });

        if (trail.length > 20) {
          const oldPos = trail.shift();
          shapeGraphics.fill(gradient.color());
          shapeGraphics.circle(oldPos.x, oldPos.y, 25);
        }
      }
    };
  };

  p5.preload = () => {
    bgImage = p5.loadImage('bg.jpg');
  };

  p5.setup = (): void => {
    Palette.configure({ p5 });

    p5.blendMode(p5.OVERLAY);
    p5.createCanvas(window.innerWidth, window.innerHeight);

    shapeGraphics = p5.createGraphics(p5.width, p5.height);

    // if (p5.random([true, false, false, false])) {
    shapeGraphics.blendMode(p5.HARD_LIGHT);
    // }

    layers = p5.shuffle([shapeGraphics, bgImage]);

    let circleSizeIndicator = p5.min(p5.width, p5.height);
    let circlePositionMargin = circleSizeIndicator * 0.2;
    let centerCount = 5; //p5.random(5, 10);
    centers = [];

    while (centers.length < centerCount) {
      const c = createCircle(
        p5.random(circlePositionMargin, p5.width - circlePositionMargin),
        p5.height * 0.2 + (centers.length / centerCount) * (p5.height * 0.6),
        // p5.random(circlePositionMargin, p5.height - circlePositionMargin),
        p5.random(circleSizeIndicator / 5, circleSizeIndicator / 3)
      );

      if (centers.length < 3) {
        centers.push(c);
        continue;
      }

      const intersects = centers.find((other) => c.intersects(other));

      if (intersects) {
        centers.push(c);
      }
    }

    satellites = [];
    for (let i = 0; i < p5.random(1, 4); ++i) {
      satellites.push(createSatellite());
    }
  };

  p5.draw = (): void => {
    for (let i = 0; i < SPEED_MULTIPLIER; i++) {
      p5.noStroke();
      p5.blendMode(p5.OVERLAY);
      p5.clear(255, 255, 255, 255);

      layers.forEach((layer) => p5.image(layer, 0, 0, p5.width, p5.height));

      if (debug) {
        centers.forEach((c, i) => {
          p5.stroke(255);
          p5.fill(Palette.intToColor(i));
          p5.circle(c.x, c.y, 10);
          p5.noFill();
          p5.stroke(255, 0, 100);
          p5.circle(c.x, c.y, c.diameter);
        });
      }

      satellites.forEach((s) => {
        s.draw();
      });

      if (++tick >= p5.max(p5.width, p5.height) * 3) {
        p5.noLoop();
        // p5.saturation();
      }
    }
  };

  p5.mouseClicked = () => {
    debug = !debug;
  };
};

new P5(sketch);
