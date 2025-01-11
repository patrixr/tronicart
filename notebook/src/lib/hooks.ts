import { P5 } from "../components/p5.js"

type Proto = typeof P5.prototype

type P5Hook = keyof Proto &
  (
    | "setup"
    | "draw"
    | "mouseClicked"
    | "mousePressed"
    | "mouseReleased"
    | "mouseMoved"
    | "mouseDragged"
    | "keyPressed"
    | "keyReleased"
    | "keyTyped"
    | "windowResized"
    | "preload"
    | "deviceMoved"
    | "deviceTurned"
    | "deviceShaken"
  )

export function hook<H extends P5Hook>(p5: P5, method: H, fn: Proto[H]) {
  const original = p5[method]

  p5[method] = (...args: any[]) => {
    fn(...args)
    original?.(...args)
  }
}
