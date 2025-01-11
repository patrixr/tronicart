import type P5 from "p5"
import ColorScheme from "color-scheme"

interface PaletteConfig {
  p5?: P5
  hue?: number
  variation?: string
  scheme?: string
  distance?: number
}

export class Palette {
  readonly ALL_SCHEMES: string[]
  readonly ALL_VARIATIONS: string[]
  private config: PaletteConfig
  private p5: P5
  private index: number
  private colors: string[]

  constructor(config: PaletteConfig = {}) {
    this.ALL_SCHEMES = ["mono", "contrast", "triade", "tetrade", "analogic"]
    this.ALL_VARIATIONS = ["default", "pastel", "soft", "light", "hard", "pale"]
    this.config = config
    this.p5 = config.p5 || (window as any) // Note: might need proper p5 instance handling
    this.index = 0
    this.colors = []

    this.configure()
  }

  configure(): void {
    const {
      hue = this.p5.floor(this.p5.random(0, 360)),
      variation = this.p5.random(this.ALL_VARIATIONS),
      scheme = this.p5.random(this.ALL_SCHEMES),
      distance = this.p5.random(0, 1),
    } = this.config

    this.colors = new ColorScheme()
      .from_hue(hue)
      .distance(distance)
      .scheme(scheme)
      .variation(variation)
      .colors()
      .map((c) => `#${c}`)

    this.colors = this.p5.shuffle(this.colors)
  }

  reload(): void {
    this.configure()
  }

  nextColor(): P5.Color {
    return this.p5.color(this.colors[this.index++ % this.colors.length])
  }

  intToColor(i: number): P5.Color {
    return this.p5.color(this.colors[Math.floor(i) % this.colors.length])
  }

  peekNextColor(): P5.Color {
    return this.p5.color(this.colors[(this.index + 1) % this.colors.length])
  }

  allColors(): P5.Color[] {
    return this.colors.map((c) => this.p5.color(c))
  }

  colorCount(): number {
    return this.colors.length
  }

  /**
   * Sequentially interpolates between colors in the palette over a given timeframe.
   *
   * This function calculates the current and next color based on the frame count and interpolates between them.
   * The interpolation amount is based on the current frame within the timeframe, creating a smooth transition.
   */
  lerped(timeFrame: number = 60, tick: number = this.p5.frameCount): P5.Color {
    let currentIndex = this.p5.floor(tick / timeFrame) % this.colors.length
    let nextIndex = (currentIndex + 1) % this.colors.length
    let amt = (tick % timeFrame) / timeFrame
    let currentColor = this.p5.color(this.colors[currentIndex])
    let nextColor = this.p5.color(this.colors[nextIndex])
    return this.p5.lerpColor(currentColor, nextColor, amt)
  }
}

export default Palette
