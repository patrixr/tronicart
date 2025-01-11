import { copyColor } from '@tronicart/cc/drawing/colors';
import { ColorProps, IsometricObject, IsoObjectTypes, Quad } from './world';
import { Color } from 'p5';

export type LineProps = ColorProps & {
  weight?: number;
};

export const createLine = (x: number, y: number, props: LineProps): IsometricObject => {
  return {
    quads: 0,
    type: IsoObjectTypes.Line,
    draw(p5) {
      const { color = p5.color(255, 100, 80), opacity = 255, weight = 1 } = props;

      p5.noFill();
      p5.stroke(color);
      p5.strokeWeight(weight);
      p5.line(0, 0, x, y);
    }
  };
};
