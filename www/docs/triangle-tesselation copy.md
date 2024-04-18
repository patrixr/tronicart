---
draft: true
---

# Tesselate

```js
import { staticSketch, sketch } from "./components/sketch.js"
```

```tex
{\displaystyle h={\frac {\sqrt {3}}{2}}a}
```

## Building a tree of triangles

```js
class Triangle {
  constructor(p5, cx, cy, radius, rotation = 0) {
    const offset = -p5.PI / 2
    this.p5 = p5
    this.cx = cx
    this.cy = cy
    this.radius = radius
    this.rotation = rotation
    this.a = p5.createVector(
      cx + p5.cos(p5.TWO_PI / 3 + rotation + offset) * radius,
      cy + p5.sin(p5.TWO_PI / 3 + rotation + offset) * radius,
    )
    this.b = p5.createVector(
      cx + p5.cos(p5.TWO_PI + rotation + offset) * radius,
      cy + p5.sin(p5.TWO_PI + rotation + offset) * radius,
    )
    this.c = p5.createVector(
      cx + p5.cos(-p5.TWO_PI / 3 + rotation + offset) * radius,
      cy + p5.sin(-p5.TWO_PI / 3 + rotation + offset) * radius,
    )
  }

  display() {
    this.p5.triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y)
  }

  side() {
    return this.a.dist(this.b)
  }

  height() {
    return (this.p5.sqrt(3) / 2) * this.side()
  }

  flip() {
    return new Triangle(
      this.p5,
      this.cx,
      this.cy,
      this.radius,
      this.rotation + Math.PI,
    )
  }
}
```

```js
staticSketch(500, 500, (p5) => {
  const t = new Triangle(p5, 0, 0, 50)
  const f = t.flip()

  p5.translate(50, 50)
  for (let i = 0; i < 6; i++) {
    p5.push()
    p5.translate(0, i * t.side())
    t.display()
    // p5.translate(t.side())
    // t.display()
    p5.pop()
  }

  p5.fill(123, 200, 40)
  p5.translate(t.side() / 2, -t.height() / 3)
  for (let i = 0; i < 6; i++) {
    p5.push()
    if (i % 2 === 0) {
      p5.translate(0, t.height() / 3)
    }
    p5.translate(i * t.side(), 0)
    f.display()
    p5.translate(0, t.side())
    f.display()
    p5.pop()
  }
})
```
