import P5 from 'p5';
import { repeat } from '@tronicart/cc/utils/repeat';
import { Palette } from '@tronicart/cc/colors/palette';

const sketch = (p5: P5) => {
  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.colorMode(p5.HSB, 360, 120, 100, 255);
    p5.background(0);

    const palette = [
      p5.random(72),
      p5.random(72, 144),
      p5.random(144, 216),
      p5.random(216, 288),
      p5.random(288, 360)
    ];

    const spacing = 15;
    const noiseResX = p5.random(0.004, 0.007);
    const noiseResY = p5.random(0.004, 0.007);
    const sourceVector = p5.createVector(0, 1);
    const startCol = p5.random(360);

    for (let sourceX = -p5.width * 0.1; sourceX < p5.width * 1.1; sourceX += spacing) {
      for (let sourceY = -p5.height * 0.1; sourceY < p5.height * 1.1; sourceY += spacing) {
        const color = p5.random(palette);
        let x = sourceX + p5.random(-15, 15);
        let y = sourceY + p5.random(-15, 15);

        p5.stroke(color, 60 + p5.random(-20, 20), 60 + p5.random(-20, 20));
        const n2 = (p5.noise(x * noiseResX, y * noiseResY) - 0.2) * 1.7;
        const hue = (p5.floor(n2 * 5) * 72 + startCol) % 360;

        p5.stroke(hue + p5.random(-8, 8), 80 + p5.random(-15, 15), 80 + p5.random(-15, 15), 200);
        repeat(10, (i) => {
          const next = sourceVector
            .copy()
            .rotate(p5.noise(x * noiseResX, y * noiseResY) * p5.TWO_PI)
            .mult(10)
            .add(x, y);

          p5.strokeWeight(i * 0.3);
          p5.noFill();
          p5.line(x, y, next.x, next.y);
          x = next.x;
          y = next.y;
        });
      }
    }
    p5.noLoop();
  };

  p5.draw = (): void => {};
};

new P5(sketch);
