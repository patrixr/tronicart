import P5 from "p5"
import type { NoState, Fx } from "../composer.js"
import { polarToCartesian } from "../math.js"

/**
 * Creates a watercolor texture effect on a P5.Graphics object.
 *
 * The function generates a watercolor texture by applying multiple brush strokes
 * with slight color variations and transparency. The brush strokes are applied
 * in a circular pattern with random angles and radii to simulate the natural
 * irregularities of watercolor painting. The resulting texture has a soft, blurred
 * appearance due to the simulated blur effect.
 */
export function createWatercolorTexture(
  col: P5.Color | number,
  p: P5,
  w = p.width,
  h = p.height,
): P5.Graphics {
  const color = typeof col === "number" ? p.color(col) : col

  const jitterColor = (c: P5.Color) => {
    const r = p.red(c) + p.random(-25, 25)
    const g = p.green(c) + p.random(-25, 25)
    const b = p.blue(c) + p.random(-25, 25)
    return p.color(r, g, b, p.random(1, 6))
  }

  const applyBrush = (
    g: P5.Graphics,
    x: number,
    y: number,
    brushSize: number,
    col: P5.Color,
    pressure = 0.1,
  ) => {
    const startAngle = p.random(p.TWO_PI)
    const strokeCount = p.floor(pressure * 10)

    g.push()
    g.translate(x, y)
    g.noStroke()

    for (let i = 0; i < strokeCount; i++) {
      g.beginShape()
      g.fill(jitterColor(col))

      let angle = 0
      while (angle < p.TWO_PI) {
        const radius = p.random(brushSize * 0.7, brushSize * 1.1)
        const [vx, vy] = polarToCartesian(radius, startAngle + angle)
        g.vertex(vx, vy)
        angle += p.random(0.7, 1.3)
      }

      g.endShape(p.CLOSE)
    }

    g.pop()
  }

  const g = p.createGraphics(w, h)
  const brushSize = w / 10
  const strokeCount = (w * h) / (1 * brushSize)

  // Set initial background with some opacity
  g.background(p.red(color), p.green(color), p.blue(color), 100)

  // Apply brush strokes
  for (let i = 0; i < strokeCount; i++) {
    const x = p.random(p.width)
    const y = p.random(p.height)
    applyBrush(g, x, y, brushSize, color)
  }

  g.filter(p.BLUR, 1)

  return g
}

type TextureState = {
  textures: Record<string, P5.Graphics | P5.Image>
}

export const fx = {
  watercolor: (
    textureName: string,
    color: P5.Color | number,
  ): Fx<NoState, TextureState> => {
    return (ctx, next) => {
      ctx.state.textures ??= {}
      ctx.state.textures[textureName] ??= createWatercolorTexture(color, ctx.p5)
      next(ctx as any)
    }
  },
}
