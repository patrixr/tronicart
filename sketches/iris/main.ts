import P5 from 'p5';
import { Palette } from '@tronicart/cc/drawing/palette';

const range = (n) => [...Array(n).keys()];

const sketch = (p5: P5) => {
  let mainCircleSize: number;
  let mainCircleRadius: number;
  let rowCount: number;
  let colCount: number;
  let rotationAngle = 0;

  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    Palette.configure({ p5 });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);

    mainCircleSize = p5.width / 10;
    mainCircleRadius = mainCircleSize / 2;
    rowCount = 6;
    colCount = 10;
  };

  p5.draw = (): void => {
    p5.background(0, 8);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.circle(0, 0, mainCircleSize);
    p5.rotate(rotationAngle);
    const rows = range(rowCount).map((i) => {
      const n = i + 1;
      return {
        idx: i,
        n: n,
        size: mainCircleSize / 4 + n * 7
      };
    });

    const angleStep = p5.TWO_PI / colCount;
    for (let col = 0; col < colCount; col++) {
      p5.push();

      const angle = col * angleStep;

      p5.rotate(angle);

      rows.forEach(({ n, size, idx }) => {
        const even = idx % 2 === 0;
        const color = Palette.intToColor(idx);

        p5.push();
        p5.noFill();

        // Add up distance of previous circles
        for (let i = 0; i !== idx; i++) {
          p5.translate(0, -rows[i].size);
        }

        // Add up distance of root circle
        p5.translate(0, -mainCircleRadius);
        // Add up distance of current circle
        p5.translate(0, -size / 2);
        // Left half
        p5.stroke(255, even ? 255 : 0);
        p5.arc(0, 0, size, size, p5.PI / 2, p5.PI / 2 + p5.PI);
        // right half
        p5.stroke(255, even ? 0 : 255);
        p5.arc(0, 0, size, size, p5.PI / 2 + p5.PI, p5.PI / 2);
        // inner colored circle
        p5.fill(color);
        p5.noStroke();
        p5.circle(0, 0, size / 2);

        p5.pop();
      });
      p5.pop();
    }

    p5.noFill();
    p5.stroke(255);
    p5.circle(0, 0, mainCircleSize + rows.reduce((s, { size }) => s + size * 2, 0));

    //rotationAngle += 0.001;
  };
};

new P5(sketch);
