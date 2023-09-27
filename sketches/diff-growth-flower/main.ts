import P5 from 'p5';
import { Palette } from '@tronicart/cc/drawing/palette';
import { DifferentialGrowth } from '@tronicart/cc/algo/differential-growth';
import { Coordinates } from '@tronicart/cc/algo/coordinates';

const { circlePoints } = Coordinates;

const sketch = (p5: P5) => {
  let bgOpacity: number;
  let dg: DifferentialGrowth;
  let rotation = 0;

  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    Palette.configure({ p5 });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.colorMode(p5.HSB, 360, 120, 100, 255);
    p5.background(0);
    p5.rectMode(p5.CENTER);

    bgOpacity = p5.random(5, 15);
    dg = new DifferentialGrowth(p5, {
      minSeparation: p5.random(35, 50)
    });

    dg.addNodes(circlePoints(50, 30).map((pt) => p5.createVector(pt.x, pt.y)));
    dg.addNodes(circlePoints(100, 30).map((pt) => p5.createVector(pt.x, pt.y)));
    dg.addNodes(circlePoints(150, 30).map((pt) => p5.createVector(pt.x, pt.y)));
    dg.addNodes(circlePoints(200, 30).map((pt) => p5.createVector(pt.x, pt.y)));
  };

  p5.draw = (): void => {
    p5.background(0, bgOpacity);
    p5.stroke(0);
    p5.noFill();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(rotation);

    dg.update();
    dg.paths.forEach((path, i) => {
      p5.stroke(Palette.intToColor(i));
      p5.strokeWeight(2);
      p5.beginShape();
      path.nodes.forEach((n) => p5.curveVertex(n.x, n.y));
      p5.endShape(p5.CLOSE);
    });


    if (p5.frameCount >= 700) {
      p5.noLoop();
    }

    rotation += 0.0005;
  };
};

new P5(sketch);
