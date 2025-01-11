---
draft: false
---

# Hand drawn lines

I'm experimenting with drawing hand-drawn lines in p5.js. I want basic lines that kinda "wobble" due to human imperfection. The idea is to use a noise function and draw the line point by point with a slight deviation from the straight path.

```js
import { draw, P5 } from "../components/sketch.js"
```

```js
draw(300, 300, (p5) => {
  p5.stroke(50)
  p5.noFill()
  p5.background("#F9F0EA")

  const samples = [0, 0.1, 0.3, 0.5, 0.7]
  samples.forEach((wobbliness, idx) => {
    new Line(p5, 100, 50 + 50 * idx, 200, 50 + 50 * idx, { wobbliness }).draw()
    p5.text(wobbliness, 70, 50 + 50 * idx)
  })
})
```

## Drawing a circle

If we have a way to draw a line, then I _assume_ we can draw a circle using small segments. Let's try it out:

```js echo
draw(300, 300, (p5) => {
  p5.noFill()
  p5.textAlign(p5.CENTER)
  p5.textStyle(p5.NORMAL)
  p5.background("#F9F0EA")

  const samples = [0, 0.1, 0.4, 0.7]

  samples.forEach((wobbliness, idx) => {
    const centerX = 150
    const centerY = 150
    const r = 20 + idx * 30
    const totalPoints = 100
    const angleStep = p5.TWO_PI / totalPoints

    for (let i = 0; i <= totalPoints; i++) {
      const angle = i * angleStep
      const x1 = centerX + p5.cos(angle) * r
      const y1 = centerY + p5.sin(angle) * r
      const x2 = centerX + p5.cos(angle + angleStep) * r
      const y2 = centerY + p5.sin(angle + angleStep) * r

      p5.stroke(50)
      p5.fill(100)
      new Line(p5, x1, y1, x2, y2, { wobbliness }).draw()
      p5.noStroke()
      p5.text(wobbliness, centerX, centerY - r - 10)
    }
  })
})
```

## Implementation

Here is the `Line` class that draws the wobbly lines. The `update` method calculates the next point in the line and the `draw` method renders the line.

By default the lines are drawn in one go, but you can pass an `animated` option to draw the line point by point, which will require calling the `update` method in a loop.

```js echo
class Line {
  static PROGRESS_INC = 0.01
  static WOBBLE_SCALE = 20

  constructor(p5, x1, y1, x2, y2, opts = {}) {
    this.p5 = p5
    this.progress = 0
    this.wobbliness = p5.constrain(opts.wobbliness ?? 0.3, 0, 1)
    this.source = p5.createVector(x1, y1)
    this.target = p5.createVector(x2, y2)
    this.prev = this.source.copy()
    this.points = [this.source]

    while (!opts.animated && this.progress < 1) {
      this.update()
    }
  }

  update() {
    if (this.progress >= 1) return

    this.progress = this.p5.constrain(this.progress + Line.PROGRESS_INC, 0, 1)

    const prev = this.points[this.points.length - 1]
    const noise = this.p5.noise(prev.x / 100, prev.y / 100)
    const wobble =
      this.p5.map(noise, 0, 1, -1, 1) * this.wobbliness * Line.WOBBLE_SCALE
    const nextPoint = P5.Vector.lerp(this.source, this.target, this.progress)
    const ortho = P5.Vector.sub(nextPoint, this.source)
      .rotate(this.p5.HALF_PI)
      .normalize()

    this.points.push(P5.Vector.add(nextPoint, ortho.mult(wobble)))
  }

  draw() {
    this.p5.beginShape()
    this.points.forEach((p) => this.p5.curveVertex(p.x, p.y))
    this.p5.endShape()
  }
}
```
