import ColorScheme from "../../_node/color-scheme@1.0.1/index.18fc79b9.js";
export class Palette {
  constructor(config = {}) {
    this.ALL_SCHEMES = ["mono", "contrast", "triade", "tetrade", "analogic"];
    this.ALL_VARIATIONS = ["default", "pastel", "soft", "light", "hard", "pale"];
    this.config = config;
    this.p5 = config.p5 || window;
    this.index = 0;
    this.colors = [];
    this.configure();
  }
  configure() {
    const {
      hue = this.p5.floor(this.p5.random(0, 360)),
      variation = this.p5.random(this.ALL_VARIATIONS),
      scheme = this.p5.random(this.ALL_SCHEMES),
      distance = this.p5.random(0, 1)
    } = this.config;
    this.colors = new ColorScheme().from_hue(hue).distance(distance).scheme(scheme).variation(variation).colors().map((c) => `#${c}`);
    this.colors = this.p5.shuffle(this.colors);
  }
  reload() {
    this.configure();
  }
  nextColor() {
    return this.p5.color(this.colors[this.index++ % this.colors.length]);
  }
  intToColor(i) {
    return this.p5.color(this.colors[Math.floor(i) % this.colors.length]);
  }
  peekNextColor() {
    return this.p5.color(this.colors[(this.index + 1) % this.colors.length]);
  }
  allColors() {
    return this.colors.map((c) => this.p5.color(c));
  }
  colorCount() {
    return this.colors.length;
  }
  /**
   * Sequentially interpolates between colors in the palette over a given timeframe.
   *
   * This function calculates the current and next color based on the frame count and interpolates between them.
   * The interpolation amount is based on the current frame within the timeframe, creating a smooth transition.
   *
   * @param {number} [timeFrame=60] - The number of frames over which to interpolate between each color.
   * @returns {p5.Color} The interpolated color.
   */
  lerped(timeFrame = 60, tick = this.p5.frameCount) {
    let currentIndex = this.p5.floor(tick / timeFrame) % this.colors.length;
    let nextIndex = (currentIndex + 1) % this.colors.length;
    let amt = tick % timeFrame / timeFrame;
    let currentColor = this.p5.color(this.colors[currentIndex]);
    let nextColor = this.p5.color(this.colors[nextIndex]);
    return this.p5.lerpColor(currentColor, nextColor, amt);
  }
}
export default Palette;
