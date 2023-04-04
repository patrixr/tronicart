import P5 from 'p5';
import { Circle, createCircle } from '@tronicart/geometry';
import { computeLineHitboxes, pack, Packable, PackableFactory } from '@tronicart/packing';
import { circlePoints } from '@tronicart/p5-fest/angles';
import { Drawable } from '@tronicart/lang-helpers';

const sketch = (p5: P5) => {
  let packingSurfaceW: number;
  let packingSurfaceH: number;
  let allowRotatedObjects: boolean;

  // ----------------------------------------------------------------
  // 		Circle
  // ----------------------------------------------------------------
  // const drawCircle = (circle: Circle) => {
  //   p5.stroke(255);
  //   p5.noFill();
  //   p5.circle(circle.x, circle.y, circle.diameter);
  // };

  const getSizeIndicator = () => p5.random(packingSurfaceW / 50, packingSurfaceW / 2);

  const setRandomStroke = () => {
    const color = p5.color(0);
    color.setAlpha(p5.random(80, 255));
    p5.stroke(color);
    p5.noFill();
  };

  const makeCircle = (x, y): Drawable<Packable> => {
    const size = getSizeIndicator();
    const circle = createCircle(x, y, size);
    const hitboxSize = size / 20;

    const hitboxes = circlePoints(size / 2, (size / hitboxSize) * 3, x, y).map((pos) => {
      return createCircle(pos.x, pos.y, hitboxSize);
    });

    return {
      hitboxes: () => hitboxes,
      draw: () => {
        p5.noFill();
        p5.circle(circle.x, circle.y, circle.diameter);
        // hitboxes.forEach(drawCircle);
      }
    };
  };

  // ----------------------------------------------------------------
  // 		Triangle
  // ----------------------------------------------------------------

  const makeTriangle = (x, y): Drawable<Packable> => {
    const sizeIndicator = getSizeIndicator();
    const center = p5.createVector(x, y);
    const direction = allowRotatedObjects
      ? p5.createVector(p5.random(), p5.random()).setMag(sizeIndicator / 2)
      : p5.createVector(0, -sizeIndicator / 3);
    const pt1 = center.copy().add(direction);
    const pt2 = center.copy().add(direction.copy().rotate(p5.TWO_PI / 3));
    const pt3 = center.copy().add(direction.copy().rotate(2 * (p5.TWO_PI / 3)));

    const hitboxes = [
      ...computeLineHitboxes(pt1.x, pt1.y, pt2.x, pt2.y),
      ...computeLineHitboxes(pt2.x, pt2.y, pt3.x, pt3.y),
      ...computeLineHitboxes(pt3.x, pt3.y, pt1.x, pt1.y)
    ];

    return {
      hitboxes: () => hitboxes,
      draw: () => {
        // hitboxes.forEach(drawCircle);
        p5.line(pt1.x, pt1.y, pt2.x, pt2.y);
        p5.line(pt2.x, pt2.y, pt3.x, pt3.y);
        p5.line(pt3.x, pt3.y, pt1.x, pt1.y);
      }
    };
  };

  // ----------------------------------------------------------------
  // 		Rectangle
  // ----------------------------------------------------------------

  const makeSquare = (x, y): Drawable<Packable> => {
    const sizeIndicator = getSizeIndicator();
    const center = p5.createVector(x, y);
    const direction = allowRotatedObjects
      ? p5.createVector(p5.random(), p5.random()).setMag(sizeIndicator / 2)
      : p5.createVector(sizeIndicator / 2, sizeIndicator / 2);
    const pt1 = center.copy().add(direction);
    const pt2 = center.copy().add(direction.copy().rotate(p5.PI / 2));
    const pt3 = center.copy().add(direction.copy().rotate(p5.PI));
    const pt4 = center.copy().add(direction.copy().rotate(3 * (p5.PI / 2)));

    const hitboxes = [
      ...computeLineHitboxes(pt1.x, pt1.y, pt2.x, pt2.y),
      ...computeLineHitboxes(pt2.x, pt2.y, pt3.x, pt3.y),
      ...computeLineHitboxes(pt3.x, pt3.y, pt4.x, pt4.y),
      ...computeLineHitboxes(pt4.x, pt4.y, pt1.x, pt1.y)
    ];

    return {
      hitboxes: () => hitboxes,
      draw: () => {
        // hitboxes.forEach(drawCircle);
        p5.line(pt1.x, pt1.y, pt2.x, pt2.y);
        p5.line(pt2.x, pt2.y, pt3.x, pt3.y);
        p5.line(pt3.x, pt3.y, pt4.x, pt4.y);
        p5.line(pt4.x, pt4.y, pt1.x, pt1.y);
      }
    };
  };

  p5.setup = (): void => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.background(0);
    p5.noFill();

    const marginX = p5.width * 0.05;
    const marginY = p5.height * 0.05;
    allowRotatedObjects = p5.random([true, false]);
    packingSurfaceW = p5.width - marginX * 2;
    packingSurfaceH = p5.height - marginY * 2;

    const shapes = pack({
      count: 200,
      maxFailures: 6000,
      factory: (x, y) => {
        return p5.random([makeTriangle, makeCircle, makeSquare])(x, y);
      },
      surfaceHeight: packingSurfaceH,
      surfaceWidth: packingSurfaceW,
      surfaceLeft: marginX,
      surfaceTop: marginY
    });

    p5.noStroke();
    p5.fill(200);
    p5.rect(marginX, marginY, packingSurfaceW, packingSurfaceH);
    shapes.forEach((s) => {
      setRandomStroke();
      s.draw();
    });

    p5.noLoop();
  };

  p5.draw = (): void => {};

  p5.doubleClicked = () => {
    p5.noLoop();
    console.log('done');
  };
};

new P5(sketch);
