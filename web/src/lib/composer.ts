import type P5 from "p5"

type DrawFn = (p5: P5) => any

// Defines the context object passed to effects
// Contains both the p5 instance and current state
export class Context<T> {
  public p5: P5
  public state: T
}

// Represents the next step in a pipeline (called from effects)
export type NextFn<T> = (ctx: Context<T>) => any

// Effect function type that represent a visual effect to apply
// - Receives current context and next function in pipeline
// - Responsible for calling next() to continue the chain
export type Fx<T> = (ctx: Context<T>, next: NextFn<T>) => void

/**
 * Composes multiple effects into a single drawing function.
 * Creates a pipeline where each effect can modify the context before passing it on.
 *
 * @param state - Initial state object
 * @param effects - Array of effects to apply
 * @returns A drawing function compatible with p5.js
 *
 * Example usage:
 * const draw = compose(
 *   { count: 0 },
 *   clearBackground,
 *   translateToCenter,
 *   [rotate, scale], // Effects can be grouped in arrays
 *   drawShape
 * )
 */
export function compose<T>(data: T, ...effects: (Fx<T> | Fx<T>[])[]): DrawFn {
  const steps = effects.flat()

  let state = { ...data }
  let idx = 0

  const pipeline = (ctx: Context<T>) => {
    if (!steps[idx]) return
    state = ctx.state
    steps[idx++](ctx, pipeline)
  }

  return (p5) => {
    idx = 0
    pipeline({ state, p5 })
  }
}
