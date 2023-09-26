import P5 from 'p5';
import { Palette } from '@tronicart/cc/drawing/palette';
import { createIsometricWorld, IsometricWorld } from './lib/world';
import { plugins } from './lib/plugins';

const sketch = (p5: P5) => {
  let world: IsometricWorld;
  let bgImage: P5.Image;

  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    Palette.configure({ p5, scheme: 'mono' });
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);

    const size = p5.random([
      { tile: 9, surface: 50 },
      { tile: 7.5, surface: 60 },
      { tile: 11, surface: 40 },
      { tile: 13, surface: 30 }
    ]);

    world = createIsometricWorld(size.tile);


    plugins(p5, world).terrain({
      size: size.surface,
      maxHeight: p5.random(13, 18)
    });
  };

  p5.draw = (): void => {
    p5.background(0);
  
    world.draw(p5, p5.width / 2, p5.height / 3);
  };
};

new P5(sketch);
