import P5 from 'p5';
import { Grid, createGrid } from '@tronicart/data-structures';

type Corner = {
  coord: [number, number],
  sides: [string, string]
}

const corners : Corner[] = [
  {
    coord: [0, 0],
    sides: ['left', 'top']
  },
  {
    coord: [0, 1],
    sides: ['left', 'bottom']
  },
  {
    coord: [1, 0],
    sides: ['right', 'top']
  },
  {
    coord: [1, 1],
    sides: ['right', 'bottom']
  }
];

const createTileTexture = (p5: P5, tileSize: number, corner: Corner) => {
  const centerPoint = p5.createVector(corner.coord[0], corner.coord[1]);

  const pt1 = p5.createVector(centerPoint.x, centerPoint.y == 1 ? 0 : 1);
  const pt2 = centerPoint;
  const pt3 = p5.createVector(centerPoint.x == 1 ? 0 : 1, centerPoint.y);
  const pt4 = p5.createVector(p5.random(0.2, 0.8), p5.random(0.2, 0.8));
  const pt5 = p5.createVector(p5.random(0.2, 0.8), p5.random(0.2, 0.8));

  const gfx = p5.createGraphics(tileSize, tileSize);

  gfx.beginShape();
  gfx.background(255);
  gfx.fill(0);
  gfx.stroke(0);
  gfx.curveVertex(pt1.x * tileSize, pt1.y * tileSize);
  gfx.curveVertex(pt2.x * tileSize, pt2.y * tileSize);
  gfx.curveVertex(pt3.x * tileSize, pt3.y * tileSize);
  gfx.curveVertex(pt4.x * tileSize, pt4.y * tileSize);
  gfx.curveVertex(pt5.x * tileSize, pt5.y * tileSize);
  gfx.endShape(gfx.CLOSE);

  return {
    tex: gfx,
    right: pt1.x + pt2.x + pt3.x >= 2,
    left: pt1.x + pt2.x + pt3.x < 2,
    bottom: pt1.y + pt2.y + pt3.y >= 2,
    top: pt1.y + pt2.y + pt3.y < 2
  };
};

type Tile = ReturnType<typeof createTileTexture>;

// ---------------------------------------------------
// SKETCH
// ---------------------------------------------------

const sketch = (p5: P5) => {
  let tileSize: number;
  let rows: number;
  let cols: number;
  let grid: Grid<Tile>;

  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  const populate = (x: number, y: number, tile: Tile) => {
    if (
      x < 0 || x >= cols ||
      y < 0 || y >= rows ||
      grid.get(x, y) !== null
    ) return;

    grid.set(x, y, tile);

    console.log(tile);
    if (tile.bottom) {
      const corner = p5.shuffle(corners).find(c => c.sides.includes("top"))
      const newTile = createTileTexture(p5, tileSize, corner);
      populate(x, y + 1, newTile);
    }

    if (tile.right) {
      const corner = p5.shuffle(corners).find(c => c.sides.includes("left"))
      const newTile = createTileTexture(p5, tileSize, corner);
      populate(x + 1, y, newTile);
    }

    if (tile.top) {
      const corner = p5.shuffle(corners).find(c => c.sides.includes("bottom"))
      const newTile = createTileTexture(p5, tileSize, corner);
      populate(x, y - 1, newTile);
    }

    if (tile.left) {
      const corner = p5.shuffle(corners).find(c => c.sides.includes("right"))
      const newTile = createTileTexture(p5, tileSize, corner);
      populate(x - 1, y, newTile);
    }
  };

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(125);

    tileSize = p5.min(p5.width, p5.height) / 10;
    rows = p5.floor(p5.height / tileSize);
    cols = p5.floor(p5.width / tileSize);
    grid = createGrid<Tile>(cols, rows, () => null);

    console.info(`Rows: ${rows}`);
    console.info(`Cols: ${cols}`);

    const startCoord = p5.createVector(p5.floor(p5.random(cols)), p5.floor(p5.random(rows)));
    const firstTile = createTileTexture(p5, tileSize, p5.random(corners as any[]));

    populate(startCoord.x, startCoord.y, firstTile);

    grid.each((tile, x, y) => {
      if (tile) {
        p5.image(tile.tex, x * tileSize, y * tileSize)
      }
    });
  };

  p5.draw = (): void => {};
};

new P5(sketch);
