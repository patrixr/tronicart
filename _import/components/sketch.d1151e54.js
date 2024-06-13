import P5 from "../../_npm/p5@1.9.4/_esm.js"
import { debounce } from "../lib/helpers.076832b6.js"
import { onElementInView, onElementRemoved } from "../lib/dom.2550fbc7.js"

// ----------------------------------------------
//  Observable helper for P5 sketches
// ----------------------------------------------

/**
 * Creates a new P5 sketch and attaches it to a dynamically created container element.
 *
 * @param {function} sketch - The sketch function that defines the behavior of the P5 sketch.
 * @param {Object} [opts={}] - An optional options object to configure the sketch.
 * @returns {HTMLElement} The container div element that holds the P5 canvas.
 */
export function sketch(sketch, opts = {}) {
  const div = createContainer()
  const canvasFrame = createCanvasFrame(div)

  let p5 = null

  const stop = () => {
    p5?.remove()
    p5 = null
  }

  const start = () => {
    p5 = new P5(sketch, canvasFrame)
    opts.plugins?.forEach((plugin) => plugin(p5))
  }

  onElementRemoved(div, stop)

  const replay = debounce(() => {
    if (!div.isConnected) return
    stop()
    start()
  })

  // Auto start the sketch if it's in view
  onElementInView(div, replay)

  if (opts.canReplay ?? true) {
    div.appendChild(createButton("Replay", replay))
  }

  if (opts.canSave ?? true) {
    div.appendChild(
      createButton("Save", () => p5?.save("p5_capture_" + Date.now() + ".png")),
    )
  }

  return div
}

/**
 * Creates a static P5 sketch that runs the `drawer` function once to draw on the canvas.
 *
 * @param {number} w - The width of the canvas.
 * @param {number} h - The height of the canvas.
 * @param {function} drawer - A function that takes a P5 instance and draws on the canvas.
 * @returns {HTMLElement} The container div element that holds the P5 canvas.
 */
export function draw(w, h, setup, drawer) {
  if (!drawer) {
    drawer = setup
    setup = null
  }

  let state = null

  return sketch(
    (p5) => {
      p5.preload = () => {}

      p5.setup = () => {
        p5.createCanvas(w, h)
        if (setup) {
          state = setup(p5)
        }
      }

      p5.draw = () => {
        drawer(p5, state)
        p5.noLoop()
      }
    },
    {
      canReplay: false,
      canSave: true,
    },
  )
}

// ----------------------------------------------
//  Custom elements
// ----------------------------------------------

function createCanvasFrame(parent) {
  const canvasFrame = document.createElement("div")
  canvasFrame.style.minWidth = "200px"
  canvasFrame.style.minHeight = "100px"
  canvasFrame.style.outline = "1px dashed lightgray"
  canvasFrame.style.padding = "10px"
  parent.appendChild(canvasFrame)
  return canvasFrame
}

function createContainer() {
  const div = document.createElement("div")
  div.id = `p5Container${Date.now()}`
  div.style.position = "relative"
  div.style.display = "table"
  div.style.marginTop = "10px"
  div.style.marginBottom = "10px"
  return div
}

function createButton(text, action) {
  const btn = document.createElement("button")
  btn.innerText = text
  btn.style.marginTop = "10px"
  btn.style.marginRight = "10px"
  btn.style.padding = "5px"
  btn.style.border = "none"
  btn.style.backgroundColor = "lightblue"
  btn.style.color = "black"
  btn.style.cursor = "pointer"
  btn.onclick = action
  return btn
}
