import type P5 from "p5"
import fx from "../../lib/fx/index.js"
import { compose, compile, isolate, type Context } from "../../lib/composer.js"
import type { AudioExt } from "../../lib/fx/audio.js"

export default (p5: P5) => {
  // const mask = isolate([fx.mask(), fx.center(), fx.circle({ radius: 100 })])

  const animation = compose({}, [
    // fx.waitForClick(),
    // fx.watercolor(50),
    // fx.audio(),
    // fx.do(({ p5, state }: Context<AudioExt>) => {
    //   p5.noFill()
    //   p5.stroke(255)
    //   p5.strokeWeight(2)
    // }),
    // fx.fill(),
    // fx.watercolor(50),
    isolate([fx.center(), fx.circle({ radius: 100 })]),
    fx.watercolor("background", 50),
    // fx.freedraw(({ p5, state }: Context<AudioExt>) => {
    //   p5.noFill()
    //   p5.stroke(255)
    //   p5.strokeWeight(2)

    //   const resolution = state.spectrum.length
    //   const step: number = p5.TWO_PI / resolution
    //   const points: P5.Vector[] = []
    //   const radius = 50

    //   p5.beginShape()
    //   for (let i = 0; i < resolution; ++i) {
    //     const angle: number = i * step
    //     const r =
    //       radius + radius * 0.2 * p5.map(state.spectrum[i], 0, 255, 0, 1)
    //     p5.curveVertex(r * Math.cos(angle), r * Math.sin(angle))
    //   }
    //   p5.endShape(p5.CLOSE)

    //   return points
    // }),
  ])

  const scene = compile(() => ({}), [animation])

  p5.setup = () => {
    p5.createCanvas(400, 400, p5.WEBGL)
    console.log(p5)
  }

  p5.draw = () => {
    scene.draw(p5)
  }
}
