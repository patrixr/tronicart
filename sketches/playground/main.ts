import P5, { Color, Vector } from 'p5';
import { poissondiskSamplingP5 } from '@tronicart/poisson-disk-sampling';
import { createFlowField, FlowField } from '@tronicart/p5-flow-field';
import { initializeP5 } from '@tronicart/p5-fest/configure';
import { Palette } from '@tronicart/p5-fest/palette';
import { createRandomShape, Shape2D } from '@tronicart/shapes';
import { range } from '@tronicart/lang-helpers';

const sketch = (p5: P5) => {
  initializeP5(p5);

  let flowField: FlowField;
  let points: Vector[];
  let sharedStrokeDirection: Vector;
  let shapes: Shape2D[];
  let useDifferentDirections: boolean;
  let pointDistance: number;
  let strokeDirections: { [key: string]: Vector } = {};

  const closeBy = (pt1: Vector, pt2: Vector): boolean => {
    return p5.dist(pt1.x, pt1.y, pt2.x, pt2.y) < 2;
  };

  const getColorByIndex = (i: number) => {
    const colors = Palette.allColors();
    const col = p5.color(colors[i % colors.length]);
    col.setAlpha(p5.random(150, 255));
    return col;
  };

  const getDirectionByColor = (color: Color) => {
    const key = p5.red(color) + '-' + p5.green(color) + '-' + p5.blue(color);
    if (!strokeDirections[key]) {
      strokeDirections[key] = p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).normalize();
    }
    return strokeDirections[key];
  };

  const drawOnPoint = (
    point: Vector,
    color: Color,
    strokeDirection: Vector = sharedStrokeDirection
  ) => {
    p5.stroke(color);
    p5.line(
      point.x,
      point.y,
      point.x + strokeDirection.x * (pointDistance / 1.5),
      point.y + strokeDirection.y * (pointDistance / 1.5)
    );
  };

  p5.setup = (): void => {
    // Palette.configure({ variation: 'light', scheme: 'mono' });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(p5.random(0, 5));

    useDifferentDirections = p5.random([true, false]);
    sharedStrokeDirection = p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).normalize();
    pointDistance = p5.random(3, 6);
    points = poissondiskSamplingP5(p5, pointDistance);
    flowField = createFlowField(p5.width, p5.height, 20, p5);
    shapes = range(p5.random(15, 35)).map(() =>
      createRandomShape(
        p5.random(p5.width),
        p5.random(p5.height),
        p5.random(p5.width / 12, p5.width / 4)
      )
    );

    flowField.setVortex(p5.createVector(p5.random(p5.width), p5.random(p5.height)));

    points = points.filter((p) => {
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];

        if (shape.intersects(p.x, p.y)) {
          const color = getColorByIndex(i);
          drawOnPoint(
            p,
            getColorByIndex(i),
            useDifferentDirections ? getDirectionByColor(color) : sharedStrokeDirection
          );
          return false;
        }
      }
      return true;
    });

    Palette.allColors().forEach((color) => {
      flowField.spawnParticles(p5.random(50, 150)).forEach((p) => {
        const col = p5.color(color);
        col.setAlpha(p5.random(50, 200));
        p.store.set('color', col);
      });
    });
  };

  p5.draw = (): void => {
    p5.stroke(255);
    flowField.update();

    points = points.filter((point) => {
      for (const particle of flowField.particles) {
        if (closeBy(particle.position, point)) {
          const color: Color = particle.store.get('color');
          drawOnPoint(
            point,
            color,
            useDifferentDirections ? getDirectionByColor(color) : sharedStrokeDirection
          );
          return false;
        }
      }
      return true;
    });

    if (flowField.particleCount() === 0) {
      points.forEach((p) => {
        drawOnPoint(p, p5.color(30), sharedStrokeDirection);
      });
      p5.noLoop();
      console.log('done');
    } else {
      console.log(`Particles remaining ${flowField.particleCount()}`);
    }
  };

  p5.doubleClicked = () => {
    points.forEach((p) => {
      drawOnPoint(p, p5.color(30), sharedStrokeDirection);
    });
    p5.noLoop();
    console.log('done');
  };
};

new P5(sketch);
