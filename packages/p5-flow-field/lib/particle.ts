import P5, { Vector } from 'p5';
import { FlowField } from './flowfield';

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
