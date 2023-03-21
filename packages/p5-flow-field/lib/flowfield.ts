import type P5 from 'p5';
import type { Vector } from 'p5';
import { FlowFieldParticle, UpdateCallback } from './particle';

const globalP5 = (): P5 => window as any as P5;

export class FlowField {
  public p5: P5;
  public tileSize: number;
  public particles: FlowFieldParticle[];
  private cols: number;
  private rows: number;
  private vectors: P5.Vector[];
  private center: P5.Vector | null;
  private inc: number;

  constructor(width, height, tileSize, p5: P5 | P5.Graphics = globalP5()) {
    this.tileSize = tileSize;
    this.cols = p5.ceil(width / tileSize);
    this.rows = p5.ceil(height / tileSize);
    this.center = null; //p5.createVector(p5.random(0, this.cols), p5.random(0, this.rows));
    this.vectors = [];
    this.inc = 0.1;
    this.p5 = p5;
    this.particles = [];
    this.reset();
  }

  public spawnParticles(count: number, particleUpdateMathod?: UpdateCallback) {
    const batch: FlowFieldParticle[] = [];
    for (let i = 0; i < count; ++i) {
      batch.push(new FlowFieldParticle(this, particleUpdateMathod));
    }
    this.particles.push(...batch);
    return batch;
  }

  public setVortex(center: P5.Vector) {
    this.center = center.copy();
  }

  public reset() {
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

  private index(x, y) {
    return x + y * this.cols;
  }

  public get(x, y) {
    return this.vectors[this.index(x, y)];
  }

  private each(cb: (direction: Vector, vecPos: Vector) => any) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        cb(
          this.vectors[this.index(x, y)],
          this.p5.createVector(x * this.tileSize, y * this.tileSize)
        );
      }
    }
  }

  public update(debug = false) {
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

    this.particles = this.particles.filter((p) => {
      // cheat to avoid making update public
      // @TODO refactor
      (p as any).update();
      return !p.dead;
    });
  }

  public particleCount() {
    return this.particles.length;
  }
}

export function createFlowField(
  width,
  height,
  tileSize,
  p5: P5 | P5.Graphics = globalP5()
): FlowField {
  return new FlowField(width, height, tileSize, p5);
}
