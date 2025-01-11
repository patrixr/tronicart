import P5 from 'p5';
import { getGlobalP5 } from '../p5/configure';

export function colorsEqual(c1: P5.Color, c2: P5.Color) {
  return c1.toString() === c2.toString();
}

export function isColor(obj: any): obj is P5.Color {
  return (
    !!obj &&
    typeof obj.setAlpha === 'function' &&
    typeof obj.setRed === 'function' &&
    typeof obj.setGreen === 'function' &&
    typeof obj.setBlue === 'function'
  );
}

export type LerpingColorConfig = {
  p5?: P5;
  colors: P5.Color[];
  rotate?: boolean;
};

export type LerpingColor = {
  update(delta?: number): void;
  color(): P5.Color;
};

export function lerpingColor(config: LerpingColorConfig): LerpingColor {
  const { colors, p5 = getGlobalP5() } = config;
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

export function copyColor(c: P5.Color, p5: P5 | P5.Graphics = getGlobalP5()): P5.Color {
  return p5.color(p5.red(c), p5.green(c), p5.blue(c), p5.alpha(c));
}
