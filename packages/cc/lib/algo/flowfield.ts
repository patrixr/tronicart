import type P5 from 'p5';
import type { Vector } from 'p5';

const globalP5 = (): P5 => window as any as P5;

// -------------------------------------------------
// Main Class
// -------------------------------------------------

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

  public setAttractor(center: P5.Vector) {
    this.center = center.copy();
    this.reset();
  }

  public reset() {
    const { p5 } = this;
    const baseVector = p5.createVector(0, 1); // p5.createVector(p5.random(-1, 1), p5.random(-1, 1));

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
          v = baseVector.copy().rotate(p5.noise(xoff, yoff, 0) * p5.TWO_PI);
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

// -------------------------------------------------
// Creation function
// -------------------------------------------------


export function createFlowField(
  width,
  height,
  tileSize,
  p5: P5 | P5.Graphics = globalP5()
): FlowField {
  return new FlowField(width, height, tileSize, p5);
}

// -------------------------------------------------
// Particle class
// -------------------------------------------------


export type UpdateCallback = (particle: FlowFieldParticle, p5: P5) => any;

export class FlowFieldParticle {
  private p5: P5;
  private field: FlowField;
  private pos: Vector;
  private vel: Vector;
  private acc: Vector;
  private prevPos: Vector;
  private maxspeed: number;
  private updateCallback: UpdateCallback = null;
  public dead: boolean;
  public store: Map<string, any> = new Map();

  constructor(field: FlowField, updateCallback?: UpdateCallback) {
    this.p5 = field.p5;
    this.field = field;
    this.pos = this.p5.createVector(this.p5.random(this.p5.width), this.p5.random(this.p5.height));
    this.vel = this.p5.createVector(0, 0);
    this.acc = this.p5.createVector(0, 0);
    this.maxspeed = 2;
    this.prevPos = this.pos.copy();
    this.dead = false;
    this.updateCallback = updateCallback;
  }

  private update() {
    this.checkOutOfBounds();

    if (this.dead) return;

    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

    let x = this.p5.floor(this.pos.x / this.field.tileSize);
    let y = this.p5.floor(this.pos.y / this.field.tileSize);
    let force = this.field.get(x, y);

    this.applyForce(force);
    this.updatePreviousPosition();

    if (this.updateCallback) {
      this.updateCallback(this, this.p5);
    }
  }

  private applyForce(force) {
    if (force) {
      this.acc.add(force);
    }
  }

  private updatePreviousPosition() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  private checkOutOfBounds() {
    const { p5 } = this;
    if (this.pos.x >= p5.width - this.field.tileSize) {
      this.pos.x = 0;
      this.updatePreviousPosition();
      this.dead = true;
    }
    if (this.pos.x <= this.field.tileSize) {
      this.pos.x = p5.width;
      this.updatePreviousPosition();
      this.dead = true;
    }
    if (this.pos.y >= p5.height - this.field.tileSize) {
      this.pos.y = 0;
      this.updatePreviousPosition();
      this.dead = true;
    }
    if (this.pos.y <= this.field.tileSize) {
      this.pos.y = p5.height;
      this.updatePreviousPosition();
      this.dead = true;
    }
  }

  public get x() {
    return this.pos.x;
  }

  public get y() {
    return this.pos.y;
  }

  public get position() {
    return this.pos;
  }
}
