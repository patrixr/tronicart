---
draft: false
---

# Three Body Problem

This sketch simulates a three-body system in a two-dimensional space using p5.js. It is inspired by the [book](<https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)>) and [TV Series](<https://en.wikipedia.org/wiki/3_Body_Problem_(TV_series)>) titled "3 Body Problem"

To go straight to the simulation, please [scroll to the simulation](#simulation) below.

## Chaos theory

The system consists of three celestial bodies that interact with each other through gravity, influencing their positions and movements over time. This is a classic example of a chaotic system, where small changes in initial conditions can lead to vastly different outcomes. The simulation demonstrates how the three-body system evolves dynamically, showcasing the complex and unpredictable nature of **chaotic systems**.

## Setting up the simulation

The code is based on a [previous implementation of orbital mechanics](/orbital-mechanics). The main requirements for this simulation are:

1. **The 3 celestial bodies should be of comparable mass** <br>
   This problem will not work if one or more bodies have a mass that is significantly different than the others. We can think of the earth, moon and sun, which is not a 3 body problem because the sun is so massive that it dominates the system.
2. **One body should not be too far away from the other two** <br>
   The bodies should be close enough to interact with each other. If one body is too far away, it might not be influenced by the other two, leading to a 2 body system instead

```js
import { sketch } from "../components/sketch.js"
import { Palette } from "../lib/palette.js"
import { CelestialBody } from "../lib/celestial-body.js"

CelestialBody.MAX_TRAIL_LEN = 400

const h = 1080 / 3
const w = 1920 / 3
```

## Simulation

<div id="simulation">

<div class="warning" label="Warning️">
  Chaotic systems can easily get out of control and lead to unstable or unpredictable behavior. Should it look odd, please use the "Replay" button to restart the simulation.
</div>

```js
sketch((p5) => {
  const palette = new Palette({ p5 })

  const bodies = []
  const numBodies = 3
  const radius = 0.15 * w
  const angleIncrement = (2 * Math.PI) / numBodies
  const startAngle = 0 //Math.PI
  for (let i = 0; i < numBodies; i++) {
    const x = w / 2 + radius * Math.cos(startAngle + i * angleIncrement)
    const y = h / 2 + radius * Math.sin(startAngle + i * angleIncrement)
    bodies.push(new CelestialBody({ p5, x, y, mass: 100 }))
  }

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.frameRate(60)
    p5.noStroke()
    p5.fill(255)
  }

  p5.draw = () => {
    p5.push()
    p5.background(0)

    // Base rotation
    p5.translate(w / 2, h / 2)
    p5.rotate(p5.PI / 2)
    p5.translate(-w / 2, -h / 2)

    const centerOfGravity = CelestialBody.centerOfMass(bodies)
    p5.translate(w / 2 - centerOfGravity.x, h / 2 - centerOfGravity.y)
    bodies.forEach((body, idx) => {
      body.update(bodies)

      p5.noFill()
      p5.strokeWeight(5)

      if (body.trail.length < 2) return

      for (let i = 0; i < body.trail.length - 1; ++i) {
        const c = palette.lerped(60, body.trail[i].tick)
        const pt1 = body.trail[i].pos
        const pt2 = body.trail[i + 1].pos
        const alpha = p5.map(i, 0, body.trail.length, 0, 255)
        c.setAlpha(alpha)
        p5.stroke(c)
        p5.line(pt1.x, pt1.y, pt2.x, pt2.y)
      }

      // Draw halo around body
      p5.noStroke()
      p5.fill(255, 50)
      p5.circle(body.pos.x, body.pos.y, 30)
      p5.fill(255, 70)
      p5.circle(body.pos.x, body.pos.y, 20)
      p5.strokeWeight(1)
      p5.noFill()

      // Draw lines between bodies
      const nextBody = bodies[(idx + 1) % bodies.length]
      p5.stroke(255, 204, 100, 100)
      p5.line(body.pos.x, body.pos.y, nextBody.pos.x, nextBody.pos.y)
    })
    p5.pop()
  }
})
```
