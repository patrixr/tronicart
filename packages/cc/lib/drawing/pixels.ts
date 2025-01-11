import type P5 from 'p5';
import { isColor } from './colors';
import { getGlobalP5 } from '../p5/configure';

export type ColorTuple = [number, number, number, number];

export type PixelCallback = (x: number, y: number, c: ColorTuple) => void;

export type PixelMapper = (x: number, y: number, c: ColorTuple) => P5.Color | ColorTuple;

export function createPixelEditor(p5: P5 | P5.Graphics = getGlobalP5()) {
  const d = p5.pixelDensity();

  const begin = () => p5.loadPixels();

  const end = () => p5.updatePixels();

  const open = (cb: () => any) => {
    begin();
    cb();
    end();
  };

  const index = (x: number, y: number) => (y * d * p5.width + x) * d * 4;

  const setPixel = (x: number, y: number, c: P5.Color | ColorTuple) => {
    const i = index(x, y);

    if (isColor(c)) {
      p5.pixels[i] = p5.red(c);
      p5.pixels[i + 1] = p5.green(c);
      p5.pixels[i + 2] = p5.blue(c);
      p5.pixels[i + 3] = p5.alpha(c);
    } else {
      p5.pixels[i] = c[0];
      p5.pixels[i + 1] = c[1];
      p5.pixels[i + 2] = c[2];
      p5.pixels[i + 3] = c[3];
    }
  };

  const getPixel = (x: number, y: number): ColorTuple => {
    const i = index(x, y);
    return [p5.pixels[i], p5.pixels[i + 1], p5.pixels[i + 2], p5.pixels[i + 3]];
  };

  const each = (cb: PixelCallback) => {
    for (let x = 0; x < p5.width; ++x) {
      for (let y = 0; y < p5.height; ++y) {
        cb(x, y, getPixel(x, y));
      }
    }
  };

  const map = (mapper: PixelMapper) => {
    each((x, y, c) => setPixel(x, y, mapper(x, y, c)));
  };

  return {
    each,
    map,
    getPixel,
    setPixel,
    index,
    begin,
    end,
    open
  };
}

export type PixelEditor = ReturnType<typeof createPixelEditor>;

export function editPixels(p5: P5 | P5.Graphics, cb: (editor: PixelEditor) => any) {
  const editor = createPixelEditor(p5);
  editor.begin();
  cb(editor);
  editor.end();
}
