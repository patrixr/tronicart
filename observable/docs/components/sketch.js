import P5 from "npm:p5"
import { debounce } from "../lib/helpers.js"
import {
  onElementRemoved,
  removeChildrenBySelector,
  onElementInView,
} from "../lib/dom.js"

// ----------------------------------------------
//  Public API
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
  const loadingDiv = createCenteredText("Loading...")
  let first = true
  let p5Instance = null

  const killSketch = () => {
    if (p5Instance) {
      p5Instance?.remove()
      removeChildrenBySelector(canvasFrame, "canvas")
      p5Instance = null
    }
  }

  onElementRemoved(div, () => {
    killSketch()
  })

  const replay = debounce(() => {
    if (!div.isConnected) return

    console.log(first ? "Playing sketch" : "Replaying sketch...")
    killSketch()
    p5Instance = new P5(sketch, canvasFrame)
    if (loadingDiv.isConnected) loadingDiv.parentNode.removeChild(loadingDiv)
    opts.plugins?.forEach((plugin) => plugin(p5Instance))
    first = false
  })

  if (opts.autostart ?? true) {
    div.appendChild(loadingDiv)
    onElementInView(div, replay)
  }

  if (opts.canReplay ?? true) {
    div.appendChild(__createButton("Replay", replay))
  }

  if (opts.canSave ?? true) {
    div.appendChild(
      __createButton("Save", () =>
        p5Instance?.save("p5_capture_" + Date.now() + ".png"),
      ),
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
        if (p5.frameCount === 10) {
          drawer(p5, state)
          p5.noLoop()
        }
      }
    },
    {
      canReplay: false,
    },
  )
}

// ----------------------------------------------
//  Plugins
// ----------------------------------------------

export const FPSPlugin =
  (textSize = 12) =>
  (p5) => {
    const draw = p5.draw

    p5.draw = () => {
      draw()
      p5.push()
      p5.strokeWeight(2)
      p5.fill(125)
      p5.stroke(125)
      p5.textSize(textSize)
      p5.text(`FPS: ${p5.frameRate().toFixed(2)}`, textSize, textSize * 2)
      p5.pop()
    }
  }

// ----------------------------------------------
//  Helpers
// ----------------------------------------------

function createCenteredText(text) {
  const loadingDiv = document.createElement("div")
  loadingDiv.style.position = "absolute"
  loadingDiv.style.top = "50%"
  loadingDiv.style.left = "50%"
  loadingDiv.style.transform = "translate(-50%, -50%)"
  loadingDiv.innerText = text
  loadingDiv.zIndex = -100
  return loadingDiv
}

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

function __createButton(text, action) {
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
