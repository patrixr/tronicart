import type { Fx, Context } from "../composer.js"

/**
 * Creates your own effect
 */
const mask = <T>(): Fx<T> => {
  return (ctx, next) => {
    ;(ctx.p5 as any).clip(() => {
      ctx.p5.push()
      next(ctx)
      ctx.p5.pop()
    })
  }
}

export const fx = {
  mask: mask,
}
