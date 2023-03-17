import P5, { Vector } from 'p5';
import { poissonDiscSamplingP5 } from 'poisson-disc-sampling';

const sketch = (p5: P5) => {
  let points: Vector[];

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(200);

    points = poissonDiscSamplingP5(p5, 10);
  };

  p5.draw = (): void => {
    p5.fill(0);
    p5.stroke(0);
    points.forEach((p) => {
      p5.circle(p.x, p.y, 3);
    });

    p5.noLoop();
  };
};

new P5(sketch);
