---
toc: false
title: "Compostable Sketches - Part 1"
---

# Composition System (1)

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

```typescript
console.log("hello")
```

```ts
import { sketch } from "./components/sketch.js"
import { compose } from "./lib/composer.js"
```

```ts
const moving = () => {
  let offset = 0

  return (ctx, next) => {
    ctx.p5.push()
    ctx.p5.translate(offset++, 0)
    next(ctx)
    ctx.p5.pop()
  }
}
const test = compose({ x: 50, y: 50 }, moving(), (ctx) => {
  ctx.p5.circle(ctx.state.x, ctx.state.y, 50)
})

const clear =
  (color = 0) =>
  (ctx, next) => {
    ctx.p5.background(color)
    next(ctx)
  }

const translate = (x, y) => (ctx, next) => {
  ctx.p5.translate(x, y)
  next(ctx)
}

const rotate = (ctx, next) => {
  ctx.p5.rotate(ctx.state.angle)
  ctx.state.angle += 0.02
  next(ctx)
}

const shape =
  (size = 50) =>
  (ctx, next) => {
    ctx.p5.rect(-size / 2, -size / 2, size, size)
    next(ctx)
  }
```

```js
sketch((p5) => {
  const animation = compose({ angle: 0 }, [
    clear("#222"),
    translate(100, 100),
    rotate,
    shape(40),
  ])

  p5.setup = () => {
    p5.createCanvas(200, 200)
    p5.noStroke()
    p5.fill("#ff9900")
  }

  p5.draw = () => animation(p5)
})
```
