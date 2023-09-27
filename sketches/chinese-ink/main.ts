import p5, { Color, Image } from 'p5';
import P5, { Vector } from 'p5';
import { copyColor } from '@tronicart/cc/drawing/colors';
import { Palette } from '@tronicart/cc/drawing/palette';
import { createFlowField, FlowField } from '@tronicart/cc/algo/flowfield';
import { PoissonDiskSampling } from '@tronicart/cc/algo/poisson-disk-sampling';

const sketch = (p5: P5) => {
  let distanceConstant: number;
  let bgImage: Image;
  let flowfield: FlowField;
  let points: Vector[];

  const makeStroke = (sourceX: number, sourceY: number, noise: number, color: Color) => {
    let radius = distanceConstant * p5.constrain(noise, 0.05, 0.95);
    let angle = 0;
    const startAngle = -p5.PI / 2;
    const angleRange = p5.random(p5.PI / 6, p5.PI / 3);
    const centerX = sourceX - radius / 2;
    const centerY = sourceY + radius;
    const strokeWeight = p5.random(1, 10) * noise;
    const maxOpacity = p5.map(noise, 0, 1, 20, 255);

    color = copyColor(color, p5);

    const draw = () => {
      if (angle >= angleRange) return;

      const pct = angle / angleRange;

      // p5.stroke(255, 0, 0);
      // p5.circle(centerX, centerY, 3);
      // p5.stroke(0, 255, 0);
      // p5.circle(sourceX, sourceY, 3);
      // p5.stroke(255);

      color.setAlpha(p5.map(1 - pct, 0, 1, 0, maxOpacity));

      const dist = radius + 10 * (1 - pct);
      const x = centerX + dist * Math.cos(startAngle + angle);
      const y = centerY + dist * Math.sin(startAngle + angle);

      p5.noFill();
      p5.stroke(color);
      p5.strokeWeight(strokeWeight * (1 - pct));
      p5.circle(x, y, 1);

      angle += 0.01;
    };

    return { draw };
  };

  let strokes = [];

  p5.preload = (): void => {
    bgImage = p5.loadImage('canvas.jpg');
  };

  p5.setup = (): void => {
    Palette.configure({ p5 });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.image(bgImage, 0, 0, p5.width, p5.height);

    distanceConstant = p5.random(20, 30);
    points = PoissonDiskSampling.computePoints({ p5, radius: distanceConstant / p5.random(1, 3) });
    flowfield = createFlowField(p5.width, p5.height, distanceConstant, p5);

    // if (true || p5.random([true, false])) {
    //   flowfield.setVortex(p5.createVector(p5.random(p5.width), p5.random(p5.height)));
    // }

    // flowfield.setVortex(p5.createVector(p5.width / 2, p5.height / 2));
    flowfield.spawnParticles(p5.random(20, 50), (particle) => {
      points = points.filter((pt, i) => {
        const color = p5.color(p5.random(0, 90)); //Palette.nextColor();
        if (p5.dist(particle.x, particle.y, pt.x, pt.y) < 10) {
          strokes.push(makeStroke(pt.x, pt.y, p5.noise(pt.x, pt.y), color));
          return false;
        }
        return true;
      });
    });
  };

  p5.draw = (): void => {
    p5.stroke(200, 40);
    p5.strokeWeight(1);
    flowfield.update();
    strokes.forEach((s) => s.draw());
  };

  p5.doubleClicked = () => {
    p5.noLoop();
    console.log('done');
  };
};

new P5(sketch);
