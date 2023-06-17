import P5 from 'p5';

const sketch = (p5: P5) => {
  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(125);
  };

  p5.draw = (): void => {};
};

new P5(sketch);
