import type P5 from 'p5';
import { getP5 } from './configure';

export function colorsEqual(c1: P5.Color, c2: P5.Color) {
  return c1.toString() === c2.toString();
}

export type LerpingColorConfig = {
  colors: P5.Color[];
  rotate?: boolean;
};

type LerpingColor = {
  update(delta?: number): void;
  color(): P5.Color;
};

export function lerpingColor(config: LerpingColorConfig): LerpingColor {
  const p5 = getP5();
  const { colors } = config;
  const rotate = config.rotate ?? true;

  let index = 0;
  let progress = 0;

  const computeColor = () =>
    p5.lerpColor(colors[index % colors.length], colors[(index + 1) % colors.length], progress);

  const color = () => {
    return computeColor();
  };

  const update = (delta = 0.005) => {
    progress += delta;

    if (progress >= 1) {
      if (!rotate && index + 1 >= colors.length - 1) {
        progress = 1;
        return;
      }
      index++;
      progress = 0;
    }

    return computeColor();
  };

  return { color, update };
}

export function copyColor(c: P5.Color): P5.Color {
  const p5 = getP5();
  return p5.color(p5.red(c), p5.green(c), p5.blue(c), p5.alpha(c));
}
