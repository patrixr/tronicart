---
draft: false
---

# Bit operations for creative coding

I'm investigating the idea of converting a byte value to a tile. The idea is to use the properties of the byte to determine the properties of the tile. This could possibly be used with a grayscale image to create a mosaic of tiles.

Before I figure out an artwork to create with this concept, I want to experiment with the idea. I'll start by creating a simple grid of tiles, each tile representing a byte value.

Leveraging a bitmask to extract the properties of the byte, I could then use these properties to draw the tile. Here's a set or **arbitrary rules** I'll use to determine the properties of the tile based on the binary representation of the byte:

<div style="background: #AAAAAA; width: 500px; margin: 30px 0px;">
<img src="/data/images/byte-tiles.png" />
</div>

```js
import { draw, sketch } from "../components/sketch.js"
import _ from "npm:lodash"
```

## Extracting properties

Now that we have a set of rules to determine the properties of the tile, we need to extract these properties from the byte value. We can do this by using a bitmask to extract the bits that represent each property.

Example of extracting the properties from a byte value:

```typescript
const variations = type & 0b111
const striped = (type & 0b1000) >> 3
const stripeType = (type & 0b10000) >> 4
const border = (type & 0b100000) >> 5
const useTertiary = (type & 0b1000000) >> 6
const inverted = (type & 0b10000000) >> 7
```

Some more advanced usages could include using the properties to determine the color of the tile, the shape of the tile, or the texture of the tile, etc

## Rendering tiles based on properties

I want to be able to visualize the properties of the byte value by rendering a tile based on these properties. I'll start by creating a simple grid of tiles, each tile representing a byte value.

```js
const CELL_SIZE = 50
const MARGIN = 5
const TILE_SIZE = CELL_SIZE - MARGIN * 2
const HALF_TILE = TILE_SIZE / 2
const SEPIA = "#f2e9e4"
const TERTIARY = "#00b4d8"
const LIGHT = SEPIA
const WHITE = "#ffffff"
const DARK = "#000000"
const STRIPES = 1
const CIRCLES = 2
const IMAGE =
  "https://images.unsplash.com/photo-1584635240092-d87d74854f68?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
```

```js
function resetStyles(p5) {
  p5.noFill()
  p5.noStroke()
  p5.strokeWeight(3)
}
```

```js
const createTempGfx = _.memoize((size, p5) => p5.createGraphics(size, size))

/**
 * Draws a tile with specific patterns and colors based on a given type.
 *
 * @param {p5} p5 - The p5.js instance to use for drawing.
 * @param {number} x - The x-coordinate where the tile should be drawn.
 * @param {number} y - The y-coordinate where the tile should be drawn.
 * @param {number} type - The byte value that determines the properties of the tile.
 */
function drawTile(p5, x, y, type, size) {
  const gfx = createTempGfx(size, p5)

  resetStyles(gfx)

  const show = type === 8

  type = 255 - (type % 256)
  const variations = type & 0b111
  const striped = (type & 0b1000) >> 3 == 0
  const stripeType = (type & 0b10000) >> 4 === 1 ? CIRCLES : STRIPES
  const border = (type & 0b100000) >> 5
  const useTertiary = (type & 0b1000000) >> 6
  const inverted = (type & 0b10000000) >> 7

  const bgColor = inverted ? DARK : LIGHT
  const fgColor = useTertiary ? TERTIARY : inverted ? LIGHT : DARK

  gfx.push()
  gfx.clear()

  gfx.background(bgColor)

  gfx.stroke(fgColor)

  if (striped) {
    gfx.push()
    if (stripeType === STRIPES) {
      const weight = 3
      gfx.rectMode(p5.CENTER)
      gfx.translate(size / 2, size / 2)
      gfx.rotate((p5.HALF_PI / 2) * variations)
      gfx.strokeWeight(weight)
      const left = -size + weight
      const right = size - weight
      const dist = p5.abs(left - right)
      const step = dist / 8
      for (let i = left; i < right; i += step) {
        gfx.line(i, -size, i, size)
      }
    } else {
      const { x, y } = [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 0.5, y: 0 },
        { x: 0, y: 0.5 },
        { x: 1, y: 0.5 },
        { x: 0.5, y: 1 },
      ][variations % 8]

      gfx.fill(fgColor)
      gfx.circle(x * size, y * size, size / 2)
      gfx.noFill()
      gfx.circle(x * size, y * size, size)
    }
    gfx.pop()
  }

  gfx.noFill()
  gfx.strokeWeight(border ? 7 : 0)
  gfx.rect(0, 0, size, size)

  gfx.pop()

  p5.image(gfx, x, y, size, size)
}
```

```js
draw(750, 860, (p5) => {
  p5.background(255)
  const cellSize = 50
  const margin = 5
  const tileSize = cellSize - margin * 2
  for (let i = 0; i <= 255; i++) {
    const x = ((i - 1) % 15) * cellSize
    const y = Math.floor((i - 1) / 15) * cellSize
    drawTile(p5, x + margin, y + margin, i, tileSize)
    p5.fill(100)
    p5.noStroke()
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.textSize(8)
    p5.text(i.toString(), x + cellSize / 2, y + cellSize)
  }
})
```

## Observations

As of now, it's hard to see the patterns in the tiles. I think it would be beneficial to add some more variation to the tiles to make them more visually distinct. I don't yet have a good use case for this technique, but I believe it could be useful for generating procedural textures or patterns.

In short, to be continued...
