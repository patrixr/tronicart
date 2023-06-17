import P5 from 'p5';
import { Palette } from '@tronicart/p5-fest/palette';
import { createIsometricWorld, IsometricWorld } from './lib/world';
import { repeat } from '@tronicart/lang-helpers';
import { IsoPlugins, plugins } from './lib/plugins';

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

    // const size = p5.random([
    //   { tile: 9, surface: 50 },
    //   { tile: 7.5, surface: 60 },
    //   { tile: 11, surface: 40 },
    //   { tile: 13, surface: 30 }
    // ]);

    // world = createIsometricWorld(size.tile);
    world = createIsometricWorld(35);

    // for (let x = 0; x < 10; x += 0.1) {
    //   for (let y = 0; y < 10; y += 0.1) {
    //     world.point(x, y, 1 + p5.noise(x, y, p5.frameCount) * 2, {
    //       color: p5.color(0, 150),
    //       weight: 2
    //     });
    //   }
    // }

    // world.line(0, 10, 0, 10, 10, 0, { color: p5.color(0) });
    // world.line(10, 10, 0, 10, 0, 0, { color: p5.color(0) });

    // plugins(p5, world).terrain({
    //   size: size.surface,
    //   maxHeight: p5.random(13, 18)
    // });
  };

  p5.draw = (): void => {
    p5.background(0);
    world.clear();
    // p5.image(bgImage, 0, 0, p5.width, p5.height);
    for (let x = 0; x < 10; x += 0.2) {
      for (let y = 0; y < 10; y += 0.2) {
        const noise = p5.noise(x - p5.frameCount / 50, y);
        world.point(x, y, 1 + noise * 2, {
          color: Palette.intToColor(noise * Palette.colorCount()),
          weight: 3
        });
      }
    }

    world.line(0, 10, 0, 10, 10, 0, { color: Palette.intToColor(0) });
    world.line(10, 10, 0, 10, 0, 0, { color: Palette.intToColor(0) });
    world.line(0, 10, -0.5, 10, 10, -0.5, { color: Palette.intToColor(1) });
    world.line(10, 10, -0.5, 10, 0, -0.5, { color: Palette.intToColor(1) });
    world.line(0, 10, -1, 10, 10, -1, { color: Palette.intToColor(2) });
    world.line(10, 10, -1, 10, 0, -1, { color: Palette.intToColor(2) });

    world.draw(p5, p5.width / 2, p5.height / 3);
  };
};

new P5(sketch);
