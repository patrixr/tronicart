import type { DrawableTile } from '../main';
import { Palette } from '@tronicart/cc/colors/alette';
import { ConnectionMatcher } from '@tronicart/cc/algo/truchet';
import type P5 from 'p5';

type Connections = DrawableTile['connections'];

let lastId = 0;

const rotateBy = (p5: P5, tex: P5.Graphics, n: number) => {
  const gfx = p5.createGraphics(tex.width, tex.height);

  gfx.push();
  gfx.imageMode(gfx.CENTER);
  gfx.translate(gfx.width / 2, gfx.height / 2);
  for (let i = 0; i < n; ++i) {
    gfx.rotate(p5.PI / 2);
  }
  gfx.image(tex, 0, 0, tex.width, tex.height);
  gfx.pop();
  return gfx;
};

const toTile = (p5: P5, tex: P5.Graphics, connections: Connections): DrawableTile => {
  const id = ++lastId;
  return {
    id: String(id),
    connections,
    draw: (x, y) => {
      p5.image(tex, x, y);
    }
  };
};

export const waveTiles = (p5: P5, tileSize: number): DrawableTile[] => {
  Palette.configure({ p5 });

  const backgroundColor = Palette.nextColor();
  const fillColor = Palette.nextColor();

  const tex1 = p5.createGraphics(tileSize, tileSize);
  tex1.noStroke();
  tex1.background(0);
  tex1.fill(fillColor);
  tex1.arc(0, tileSize, tileSize * 2, tileSize * 2, p5.TWO_PI * 0.75, p5.TWO_PI);

  const tex2 = p5.createGraphics(tileSize, tileSize);
  tex2.noStroke();
  tex2.background(fillColor);
  tex2.fill(0);
  tex2.arc(0, tileSize, tileSize * 2, tileSize * 2, p5.TWO_PI * 0.75, p5.TWO_PI);

  return [
    // toTile(p5, rotateBy(p5, tex1, 0), {
    //   left: 'big-small',
    //   bottom: 'big-big'
    // }),
    // toTile(p5, rotateBy(p5, tex1, 2), {
    //   right: 'big-small',
    //   top: 'big-big'
    // }),
    // toTile(p5, rotateBy(p5, tex2, 0), {
    //   right: 'small-big',
    //   top: 'small-small'
    // }),
    // toTile(p5, rotateBy(p5, tex2, 2), {
    //   left: 'small-big',
    //   bottom: 'small-small'
    // })
    toTile(p5, rotateBy(p5, tex1, 0), {
      left: '1',
      bottom: '2'
    }),
    toTile(p5, rotateBy(p5, tex1, 2), {
      right: '3',
      top: '2'
    }),
    toTile(p5, rotateBy(p5, tex2, 0), {
      right: '1',
      top: '4'
    }),
    toTile(p5, rotateBy(p5, tex2, 2), {
      left: '3',
      bottom: '4'
    })
  ];
};

export const waveTilesConnectionMatcher = (s1, s2) => {
  // const [type1, expectation1] = s1.split('-');
  // const [type2, expectation2] = s2.split('-');
  // if (type1 === expectation2 && type2 === expectation1) {
  //   return 1;
  // }
  // return 0;
};
