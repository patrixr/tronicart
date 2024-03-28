# WIP

```js
import { staticSketch, sketch } from "./components/sketch.js"
import { DifferentialGrowth } from "./lib/differential-growth.js"

function createCircularPath(p5, cx, cy, radius) {
  const path = []
  const cellCount = 20
  const angleStep = p5.TWO_PI / cellCount
  for (let angle = 0; angle <= p5.TWO_PI; angle += angleStep) {
    const x = cx + p5.cos(angle) * radius
    const y = cy + p5.sin(angle) * radius
    path.push(p5.createVector(x, y))
  }
  return path
}
```

```js
sketch((p5) => {
  let dg = new DifferentialGrowth({ p5, minSeparation: 56 })
  const colors = [
    p5.color(255, 130, 3, 40),
    p5.color(3, 10, 255, 40),
    p5.color(3, 255, 10, 40),
  ]
  const w = 1080
  const h = 1900

  p5.setup = () => {
    p5.createCanvas(w, h)

    p5.background(0)
    p5.noStroke()
    dg.addPath(createCircularPath(p5, w / 2, h / 2, 400), { speed: 0.1 })
    dg.addPath(createCircularPath(p5, w / 2, h / 2, 100), { speed: 0.1 })
    // dg.addPath(createCircularPath(p5, w / 2, (3 * h) / 4, 100), { speed: 0.1 })
  }

  p5.draw = () => {
    dg.update()
    for (const i in dg.paths) {
      const path = dg.paths[i]
      p5.fill(colors[i % colors.length])
      for (const node of path.nodes) {
        p5.circle(node.x, node.y, 2)
      }
    }

    if (p5.frameCount % 100 == 0) {
      console.log(p5.frameRate())
    }
    if (p5.frameRate() < 10) {
      console.log("Stopping, we've pushed it too far!")
      p5.noLoop()
    }
  }
})
```
