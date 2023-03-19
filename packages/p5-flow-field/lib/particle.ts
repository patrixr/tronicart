import P5, { Vector } from 'p5';
import { FlowField } from './flowfield';

export abstract class BaseParticle {
  public p5: P5;
  public field: FlowField;
  public pos: Vector;
  public vel: Vector;
  public acc: Vector;
  public prevPos: Vector;
  public maxspeed: number;
  public strokeWeight: number;
  public dead: boolean;
  public tick: number;

  initialize(field: FlowField) {
    this.p5 = field.p5;
    this.field = field;
    this.pos ??= this.p5
      .createVector(this.p5.random(this.p5.width), this.p5.random(this.p5.height))
      .add(this.field.tileSize / 2);
    this.vel ??= this.p5.createVector(0, 0);
    this.acc ??= this.p5.createVector(0, 0);
    this.maxspeed ??= 0.1;
    this.prevPos = this.pos.copy();
    this.strokeWeight ??= this.p5.random(0.5, 10.5);
    this.dead = false;
    this.tick = 0;
  }

  update() {
    this.tick++;
    this.edges();

    if (this.dead) return;

    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

    let x = this.p5.floor(this.pos.x / this.field.tileSize);
    let y = this.p5.floor(this.pos.y / this.field.tileSize);
    let force = this.field.get(x, y);
    this.applyForce(force);

    this.strokeWeight -= 0.3;

    if (this.strokeWeight < 0.5) {
      this.strokeWeight = 0.5;
    }
  }

  applyForce(force) {
    if (force) {
      this.acc.add(force);
    }
  }

  abstract show(p5: P5): any;

  draw() {
    if (this.dead) return;

    this.show(this.p5);

    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    const { p5 } = this;
    if (this.pos.x >= p5.width - this.field.tileSize) {
      this.pos.x = 0;
      this.updatePrev();
      this.dead = true;
    }
    if (this.pos.x <= this.field.tileSize) {
      this.pos.x = p5.width;
      this.updatePrev();
      this.dead = true;
    }
    if (this.pos.y >= p5.height - this.field.tileSize) {
      this.pos.y = 0;
      this.updatePrev();
      this.dead = true;
    }
    if (this.pos.y <= this.field.tileSize) {
      this.pos.y = p5.height;
      this.updatePrev();
      this.dead = true;
    }
  }
}
