/**
 * Renders the given configuration and displays the result in the canvas with the id "defaultCanvas0".
 * @param config The configuration to render.
 * @param canvasId The id of the canvas to display the result in.
 * @param lowRes If true, the render will be done with low resolution.
 */
export function render(config, canvasId = "defaultCanvas0", lowRes = false) {
  const cfg = JSON.parse(JSON.stringify(config));

  if (lowRes) {
    cfg.antialiasing.samples = 1;
    cfg.antialiasing.size = 500;
  }

  window.RT.renderFromJson(JSON.stringify(cfg), (res) => {
    const { Bytes, Width, Height, Status } = res;
    const canvas = document.getElementById(canvasId);

    if (Status !== "done") {
      console.error(res);
      return;
    }

    const imageData = new ImageData(
      new Uint8ClampedArray(Bytes),
      Width,
      Height,
    );
    canvas.width = Width;
    canvas.height = Height;
    canvas.getContext("2d").putImageData(imageData, 0, 0);
  });
}

/**
 * Creates a script element that loads the wasm_exec.js file.
 * @returns {HTMLScriptElement}
 */
export function wasmScript() {
  const script = document.createElement("script");
  script.src = "_file/data/wasm_exec.js";
  return script;
}

/**
 * Creates a script element that kickstarts the raytracer.wasm file.
 * @returns {HTMLScriptElement}
 */
export function raytracerScript() {
  const script = document.createElement("script");
  script.textContent = `
    setTimeout(() => {
      console.log("Loading raytracer.wasm")
      const go = new Go();
      WebAssembly.instantiateStreaming(fetch("_file/data/raytracer.wasm"), go.importObject).then((result) => {
          go.run(result.instance);
      });
    }, 1000)
  `;
  return script;
}
