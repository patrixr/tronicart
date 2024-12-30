import P5 from "../../_node/p5@1.11.2/index.1b9ecc21.js";
import { debounce } from "../lib/helpers.23012005.js";
import { onElementInView, onElementRemoved } from "../lib/dom.46cf68a8.js";
export { P5 };
export function sketch(sketch2, opts = {}) {
  const div = createContainer();
  const canvasFrame = createCanvasFrame(div);
  let p5 = null;
  const stop = () => {
    p5?.remove();
    p5 = null;
  };
  const start = () => {
    p5 = new P5(sketch2, canvasFrame);
    opts.plugins?.forEach((plugin) => plugin(p5));
  };
  onElementRemoved(div, stop);
  const replay = debounce(() => {
    if (!div.isConnected)
      return;
    stop();
    start();
  });
  onElementInView(div, replay);
  if (opts.canReplay ?? true) {
    div.appendChild(createButton("Replay", replay));
  }
  if (opts.canSave ?? true) {
    div.appendChild(
      createButton("Save", () => p5?.save("p5_capture_" + Date.now() + ".png"))
    );
  }
  return div;
}
export function draw(w, h, setupOrDrawer, drawer) {
  let setup = null;
  let finalDrawer;
  if (!drawer) {
    finalDrawer = setupOrDrawer;
  } else {
    setup = setupOrDrawer;
    finalDrawer = drawer;
  }
  let state = null;
  return sketch(
    (p5) => {
      p5.preload = () => {
      };
      p5.setup = () => {
        p5.createCanvas(w, h);
        if (setup) {
          state = setup(p5);
        }
      };
      p5.draw = () => {
        finalDrawer(p5, state);
        p5.noLoop();
      };
    },
    {
      canReplay: false,
      canSave: true
    }
  );
}
function createCanvasFrame(parent) {
  const canvasFrame = document.createElement("div");
  canvasFrame.style.minWidth = "200px";
  canvasFrame.style.minHeight = "100px";
  canvasFrame.style.outline = "1px dashed lightgray";
  canvasFrame.style.padding = "10px";
  parent.appendChild(canvasFrame);
  return canvasFrame;
}
function createContainer() {
  const div = document.createElement("div");
  div.id = `p5Container${Date.now()}`;
  div.style.position = "relative";
  div.style.display = "table";
  div.style.marginTop = "10px";
  div.style.marginBottom = "10px";
  return div;
}
function createButton(text, action) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.style.marginTop = "10px";
  btn.style.marginRight = "10px";
  btn.style.padding = "5px";
  btn.style.border = "none";
  btn.style.backgroundColor = "lightblue";
  btn.style.color = "black";
  btn.style.cursor = "pointer";
  btn.onclick = action;
  return btn;
}
