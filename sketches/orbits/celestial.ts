import P5 from 'p5';
import { lerpingColor, LerpingColor } from '@tronicart/cc/drawing/colors';
import { Coordinates } from '@tronicart/cc/algo/coordinates';
import { Palette } from '@tronicart/cc/drawing/palette';

type TrailRecord = {
  pos: P5.Vector;
  color: P5.Color;
};

export class CelestialBody {
  static G = 1;
  static MAX_TRAIL_LEN = 100;

  pos: P5.Vector;
  vel: P5.Vector;
  acc: P5.Vector;
  trail: TrailRecord[];
  mass: number;
  maxTrailLen: number;
  gradient: LerpingColor;
  canvas: P5 | P5.Graphics;
  parent?: CelestialBody;

  constructor(p5: P5 | P5.Graphics, x: number, y: number, mass: number) {
    this.canvas = p5;
    this.pos = p5.createVector(x, y);
    this.trail = [];
    this.vel = p5.random([
      // p5.Vector.random2D()
      this.pos
        .copy()
        .sub(p5.createVector(p5.width / 2, p5.height / 2))
        .rotate(p5.PI / 2)
        .normalize()
        .mult(2)
    ]);
    this.acc = p5.createVector(0, 0);
    this.mass = mass;
    this.maxTrailLen = CelestialBody.MAX_TRAIL_LEN;

    this.gradient = lerpingColor({
      p5,
      colors: p5.shuffle(Palette.allColors()),
      rotate: true
    });
  }

  /*
   * @param {CelestialBody[]} objects
   * @memberof CelestialBody
   */
  gravitateTowards(objects) {
    objects = [objects].flat();

    for (const obj of objects) {
      if (obj === this) continue;

      const force = this.computeForce(obj);
      //       this.acc.add(force.copy().div(this.mass * 10))
      this.acc.add(force.copy().div(this.mass * 2));
    }
  }

  /**
   *
   * @param {CelestialBody} object
   * @memberof CelestialBody
   */
  computeForce(object) {
    const p5 = this.canvas;
    const force = P5.Vector.sub(object.pos, this.pos);
    const distance = p5.constrain(force.mag(), 5, 25);
    const strength = (CelestialBody.G * this.mass * object.mass) / p5.pow(distance, 2);

    force.normalize();
    force.mult(strength / 2);
    return force;
  }

  /**
   *
   * @param {number} count
   * @returns {CelestialBody[]}
   * @memberof CelestialBody
   */
  spawnSatellites(count, mass = 2) {
    const p5 = this.canvas;
    return Coordinates.circlePoints(200, count, this.pos.x, this.pos.y).map((pt) => {
      const range = p5.max([p5.width, p5.height]) / p5.random(4, 8);
      const randX = p5.random(-range, range);
      const randY = p5.random(-range, range);
      const c = new CelestialBody(p5, pt.x + randX, pt.y + randY, mass);
      c.parent = this;
      return c;
    });
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.gradient.update(0.01);

    const entry = {
      pos: this.pos.copy(),
      color: this.gradient.color()
    };

    this.trail.push(entry);

    if (this.trail.length > this.maxTrailLen) {
      this.trail.splice(0, this.trail.length - this.maxTrailLen);
    }
  }

  showStatic() {
    const p5 = this.canvas;
    p5.strokeWeight(2);
    p5.stroke(this.gradient.color());
    p5.fill(this.gradient.color());
    p5.circle(this.pos.x, this.pos.y, this.mass / 2);
  }

  show() {
    const p5 = this.canvas;
    p5.noFill();
    p5.strokeWeight(this.mass);

    if (this.trail.length < 2) return;

    for (let i = 0; i < this.trail.length - 1; ++i) {
      const c = this.trail[i].color;
      const pt1 = this.trail[i].pos;
      const pt2 = this.trail[i + 1].pos;
      const alpha = p5.map(i, 0, this.maxTrailLen, 0, 255);
      c.setAlpha(alpha);
      p5.stroke(c);
      p5.line(pt1.x, pt1.y, pt2.x, pt2.y);
    }
  }
}
