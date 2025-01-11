import type { Fx } from "../composer"
import type P5 from "p5"

type TranslateProps = Partial<{
  x: number
  y: number
  z: number
}>

const is3D = (p5: P5) => (p5 as any)._renderer?.isP3D ?? false
const is2D = (p5: P5) => !is3D(p5)

/**
 * Creates a translation transform effect
 */
const translate = (props: TranslateProps = {}): Fx<TranslateProps> => {
  return (ctx, next) => {
    const {
      x = ctx.state.x ?? 0,
      y = ctx.state.y ?? 0,
      z = ctx.state.z ?? 0,
    } = props

    ctx.p5.push()
    ctx.p5.translate(x, y, z)
    next(ctx)
    ctx.p5.pop()
  }
}

/**
 * Creates an effect that centers the coordinate system
 */
const center = (): Fx<{}> => {
  return (ctx, next) => {
    if (is3D(ctx.p5)) {
      return next(ctx)
    }

    ctx.p5.push()
    ctx.p5.rectMode(ctx.p5.CENTER)
    ctx.p5.translate(ctx.p5.width / 2, ctx.p5.height / 2)
    next(ctx)
    ctx.p5.pop()
  }
}

/**
 * Collection of transform effects
 */
export const fx = {
  translate,
  center,
}
