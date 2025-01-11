import processing.core.PApplet;
import processing.core.PVector;

public class FlowFieldParticle {
  private final FlowField field;
  private PVector pos;
  private PVector vel;
  private PVector acc;
  private PVector prevPos;
  public boolean dead;
  private float size;
  private float maxSize;
  private float lifeTick = 0;
  private float defaultTTL = random(MIN_PARTICLE_LIFESPAN, MAX_PARTICLE_LIFESPAN);
  private float kinectTTL = random(1, MAX_PARTICLE_LIFESPAN_WITH_KINECT);
  private float brightness = random(30, 100);
  private float saturation = random(30, 100);
  private PVector forcedTargetPosition = null;

  public FlowFieldParticle(FlowField field, float x, float y) {
    this(field);

    pos.x = x;
    pos.y = y;
  }

  public FlowFieldParticle(FlowField field) {
    this.field = field;
    pos = new PVector(random(-200, width + 200), random(-200, height + 200));
    vel = new PVector(0, 0);
    acc = new PVector(0, 0);
    prevPos = pos.copy();
    dead = false;
    size = 2;
    maxSize = random(3, 6);
    
    if (random(1) < 0.001) {
      kinectTTL *= 10;  
    }
    
    if (random(1) < 0.01) {
      kinectTTL *= 10;  
    }
  }
  
  public float getTTL() {
    return $.currentState == State.KINECT ? kinectTTL : defaultTTL;
  }

  public float getMaxSpeed() {
    return $.currentState == State.KINECT ? PARTICLE_SPEED_DURING_KINECT_MODE : PARTICLE_SPEED;
  }

  public float distFromTarget() {
    return dist(pos.x, pos.y, forcedTargetPosition.x, forcedTargetPosition.y);
  }

  public boolean isParking() {
    return forcedTargetPosition != null;
  }

  public boolean isParked() {
    return isParking() && distFromTarget() <= PARTICLE_PROXIMITY_THRESHOLD;
  }

  public boolean isMoving() {
    return !isParked();
  }

  private void draw() {
    checkOutOfBounds();

    // they die much slower when parked
    lifeTick += isMoving() ? 1 : 0;

    dead = dead || lifeTick >= getTTL();

    if (dead) return;

    PVector force = null;

    if (!isParked()) {
      vel.add(acc);
      vel.limit(getMaxSpeed());
      pos.add(vel);
      acc.mult(0);

      if (isParking()) {
        // Try to move towards destination
        var distFromTarget = dist(pos.x, pos.y, forcedTargetPosition.x, forcedTargetPosition.y);

        if (distFromTarget < width / 2) {
          force = PVector.sub(forcedTargetPosition, pos);
        }
      }

      if (force == null) {
        int x = PApplet.floor(pos.x / field.tileSize);
        int y = PApplet.floor(pos.y / field.tileSize);
        force = field.get(x, y);
      }

      applyForce(force);
      updatePreviousPosition();
    }

    size = map(lifeTick / defaultTTL, 1, 0, maxSize, 1);
    
    if ($.currentState == State.KINECT && REVERSE_PARTICLE_GROWTH_WITH_KINECT_MODE) {
      size = maxSize - size;  
    }
    
    var opacity = isParking() ? 50 : 100;

    var hue = field.colorRand % 360;

    push();
    noStroke();
    fill(hue, saturation, brightness, opacity);
    circle(pos.x, pos.y, size);
    pop();
  }

  private void applyForce(PVector force) {
    if (force != null) {
      acc.add(force);
    }
  }

  private void updatePreviousPosition() {
    prevPos.x = pos.x;
    prevPos.y = pos.y;
  }

  private void checkOutOfBounds() {
    if (pos.x >= width - field.tileSize) {
      pos.x = 0;
      updatePreviousPosition();
      dead = true;
    }
    if (pos.x <= field.tileSize) {
      pos.x = width;
      updatePreviousPosition();
      dead = true;
    }
    if (pos.y >= height - field.tileSize) {
      pos.y = 0;
      updatePreviousPosition();
      dead = true;
    }
    if (pos.y <= field.tileSize) {
      pos.y = height;
      updatePreviousPosition();
      dead = true;
    }
  }

  public float getX() {
    return pos.x;
  }

  public float getY() {
    return pos.y;
  }

  public PVector getPosition() {
    return pos;
  }
}
