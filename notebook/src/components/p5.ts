import P5 from "p5"

// bit of a hack to make p5.sound work
;(window as any).p5 = P5
import("p5/lib/addons/p5.sound.js")

export { P5 }
