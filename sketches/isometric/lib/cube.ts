import { copyColor } from '@tronicart/cc/drawing/colors';
import { ColorProps, IsometricObject, IsoObjectTypes, Quad } from './world';

export type CubeProps = ColorProps & {
  size?: number;
  strokes?: [boolean, boolean, boolean];
};

export const createCube = (cellSize: number, props: CubeProps): IsometricObject => {
  const points = [];
  const { size = cellSize, strokes = [true, true, true] } = props;

  for (let angle = Math.PI / 6; angle < Math.PI * 2; angle += Math.PI / 3) {
    points.push({ x: Math.cos(angle) * size, y: Math.sin(angle) * size });
  }

  const quad1: Quad = [
    { x: 0, y: 0 },
    { x: points[5].x, y: points[5].y },
    { x: points[0].x, y: points[0].y },
    { x: points[1].x, y: points[1].y }
  ];
  const quad2: Quad = [
    { x: 0, y: 0 },
    { x: points[1].x, y: points[1].y },
    { x: points[2].x, y: points[2].y },
    { x: points[3].x, y: points[3].y }
  ];
  const quad3: Quad = [
    { x: 0, y: 0 },
    { x: points[3].x, y: points[3].y },
    { x: points[4].x, y: points[4].y },
    { x: points[5].x, y: points[5].y }
  ];

  return {
    quads: 3,
    type: IsoObjectTypes.Cube,
    draw(p5) {
      const { color = p5.color(255, 100, 80), opacity = 255 } = props;

      [quad1, quad2, quad3].forEach(([pt1, pt2, pt3, pt4], i) => {
        const col = copyColor(color, p5);
        const colorMul = (i + 1) / 3;
        col.setAlpha(opacity);
        if (strokes[i]) {
          p5.stroke(0, 0, 0);
        } else {
          p5.noStroke();
        }
        p5.fill(p5.red(col) * colorMul, p5.green(col) * colorMul, p5.blue(col) * colorMul, opacity);
        p5.quad(pt1.x, pt1.y, pt2.x, pt2.y, pt3.x, pt3.y, pt4.x, pt4.y);
      });
    }
  };
};
