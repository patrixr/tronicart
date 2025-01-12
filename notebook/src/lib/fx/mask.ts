import type { Fx, Context } from "../composer.js"

/**
 * Creates your own effect
 */
const mask = <T>(): Fx<T, null> => {
  return (ctx, next) => {
    // Clip exists but isn't typed
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
