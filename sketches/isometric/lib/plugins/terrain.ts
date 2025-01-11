import { Palette } from '@tronicart/cc/drawing/palette';
import { IsometricWorld } from '../world';
import { tree } from './tree';
import P5 from 'p5';

export type TerrainOptions = {
  size?: number;
  maxHeight?: number;
};

export const terrain =
  (p5: P5, world: IsometricWorld) =>
  (options: TerrainOptions = {}) => {
    const { size = 50, maxHeight = 15 } = options;
    const makeTree = tree(p5, world);

    const time = Date.now();
    for (let x = 0; x < size; ++x) {
      for (let y = 0; y < size; ++y) {
        const height = Math.floor(p5.map(p5.noise(x / 20, y / 20), 0, 1, 0, maxHeight));
        console.log(`[Terrain] x=${x} y=${y} height=${height}`);
        for (let z = 0; z <= height; ++z) {
          world.cube(x, y, z, {
            color: Palette.intToColor(z),
            strokes: [false, false, false]
          });
        }

        if (p5.random() < 0.025) {
          makeTree(x, y, height + 1);
        }
      }
    }
    console.log(`[Terrain] generation time: ${(Date.now() - time) / 1000} seconds`);
  };
