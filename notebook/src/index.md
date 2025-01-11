```js
import { sketch, P5 } from "./components/sketch.js"
```

<div class="hero">
  <h1>Tronicart</h1>
  <h2>
    A playground for creative coding expeiments
  </h2>
</div>

<div>

A quiet corner of the internet where I share my explorations and musings at the crossroads of coding and creativity.

Tronicart began as a personal project, a way to document my own learning and to connect with others who find joy in the confluence of technology and art.

## What is creative coding ?

For those new to the concept, creative coding is about writing software with the intent to create something expressive instead of something purely functional.

As an example, you could write a program that generates a piece of music, or a program that creates a visual artwork. The goal is to create something that is aesthetically pleasing or thought-provoking.

Here's a simple example of creative coding in action. The following code generates a random dots which move in a singular direction. Those that are within a certain distance of each other are connected by a line.

</div>

```js echo
sketch((p5) => {
  let dotCount = 100
  let dots = []

  p5.setup = () => {
    p5.createCanvas(600, 600)
    p5.stroke(150)
    p5.fill(0)

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        vx: p5.random(-1, 1),
        vy: p5.random(-1, 1),
      })
    }
  }

  p5.draw = () => {
    p5.clear()
    for (let i = 0; i < dotCount; i++) {
      const dot = dots[i]
      dot.x += dot.vx
      dot.y += dot.vy

      if (dot.x < 0 || dot.x > p5.width) {
        dot.vx *= -1
      }
      if (dot.y < 0 || dot.y > p5.height) {
        dot.vy *= -1
      }

      p5.ellipse(dot.x, dot.y, 5, 5)

      for (let j = 0; j < dotCount; j++) {
        if (i !== j) {
          const other = dots[j]
          const distance = p5.dist(dot.x, dot.y, other.x, other.y)
          if (distance < 70) {
            p5.line(dot.x, dot.y, other.x, other.y)
          }
        }
      }
    }
  }
})
```

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: var(--sans-serif);
  margin: 4rem 0 0rem;
  text-wrap: balance;
  text-align: left;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
