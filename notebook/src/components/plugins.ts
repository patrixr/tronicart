import type P5 from "p5"

// ----------------------------------------------
//  Plugins
// ----------------------------------------------

export const FPSPlugin = createPlugin({
  afterDraw(p5: P5, opts: { textSize?: number } = {}) {
    const { textSize = 12 } = opts
    p5.push()
    p5.strokeWeight(2)
    p5.fill(125)
    p5.stroke(125)
    p5.textSize(textSize)
    p5.text(`FPS: ${p5.frameRate().toFixed(2)}`, textSize, textSize * 2)
    p5.pop()
  },
})

// ----------------------------------------------
//  Plugin structure
// ----------------------------------------------

export type Plugin<Opts = {}> = {
  beforePreload?: (p5: P5, opts: Partial<Opts>) => void
  afterPreload?: (p5: P5, opts: Partial<Opts>) => void
  beforeSetup?: (p5: P5, opts: Partial<Opts>) => void
  afterSetup?: (p5: P5, opts: Partial<Opts>) => void
  beforeDraw?: (p5: P5, opts: Partial<Opts>) => void
  afterDraw?: (p5: P5, opts: Partial<Opts>) => void
}

export function createPlugin<T extends {}>(plugin: Plugin<T>) {
  return (opts: Partial<T> = {}) =>
    (p5: P5) => {
      const _preload = p5.preload
      p5.preload = () => {
        plugin.beforePreload?.(p5, opts)
        _preload()
        plugin.afterPreload?.(p5, opts)
      }

      const _setup = p5.setup
      p5.setup = () => {
        plugin.beforeSetup?.(p5, opts)
        _setup()
        plugin.afterSetup?.(p5, opts)
      }

      const _draw = p5.draw
      p5.draw = () => {
        plugin.beforeDraw?.(p5, opts)
        p5.push()
        _draw()
        p5.pop()
        plugin.afterDraw?.(p5, opts)
      }
    }
}
