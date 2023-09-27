import P5 from 'p5';
import { Tile, Truchet } from '@tronicart/cc/algo/truchet';

type CustomTile = Tile & {
  draw: (x: number, y: number, size: number) => any;
};

// ---------------------------------------------------
// TEXTURES
// ---------------------------------------------------

const createTexture = (p5: P5, tileSize: number): P5.Graphics => {
  const gfx = p5.createGraphics(tileSize, tileSize);

  gfx.stroke(255);
  gfx.push();

  //const middle = p5.createVector(tileSize / 2, tileSize / 2);

  const mandatoryPoints : P5.Vector[] = p5.shuffle([
    p5.createVector(0, tileSize * .25),
    p5.createVector(0, tileSize * .75),
    p5.createVector(tileSize, tileSize * .25),
    p5.createVector(tileSize, tileSize * .75),
    p5.createVector(tileSize * .25, 0),
    p5.createVector(tileSize * .75, 0),
    p5.createVector(tileSize * .25, tileSize),
    p5.createVector(tileSize * .75, tileSize),
  ])

  gfx.beginShape();
  gfx.noFill();
  mandatoryPoints.forEach(p => gfx.curveVertex(p.x, p.y))
  gfx.endShape();

  // gfx.noFill();
  // gfx.strokeWeight(2);
  // gfx.arc(tileSize * .75, tileSize * .5, tileSize / 2, tileSize / 2, p5.HALF_PI, p5.PI + p5.HALF_PI);
  // gfx.line(tileSize * .75, tileSize * .25, tileSize, tileSize * .25);
  // gfx.line(tileSize * .75, tileSize * .75, tileSize, tileSize * .75);

  // const points : P5.Vector[] = [
  //   p5.createVector(0, 0),
  //   p5.createVector(tileSize * .25, tileSize * .25)
  // ]

  // gfx.stroke(255);
  // gfx.beginShape();
  // points.forEach(p => gfx.curveVertex(p.x, p.y))
  //gfx.endShape();
  gfx.pop();

  return gfx;
};

// ---------------------------------------------------
// SKETCH
// ---------------------------------------------------

const sketch = (p5: P5) => {
  let tileSize: number;
  let rows: number;
  let cols: number;

  const TILES_BASIC: CustomTile[] = [
    {
      id: '1',
      connections: {
        top: '1',
        left: '1',
        bottom: '1',
        right: '1'
      },
      draw(x, y, size) {
        p5.push();
        p5.noFill();
        p5.strokeWeight(p5.map(y, 0, p5.height, 3, 0));
        p5.translate(x, y);
        p5.arc(0, 0, tileSize, tileSize, 0, p5.HALF_PI);
        p5.arc(tileSize, tileSize, tileSize, tileSize, p5.PI, p5.PI + p5.HALF_PI);
        p5.pop();
      }
    },
    {
      id: '2',
      connections: {
        top: '1',
        left: '1',
        bottom: '1',
        right: '1'
      },
      draw(x, y, size) {
        p5.push();
        p5.noFill();
        p5.strokeWeight(p5.map(y, 0, p5.height, 3, 0));
        p5.translate(x, y);
        p5.arc(tileSize, 0, tileSize, tileSize, p5.HALF_PI, p5.PI);
        p5.arc(0, tileSize, tileSize, tileSize, p5.PI + p5.HALF_PI, p5.TWO_PI);
        p5.pop();
      }
    }
  ];

  p5.preload = () => {
    const seed = window.fxrand() * 1000000000000000;
    console.log(`Seed: ${seed}`);
    p5.randomSeed(seed);
    p5.noiseSeed(seed);
  };

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);
    p5.stroke(255);

    tileSize = p5.min(p5.width, p5.height) / 15;
    rows = p5.floor(p5.height / tileSize);
    cols = p5.floor(p5.width / tileSize);

    const texture = createTexture(p5, tileSize);

    const grid = Truchet.createTiling(cols, rows, TILES_BASIC);
    // const grid = tilingBuilder(cols, rows, [
    //   createTile(p5, tileSize),
    //   createTile(p5, tileSize),
    //   createTile(p5, tileSize),
    //   createTile(p5, tileSize)
    // ]);

    console.info(`Rows: ${rows}`);
    console.info(`Cols: ${cols}`);

    for (let x = 0; x < cols; ++x) {
      for (let y = 0; y < rows; ++y) {
        if (!grid || !grid[x]) break;
        if (grid[x][y] !== null) {
          grid[x][y].draw(x * tileSize, y * tileSize, tileSize);
        }
      }
    }

    p5.fill(0);
    p5.rect(0, 0, tileSize, tileSize);
    p5.image(texture, 0, 0);
    p5.noLoop();
  };

  p5.draw = (): void => {};
};

new P5(sketch);
