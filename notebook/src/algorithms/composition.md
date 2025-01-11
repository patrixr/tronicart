---
toc: true
draft: false
title: "Composable Sketches"
---

# Composable Sketches

I have long attempted to build up a **reusable and composable** system for creating animations in p5.js.
Most of them worked great up until a certain point where the complexity of the animations grew beyond the capabilities of the system.

And it would appear I have not learned my lesson, so I am doing it again.

## The idea

My previous attempts have been mainly inspired by video game engines and their entity-component systems.
This time, I wanna to take a more creative/flexible approach to the problem.

Here's what I have in mind:

```typescript
const animation = compose(/* state */, /* effects */)

animation() // draws the animation
```

If I'm being honest, I also think this functional approach looks cool. Has a visual simplicity that I love.
Once again probably the wrong reason to do something, but nobody here to stop me.

[-> Jump to implementation](#implementation)

## In action

Let's try out that concept with a few examples

### Build out some effects

To begin, let's define a few simple effects that we can compose together.

```js echo
// Draws a rectangle
const shape = (size = 50) => {
  return (ctx, next) => {
    ctx.p5.rect(0, 0, size, size)
    next(ctx)
  }
}

// Centers the scene
const center = () => (ctx, next) => {
  ctx.p5.translate(ctx.p5.width / 2, ctx.p5.height / 2)
  next(ctx)
}

// Rotates the scene
const rotate = () => {
  let angle = 0

  return (ctx, next) => {
    ctx.p5.rotate((angle += 0.02))
    next(ctx)
  }
}
```

### Composing effects

Drawing only the shape:

```javascript
compose({ size: 50 }, [shape()])
```

```js
renderAnimation(compose({ size: 50 }, [shape()]))
```

In this instance we notice the square is a bit cropped, so we can add the `center` effect to fix that:

```javascript
compose({}, [center(), shape()])
```

```js
renderAnimation(compose({}, [center(), shape()]))
```

Finally, let's add some rotation to the mix:

```javascript
compose({}, [center(), rotate(), shape()])
```

```js
renderAnimation(compose({}, [center(), rotate(), shape()]))
```

## Implementation

Building out a composition system isn't exactly rocket science, but there are some quirks to it that I am discovering as we speak.
I'll try to boil it down to the essentials:

### Performance

Functional-style patterns aren't known for their performance, but I am not too worried about that.
However I did want to avoid the **overhead of creating a new function** for each step in the pipeline.

### Code

As of writing, I went or a simple enough approach which looks like this:

```typescript
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
```

```ts
import { sketch } from "../components/sketch.js"
import { compose, compile } from "../lib/composer.js"
```

```js
const renderAnimation = (composition) =>
  sketch((p5) => {
    const animation = compile(() => {}, [composition])
    p5.setup = () => {
      p5.rectMode(p5.CENTER)
      p5.createCanvas(100, 100)
      p5.noStroke()
      p5.fill("#ff9900")
    }

    p5.draw = () => {
      p5.background(0)
      animation.draw(p5)
    }
  })
```
