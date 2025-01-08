import P5 from "../../../_node/p5@1.11.2/index.8e5b333a.js";
export class Tile {
  x;
  y;
  z;
  size;
  height;
  color;
  maxColor;
  target;
  // Rotation state
  rotationX = 0;
  rotationY = 0;
  rotationInfluence = 0;
  // Constants
  ROTATION_SPEED = 0.1;
  INFLUENCE_SPEED = 0.1;
  MAX_INFLUENCE = 1;
  RESET_DISTANCE = 400;
  constructor(p5, x, y, z, size) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.height = size * 0.5;
    this.target = null;
    this.color = p5.color(100, 150, 200);
    this.maxColor = p5.color(200, 150, 100);
  }
  setColor(color) {
    this.color = color;
  }
  setTarget(target) {
    this.target = target;
  }
  draw(p5) {
    p5.push();
    p5.translate(this.x, this.y, this.z);
    if (this.target) {
      const tilePos = p5.createVector(this.x, this.y, this.z);
      const direction = P5.Vector.sub(this.target, tilePos);
      const distance = direction.mag();
      const targetRotY = p5.atan2(direction.x, direction.z);
      const targetRotX = -p5.atan2(
        direction.y,
        p5.sqrt(direction.x * direction.x + direction.z * direction.z)
      );
      if (distance > this.RESET_DISTANCE) {
        this.rotationInfluence = p5.max(
          0,
          this.rotationInfluence - this.INFLUENCE_SPEED
        );
      } else {
        this.rotationInfluence = p5.min(
          this.MAX_INFLUENCE,
          this.rotationInfluence + this.INFLUENCE_SPEED
        );
      }
      this.rotationX += (targetRotX * this.rotationInfluence - this.rotationX) * this.ROTATION_SPEED;
      this.rotationY += (targetRotY * this.rotationInfluence - this.rotationY) * this.ROTATION_SPEED;
    } else {
      this.rotationInfluence = p5.max(
        0,
        this.rotationInfluence - this.INFLUENCE_SPEED
      );
      this.rotationX *= 1 - this.ROTATION_SPEED;
      this.rotationY *= 1 - this.ROTATION_SPEED;
    }
    p5.rotateY(this.rotationY);
    p5.rotateX(this.rotationX);
    p5.rotateZ(p5.PI / 2);
    p5.noStroke();
    p5.specularMaterial(250);
    p5.shininess(100);
    const lerpedColor = p5.lerpColor(
      this.color,
      this.maxColor,
      this.rotationInfluence
    );
    p5.fill(lerpedColor);
    p5.beginShape();
    for (let i = 0; i < 6; i++) {
      const angle = p5.TWO_PI / 6 * i;
      const x = this.size * p5.cos(angle);
      const y = this.size * p5.sin(angle);
      p5.vertex(x, y, -this.height / 2);
    }
    p5.endShape(p5.CLOSE);
    p5.pop();
  }
}
