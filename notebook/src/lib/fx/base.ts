import type { Fx, Context } from "../composer.js"
import type P5 from "p5"

type FreedrawFn<T> = (ctx: Context<T>) => void
type FillProps = Partial<{ fill: P5.Color | number }>
type StrokeProps = Partial<{
  stroke: P5.Color | number
  weight: number
}>

/**
 * Creates your own effect
 */
const freedraw = <T>(fn: FreedrawFn<T>): Fx<T> => {
  return (ctx: Context<any>, next) => {
    ctx.p5.push()
    fn(ctx)
    next(ctx)
    ctx.p5.pop()
  }
}

/**
 * Creates your own effect that only runs once
 */
const once = <T>(fn: FreedrawFn<T>): Fx<T, null> => {
  let done = false

  return (ctx, next) => {
    if (done) {
      return next(ctx)
    }

    ctx.p5.push()
    fn(ctx)
    done = true
    next(ctx)
    ctx.p5.pop()
  }
}

/**
 * Applies fill properties to the drawing context.
 */
const fill = (props: FillProps = {}): Fx<FillProps> => {
  return (ctx, next) => {
    const { fill = ctx.state.fill } = props
    ctx.p5.push()
    if (typeof fill !== "undefined") {
      ctx.p5.fill(fill as any)
    } else {
      ctx.p5.noFill()
    }
    next(ctx)
    ctx.p5.pop()
  }
}

/**
 * Applies stroke properties to the drawing context.
 */
const stroke = (props: StrokeProps = {}): Fx<StrokeProps> => {
  return (ctx, next) => {
    const { stroke = ctx.state.stroke, weight = ctx.state.weight } = props

    ctx.p5.push()
    if (typeof stroke !== "undefined") {
      ctx.p5.stroke(stroke as any)
    } else {
      ctx.p5.noStroke()
    }
    if (typeof weight !== "undefined") {
      ctx.p5.strokeWeight(weight)
    } else {
      ctx.p5.strokeWeight(1)
    }
    next(ctx)
    ctx.p5.pop()
  }
}

export const fx = {
  fill: fill,
  once: once,
  do: freedraw,
  stroke: stroke,
  freedraw: freedraw,
}
