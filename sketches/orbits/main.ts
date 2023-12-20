import P5 from 'p5';
import { CelestialBody } from './celestial';
import { Palette } from '@tronicart/cc/drawing/palette';
import { nightSky } from './textures';

const sketch = (p5: P5) => {
  let bodies: CelestialBody[];
  let suns: CelestialBody[];
  let nightSkyTexture: P5.Graphics;
  let skyRotation = 0;

  p5.setup = (): void => {
    Palette.configure({ p5, scheme: 'mono' });

    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);

    const texSize = p5.max([p5.width, p5.height]) * 1.5;

    nightSkyTexture = p5.createGraphics(texSize, texSize);
    nightSky(nightSkyTexture);

    suns = [
      new CelestialBody(p5, p5.width / 2, p5.height / 2, 100)
    ];

    const bodyCount = 20;

    bodies = suns.map((sun) => sun.spawnSatellites(bodyCount, 2)).flat();
  };

  p5.draw = (): void => {
    p5.background(Palette.allColors()[0]);
    p5.background(0);
    p5.noStroke();

    p5.push();
    p5.imageMode(p5.CENTER);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate((skyRotation += 0.0004));
    p5.image(nightSkyTexture, 0, 0);
    p5.pop();

    bodies.forEach((b) => {
      if (b.parent) {
        b.gravitateTowards(b.parent);
      }
      b.update();
      b.show();
    });

    suns.forEach((sun) => {
      sun.update();
      sun.show();
      // sun.showStatic();
    });
  };
};

new P5(sketch);
