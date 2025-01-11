---
draft: false
---

# Orbital Mechanics

This sketch simulates Orbital Mechanics in a two-dimensional space using p5.js.
The goal is to create a minimalistic and interactive visualization of celestial bodies moving under the influence of gravity.

[-> Jump to simulation](#simulation)

## How to implement basic orbital mechanics

The code leverages very simple and fundamental principles of physics and mathematics to simulate the motion of celestial bodies in space. Note that this is **not** a physics engine but merely a visual representation of the interactions between the bodies through **simple gravitational forces**.

The main formula used in the simulation is **Newton's Law of Universal Gravitation**, which describes the force of attraction between two objects based on their masses and the distance between them. The force between two objects is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.

```tex
F = G \frac{m_1 m_2}{r^2}
```

In this equation:

- \( F \) is the force between the two objects
- \( G \) is the gravitational constant
- \( m1 \) and \( m2 \) are the masses of the two objects
- \( r \) is the distance between the two objects

Here's a simple version of the implementation.

For the sake of simplicity, the Gravity constant \( G \) is forced to a value of `1` for this simulation.

```javascript echo
const G = 1

class CelestialBody {
  constructor({ p5, x, y, mass }) {
    this.p5 = p5
    this.pos = p5.createVector(x, y)
    this.vel = randomVelocity()
    this.acc = p5.createVector(0, 0)
    this.mass = mass
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acc.add(f)
  }

  update(bodies) {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
    bodies.forEach((other) => {
      if (other !== this) {
        const force = this.attract(other)
        this.applyForce(force)
      }
    })
  }

  attract(other) {
    let force = p5.Vector.sub(this.pos, other.pos)
    let distance = this.p5.constrain(force.mag(), 5, 25)
    let strength = (G * (this.mass * other.mass)) / (distance * distance)
    force.setMag(strength)
    return force
  }
}
```

```ts
import { sketch } from "../components/sketch.js"
import { Palette } from "../lib/palette.js"
import { CelestialBody } from "../lib/celestial-body.js"

CelestialBody.MAX_TRAIL_LEN = 100

const h = 500
const w = 500
```

## Simulation

<div id="simulation">

This simulation shows a central celestial body (the sun) and three smaller bodies (satellites) orbiting around it. The trails represent the paths taken by the satellites as they move under the influence of gravity.

```js echo
sketch((p5) => {
  const palette = new Palette({ p5 })
  const sun = new CelestialBody({ p5, x: w / 2, y: h / 2, mass: 500 })
  const bodies = sun.spawnSatellites(3)
  const all = [sun, ...bodies]

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.frameRate(60)
    p5.strokeWeight(5)
    p5.noFill()
  }

  p5.draw = () => {
    p5.background(0, 30)

    bodies.forEach((body, idx) => {
      body.update(all)

      for (let i = 0; i < body.trail.length - 1; ++i) {
        const pt1 = body.trail[i].pos
        const pt2 = body.trail[i + 1].pos
        p5.stroke(palette.lerped())
        p5.line(pt1.x, pt1.y, pt2.x, pt2.y)
      }
    })

    p5.noStroke()
    p5.fill(255, 204, 0)
    p5.circle(sun.pos.x, sun.pos.y, 50)
  }
})
```
