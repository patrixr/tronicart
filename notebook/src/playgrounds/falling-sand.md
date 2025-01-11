---
draft: false
---

# Falling Sand

Trying out a falling sand simulation in p5.js. This is a simple simulation where particles fall down and pile up. This is based on a Coding Train challenge by Daniel Shiffman.

```js
import { sketch } from "../components/sketch.js"
import { Palette } from "../lib/palette.js"
```

```js
const tileSize = 2
const h = 350
const w = 500
const makeGrid = (w, h, tileSize) => {
  const tileCountX = Math.floor(w / tileSize)
  const tileCountY = Math.floor(h / tileSize)
  const arr = new Array(tileCountX * tileCountY).fill(null)
  arr.w = Math.floor(w / tileSize)
  arr.h = Math.floor(h / tileSize)
  arr.tileSize = tileSize
  return arr
}

const get = (g, x, y) => g[y * g.w + x]
const oob = (g, x, y) => x < 0 || x >= g.w || y < 0 || y >= g.h
const set = (g, x, y, v) => {
  if (oob(g, x, y)) return false
  const idx = y * g.w + x
  if (!g[idx]) {
    g[idx] = v
    return true
  }
  return false
}
const empty = (g, x, y) => {
  if (oob(g, x, y)) return false
  return !g[y * g.w + x]
}
```

```js
sketch((p5) => {
  let grid = makeGrid(w, h, tileSize)
  let nextGrid = makeGrid(w, h, tileSize)
  let tick = 0
  let source = null
  let framesPerPile = 50
  const palette = new Palette({ p5, scheme: "mono" })

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.noStroke()
    source = p5.createVector(
      p5.random(p5.width * 0.1, p5.width * 0.9),
      p5.height * 0.1,
    )
  }

  /**
   * Spawns particles at a given position.
   * @param {number} realX - The real X coordinate where particles will spawn.
   * @param {number} realY - The real Y coordinate where particles will spawn.
   */
  const spawn = (realX, realY) => {
    const x = Math.floor(realX / tileSize)
    const y = Math.floor(realY / tileSize)
    for (let i = 0; i < 10; i++) {
      const dx = Math.floor(p5.random(-3, 3))
      const dy = Math.floor(p5.random(-3, 3))
      set(grid, x + dx, y + dy, palette.lerped(100))
    }
  }

  p5.draw = () => {
    p5.background(255)

    // Switch source every `framesPerPile` frames
    if (++tick % framesPerPile === 0) {
      tick = 0

      source = p5.createVector(
        p5.random(p5.width * 0.1, p5.width * 0.9),
        p5.height * 0.1,
      )
    }

    if (source && p5.frameCount < 2500) {
      spawn(source.x, source.y)
    }

    // Compute the next version of the grid
    nextGrid = makeGrid(w, h, tileSize)
    for (let x = grid.w - 1; x >= 0; x--) {
      for (let y = grid.h - 1; y >= 0; y--) {
        const v = get(grid, x, y)

        if (v) {
          if (y === grid.h - 1) {
            set(nextGrid, x, y, v)
          } else if (empty(grid, x, y + 1)) {
            set(nextGrid, x, y + 1, v)
          } else if (empty(grid, x + 1, y + 1)) {
            set(nextGrid, x + 1, y + 1, v)
          } else if (empty(grid, x - 1, y + 1)) {
            set(nextGrid, x - 1, y + 1, v)
          } else {
            set(nextGrid, x, y, v)
          }
        }
      }
    }

    // Draw the sand particles
    for (let x = 0; x < grid.w; x++) {
      for (let y = 0; y < grid.h; y++) {
        const v = get(nextGrid, x, y)
        if (v) {
          p5.fill(v)
          p5.rect(x * tileSize, y * tileSize, tileSize, tileSize)
        }
      }
    }

    grid = nextGrid
  }
})
```
