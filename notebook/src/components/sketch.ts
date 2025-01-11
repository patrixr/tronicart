import { P5 } from "./p5.js"
import { debounce } from "../lib/helpers.js"
import { onElementInView, onElementRemoved } from "../lib/dom.js"

export { P5 }

interface SketchOptions {
  canReplay?: boolean
  canSave?: boolean
  plugins?: ((p5: P5) => void)[]
}

type DrawerFunction = (p5: P5, state?: any) => void
type SetupFunction = (p5: P5) => any

export function sketch(
  sketch: (p5: P5) => void,
  opts: SketchOptions = {},
): HTMLElement {
  const div = createContainer()
  const canvasFrame = createCanvasFrame(div)

  let p5: P5 | null = null

  const stop = () => {
    p5?.remove()
    p5 = null
  }

  const start = () => {
    p5 = new P5(sketch, canvasFrame)
    opts.plugins?.forEach((plugin) => plugin(p5!))
  }

  onElementRemoved(div, stop)

  const replay = debounce(() => {
    if (!div.isConnected) return
    stop()
    start()
  })

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

export function draw(
  w: number,
  h: number,
  setupOrDrawer: SetupFunction | DrawerFunction,
  drawer?: DrawerFunction,
): HTMLElement {
  let setup: SetupFunction | null = null
  let finalDrawer: DrawerFunction

  if (!drawer) {
    finalDrawer = setupOrDrawer as DrawerFunction
  } else {
    setup = setupOrDrawer as SetupFunction
    finalDrawer = drawer
  }

  let state: any = null

  return sketch(
    (p5: P5) => {
      p5.preload = () => {}

      p5.setup = () => {
        p5.createCanvas(w, h)
        if (setup) {
          state = setup(p5)
        }
      }

      p5.draw = () => {
        finalDrawer(p5, state)
        p5.noLoop()
      }
    },
    {
      canReplay: false,
      canSave: true,
    },
  )
}

function createCanvasFrame(parent: HTMLElement): HTMLElement {
  const canvasFrame = document.createElement("div")
  canvasFrame.style.minWidth = "100px"
  canvasFrame.style.minHeight = "100px"
  canvasFrame.style.outline = "1px dashed lightgray"
  canvasFrame.style.padding = "10px"
  parent.appendChild(canvasFrame)
  return canvasFrame
}

function createContainer(): HTMLElement {
  const div = document.createElement("div")
  div.id = `p5Container${Date.now()}`
  div.style.position = "relative"
  div.style.display = "table"
  div.style.marginTop = "10px"
  div.style.marginBottom = "10px"
  return div
}

function createButton(text: string, action: () => void): HTMLButtonElement {
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
