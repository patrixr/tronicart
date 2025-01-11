import P5 from "p5"
import { type Point, circlePoints } from "./math.js"

type TrailEntry = {
  pos: P5.Vector
  tick: number
}

type CelestialBodyProps = {
  p5?: P5
  x: number
  y: number
  mass: number
  parent?: CelestialBody | null
  vel?: P5.Vector
}

/**
 * Represents a celestial body with physics and visual properties.
 * This class provides methods to simulate gravitational forces, spawn satellites,
 * and manage the rendering of the celestial body and its trail.
 */
export class CelestialBody {
  private static G: number = 1
  private static ID: number = 0
  private static MAX_TRAIL_LEN: number = 100

  public readonly id: number
  private tick: number
  public pos: P5.Vector
  public vel: P5.Vector
  private acc: P5.Vector
  public trail: TrailEntry[]
  public mass: number
  private maxTrailLen: number
  private p5: P5
  public parent: CelestialBody | null

  /**
   * Creates an instance of CelestialBody with specified properties.
   */
  constructor(props: CelestialBodyProps) {
    const {
      p5 = window as unknown as P5,
      x,
      y,
      mass,
      parent = null,
      vel,
    } = props

    this.id = ++CelestialBody.ID
    this.p5 = p5
    this.tick = 0
    this.pos = p5.createVector(x, y)
    this.trail = []

    if (vel) {
      this.vel = vel
    } else if (parent) {
      const toParent = P5.Vector.sub(parent.pos, this.pos)
      this.vel = toParent
        .rotate(p5.HALF_PI)
        .normalize()
        .mult(parent.mass / 100)
    } else {
      this.vel = p5.random([
        this.pos
          .copy()
          .sub(p5.createVector(p5.width / 2, p5.height / 2))
          .rotate(p5.PI / 2)
          .normalize()
          .mult(2),
      ])
    }

    this.acc = p5.createVector(0, 0)
    this.mass = mass
    this.maxTrailLen = CelestialBody.MAX_TRAIL_LEN
    this.parent = parent
  }

  public gravitateTowards(objects: CelestialBody | CelestialBody[]): void {
    const objectsArray = Array.isArray(objects) ? objects : [objects]

    for (const obj of objectsArray) {
      if (obj === this) continue

      const force = this.computeForce(obj)
      this.acc.add(force.copy().div(this.mass * 2))
    }
  }

  private computeForce(object: CelestialBody): P5.Vector {
    const force = P5.Vector.sub(object.pos, this.pos)
    const distance = this.p5.constrain(force.mag(), 5, 25)
    const strength =
      (CelestialBody.G * this.mass * object.mass) / this.p5.pow(distance, 2)

    force.normalize()
    force.mult(strength / 2)
    return force
  }

  public spawnSatellites(
    count: number,
    range: number = 200,
    mass: number = this.mass / 3,
  ): CelestialBody[] {
    return circlePoints(range, count, this.pos.x, this.pos.y).map(
      (pt: Point) => {
        const maxRange =
          this.p5.max([this.p5.width, this.p5.height]) / this.p5.random(4, 8)
        const randX = this.p5.random(-maxRange, maxRange)
        const randY = this.p5.random(-maxRange, maxRange)

        return new CelestialBody({
          p5: this.p5,
          mass,
          x: pt.x + randX,
          y: pt.y + randY,
          parent: this,
        })
      },
    )
  }

  public update(otherBodies: CelestialBody | CelestialBody[]): void {
    this.gravitateTowards(otherBodies)
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0)

    const entry: TrailEntry = {
      pos: this.pos.copy(),
      tick: this.tick++,
    }

    this.trail.push(entry)
    if (this.trail.length > this.maxTrailLen) {
      this.trail.splice(0, this.trail.length - this.maxTrailLen)
    }
  }

  public static centerOfMass(bodies: CelestialBody[]): P5.Vector {
    const p5 = bodies[0].p5
    const totalMass = bodies.reduce((acc, body) => acc + body.mass, 0)
    const center = p5.createVector(0, 0)

    for (const body of bodies) {
      center.add(body.pos.copy().mult(body.mass))
    }

    center.div(totalMass)
    return center
  }
}
