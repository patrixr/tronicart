---
draft: false
---

# Triangles

I am not entirely sure what I am doing here :)

```js
import { draw, sketch } from "../components/sketch.js"

const parchment = "#f8f1e5"
const dark = "#23222C"
const polarToCartesian = (r, theta) => ({
  x: r * Math.cos(theta),
  y: r * Math.sin(theta),
})
```

```js
sketch((p5) => {
  let rotation = 0
  let scale = 1

  p5.setup = () => {
    p5.createCanvas(400, 400)
  }

  p5.draw = () => {
    const res = 30
    const startAngle = p5.PI / 6
    p5.smooth()
    p5.background(parchment)
    p5.stroke(200, 100)
    p5.noFill()
    p5.translate(p5.width / 2, p5.height / 1.8)

    for (let n = res - 1; n >= 0; n--) {
      const h = scale * n * (p5.height / res)
      const r = h / 2

      const p1 = polarToCartesian(r, startAngle)
      const p2 = polarToCartesian(r, startAngle + p5.TWO_PI / 3)
      const p3 = polarToCartesian(r, startAngle + (2 * p5.TWO_PI) / 3)
      if (n % 2 === 0) {
        p5.fill(255, 40)
      } else {
        p5.fill(0, 40)
        p5.fill(0, 40)
      }
      p5.fill(0, 50)
      p5.rotate(-rotation)
      p5.triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
    }

    rotation += 0.00015
  }
})
```
