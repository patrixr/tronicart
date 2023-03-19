import type P5 from 'p5';
import type { Vector } from 'p5';
import { BaseParticle } from './particle';

const globalP5 = (): P5 => window as any as P5;

export class FlowField {
  p5: P5;
  width: number;
  height: number;
  tileSize: number;
  cols: number;
  rows: number;
  vectors: P5.Vector[];
  center: P5.Vector | null;
  inc: number;
  particles: BaseParticle[];

  constructor(width, height, tileSize, p5: P5 | P5.Graphics = globalP5()) {
    this.width = width;
    this.height = height;
    this.tileSize = tileSize;
    this.cols = p5.ceil(width / tileSize);
    this.rows = p5.ceil(height / tileSize);
    this.center = null; //p5.createVector(p5.random(0, this.cols), p5.random(0, this.rows));
    this.vectors = [];
    this.inc = 0.1;
    this.p5 = p5;
    this.particles = [];
  }

  add(particle: BaseParticle) {
    this.particles.push(particle);
    particle.initialize(this);
  }

  withCenter(center: P5.Vector) {
    this.center = center.copy();
  }

  init() {
    const { p5 } = this;

    this.vectors = [];
    let yoff = 0;
    for (let y = 0; y < this.rows; y++) {
      let xoff = 0;
      for (let x = 0; x < this.cols; x++) {
        let v: P5.Vector;

        if (this.center) {
          v = this.center
            .copy()
            .sub(p5.createVector(x, y))
            .rotate(p5.noise(xoff, yoff, 0) * p5.TWO_PI);
        } else {
          v = p5.createVector(0, 1).rotate(p5.noise(xoff, yoff, 0) * p5.TWO_PI);
        }

        v.setMag(-1);
        this.vectors[this.index(x, y)] = v;
        xoff += this.inc;
      }
      yoff += this.inc;
    }
  }

  index(x, y) {
    return x + y * this.cols;
  }

  get(x, y) {
    return this.vectors[this.index(x, y)];
  }

  each(cb: (direction: Vector, vecPos: Vector) => any) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        cb(
          this.vectors[this.index(x, y)],
          this.p5.createVector(x * this.tileSize, y * this.tileSize)
        );
      }
    }
  }

  draw(debug = false) {
    const { p5 } = this;

    if (debug) {
      p5.fill(255);
      p5.stroke(255, 150);
      this.each((v, { x, y }) => {
        p5.push();
        p5.translate(x, y);
        p5.line(0, 0, v.x * 10, v.y * 10);
        p5.pop();
      });
    }

    this.particles.forEach((p) => {
      p.update();
      p.draw();
    });
  }
}
