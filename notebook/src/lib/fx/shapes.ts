import type { Fx } from "../composer.js"

/**
 * Properties for circle shape
 * @property x - X coordinate of circle center
 * @property y - Y coordinate of circle center
 * @property radius - Radius of the circle
 */
type CircleProps = Partial<{
  x: number
  y: number
  radius: number
}>

/**
 * Draws a circle a circle drawing effect
 */
const circle = (props: CircleProps = {}): Fx<CircleProps> => {
  return (ctx, next) => {
    const {
      x = props.x ?? 0,
      y = props.y ?? 0,
      radius = props.radius ?? 50,
    } = ctx.state
    ctx.p5.circle(x, y, radius * 2) // Diameter is 2x radius
    next(ctx)
  }
}

/**
 * Collection of shape drawing effects
 */
export const fx = {
  circle,
}
