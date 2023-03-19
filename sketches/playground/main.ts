import P5, { Vector } from 'p5';
import { poissondiskSamplingP5 } from '@tronicart/poisson-disk-sampling';
import { FlowField } from '@tronicart/p5-flow-field';

const sketch = (p5: P5) => {
  let points: Vector[];
  let flowField: FlowField;

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);

    flowField = new FlowField(p5.width, p5.height, 20, p5);
    flowField.init();
  };

  p5.draw = (): void => {
    flowField.draw(true);
    p5.noLoop();
  };
};

new P5(sketch);
