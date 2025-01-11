import type { Fx, NoState } from "../composer.js"
import type P5 from "p5"
import { hook } from "../hooks.js"

/**
 * Creates an effect that waits for user click before proceeding
 */
const waitForClick = (text = "Click to begin"): Fx<NoState> => {
  let setup = false
  let clicked = false

  return (ctx, next) => {
    // Initialize click handler on first run
    if (!setup) {
      setup = true
      hook(ctx.p5, "mouseClicked", () => {
        clicked = true
      })
    }

    // Show waiting message until clicked
    if (!clicked) {
      const { width, height } = ctx.p5
      ctx.p5.push()
      ctx.p5.background(0)
      ctx.p5.noStroke()
      ctx.p5.fill(255)
      ctx.p5.textAlign(ctx.p5.CENTER, ctx.p5.CENTER)
      ctx.p5.text(text, width / 2, height / 2)
      ctx.p5.pop()
      return
    }

    next(ctx)
  }
}

/**
 * Collection of interaction effects
 */
export const fx = {
  waitForClick,
}
