import P5 from "npm:p5"

// ----------------------------------------------
//  Helpers
// ----------------------------------------------

function __loadingText() {
  const loadingDiv = document.createElement("div")
  loadingDiv.style.position = "absolute"
  loadingDiv.style.top = "50%"
  loadingDiv.style.left = "50%"
  loadingDiv.style.transform = "translate(-50%, -50%)"
  loadingDiv.innerText = "Loading..."
  loadingDiv.zIndex = -100
  return loadingDiv
}

function __removeCanvasChildren(element) {
  const canvasElements = element.querySelectorAll("canvas")
  canvasElements.forEach((canvas) => {
    canvas.parentNode.removeChild(canvas)
  })
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
  const div = document.createElement("div")
  const canvasFrame = document.createElement("div")
  const loadingDiv = __loadingText()
  div.id = `p5Container${Date.now()}`
  div.style.position = "relative"
  div.style.display = "table"
  div.style.marginTop = "10px"
  div.style.marginBottom = "10px"
  canvasFrame.style.minWidth = "525px"
  canvasFrame.style.minHeight = "295px"
  canvasFrame.style.outline = "1px dashed lightgray"
  canvasFrame.style.padding = "10px"
  div.appendChild(canvasFrame)

  let p5Instance = null

  const replay = () => {
    div.appendChild(loadingDiv)
    __removeCanvasChildren(canvasFrame)
    setTimeout(() => {
      p5Instance = new P5(sketch, canvasFrame)
      div.removeChild(loadingDiv)
    }, 100)
  }

  if (opts.autostart ?? true) {
    div.appendChild(loadingDiv)
    setTimeout(replay, 100)
  }

  if (opts.canReplay ?? true) {
    div.appendChild(__createButton("Replay", replay))
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
export function staticSketch(w, h, drawer) {
  return sketch(
    (p5) => {
      p5.setup = () => {
        p5.createCanvas(w, h)
      }

      p5.draw = () => {
        drawer(p5)
        p5.noLoop()
      }
    },
    {
      canReplay: false,
    },
  )
}
