import type P5 from "p5"

type Obj = { [key: string]: any }

type FxList = readonly [Fx<Obj>, ...Fx<Obj>[]]

export type NoState = {}

// ------------------------------------
// Effects
// ------------------------------------

// Defines the context object passed to effects
// Contains both the p5 instance and current state
export interface Context<T> {
  p5: P5
  state: T & { [key: string]: any }
}

// Represents the next step in a pipeline (called from effects)
export type NextFn<T> = (ctx: Context<T>) => any

/**
 * Represents an effect function that can modify the drawing context.
 *
 * @template S - The type of the state required by the effect.
 * @template Ext - The type of the state properties set by the effect.
 *
 * @param ctx - The context object containing the p5 instance and current state.
 * @param next - The next function in the pipeline to call after this effect.
 */
export type Fx<S = NoState, Ext extends Obj = {}> = (
  ctx: Context<S>,
  next: NextFn<S & Ext>,
) => void

/**
 * Represents the composed state derived from an array of effects.
 *
 * @template Effects - A tuple of effect functions.
 *
 * This type recursively combines the state requirements of each effect in the array,
 * while omitting the properties set by each effect from the resulting state type.
 */
type ComposedState<Effects extends readonly Fx<any, any>[]> = Effects extends [
  Fx<infer U, infer W>,
  ...infer Rest extends Fx<any>[],
]
  ? Omit<U & ComposedState<Rest>, keyof W>
  : {}

type DetectState<E extends Fx | readonly Fx<any, any>[]> =
  E extends Fx<infer S>
    ? S
    : E extends readonly Fx<any, any>[]
      ? ComposedState<E>
      : never

// ------------------------------------
// Composer
// ------------------------------------

export type WithDefaults<
  S extends Record<string, any>,
  D extends Record<string, any>,
> = Omit<S, keyof D & keyof S> & {
  [K in keyof D & keyof S]?: S[K]
}

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
 *   rotate,
 *   scale,
 *   drawShape
 * )
 */
export function compose<
  E extends readonly [Fx, ...Fx[]],
  S extends ComposedState<E>,
  D extends {
    [K in keyof S]?: S[K]
  } & Obj,
>(defaults: D, effects: E): Fx<WithDefaults<S, D>> {
  let idx = 0
  let end: NextFn<any>

  const pipeline = (ctx: Context<S>) => {
    const next = idx === effects.length - 1 ? end : pipeline
    effects[idx++](ctx, next)
  }

  return (ctx, next) => {
    idx = 0
    end = next

    // Kickoff the chain of effects
    pipeline({
      state: {
        ...defaults,
        ...ctx.state,
      } as any as S,
      p5: ctx.p5,
    })
  }
}

/**
 * Sequences multiple effects into a single drawing function.
 * Each effect is applied in sequence, without being nested into each other.
 *
 */
export function isolate<
  E extends readonly [Fx<Obj>, ...Fx<Obj>[]] | Fx,
  S extends DetectState<E>,
>(effects: E): Fx<WithDefaults<S, {}>> {
  let idx = 0
  let state: S
  let fxList = Array.isArray(effects) ? effects : [effects]

  const pipeline = (ctx: Context<S>) => {
    if (idx >= fxList.length) return
    effects[idx++](ctx, pipeline)
  }

  return (ctx, next) => {
    idx = 0
    state = ctx.state

    // Kickoff the chain of effects
    pipeline({
      state: state,
      p5: ctx.p5,
    })

    // Continue without nesting the next statement inside effects
    next({
      state: state,
      p5: ctx.p5,
    })
  }
}

// ------------------------------------
// Scene
// ------------------------------------

type StateFactory<S> = () => S

type Scene = {
  draw: (p5: P5) => any
  reset: () => void
}

/**
 * Creates a scene with a given state factory and effects.
 * The scene has a draw method to render using p5.js and a reset method to reset the state.
 *
 * @param stateFactory - A factory function that returns the initial state object
 * @param effects - An array of effects to apply in sequence
 * @returns An object with draw and reset methods
 *
 * Example usage:
 * const myScene = scene(
 *   () => ({ count: 0 }),
 *   [clearBackground, drawShape1, drawShape2]
 * )
 *
 * myScene.draw(p5) // Calls the draw method with the p5 instance
 * myScene.reset()  // Resets the state to its initial value
 */
export function compile<
  E extends readonly [Fx<Obj>, ...Fx<Obj>[]],
  S extends ComposedState<E>,
>(stateFactory: StateFactory<S>, effects: E): Scene {
  let state: S = stateFactory()

  const next: NextFn<S> = (ctx) => {
    state = ctx.state
  }

  return {
    draw: (p5: P5) => {
      for (const fx of effects) {
        fx(
          {
            state: state,
            p5: p5,
          },
          next,
        )
      }
    },
    reset: () => {
      state = stateFactory()
    },
  }
}
