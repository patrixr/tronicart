import P5 from 'p5';
import { Palette } from '@tronicart/cc/drawing/palette';

const sketch = (p5: P5) => {
  p5.setup = (): void => {
    Palette.configure({ p5 });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);
  };

  p5.draw = (): void => {};
};

new P5(sketch);
