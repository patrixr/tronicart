import { IsometricWorld } from '../world';
import type P5 from 'p5';
import { cache } from '@tronicart/cc/utils/cache';
import { repeat } from '@tronicart/cc/utils/repeat';

export const getLeafColors = cache((p5: P5) => {
  return p5
    .shuffle([
      p5.color(173, 193, 120),
      p5.color(244, 244, 249),
      p5.color(222, 49, 99),
      p5.color(242, 232, 99)
    ])
    .slice(0, 2);
});

export const tree =
  (p5: P5, world: IsometricWorld) =>
  (treeX: number, treeY: number, treeZ = 1) => {
    const colors = {
      treeTrunk: p5.random([p5.color(169, 132, 103)]),
      treeLeaves: p5.random(getLeafColors(p5))
    };

    const treeHeight = p5.random(3, 7);
    const treeThickness = p5.random(world.cellSize / 4, world.cellSize / 2);
    const yStep = treeThickness / world.cellSize;

    treeX += (world.cellSize - treeThickness) / 2 / world.cellSize;
    treeY += (world.cellSize - treeThickness) / 2 / world.cellSize;

    repeat(treeHeight, (y) => {
      world.cube(treeX, treeY, treeZ + y * yStep, {
        color: colors.treeTrunk,
        strokes: [false, false, false],
        size: treeThickness,
        opacity: 255
      });
    });

    const bushiness = p5.random(5, 15);

    repeat(bushiness * 3, (i) => {
      const range = i / 30;
      world.cube(
        treeX + p5.random(-range, range),
        treeY + p5.random(-range, range),
        treeZ + treeHeight * yStep - yStep + p5.random(0, range * 2),
        {
          strokes: [false, false, false],
          color: colors.treeLeaves,
          opacity: p5.random(200, 255),
          size: p5.random(world.cellSize / 10, world.cellSize / 1.5)
        }
      );
    });
  };
