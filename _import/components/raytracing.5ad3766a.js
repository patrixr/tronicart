export function render(config, canvasId = "defaultCanvas0", lowRes = false) {
  const cfg = JSON.parse(JSON.stringify(config));
  if (lowRes) {
    cfg.antialiasing.samples = 1;
    cfg.antialiasing.size = 500;
  }
  ;
  window.RT.renderFromJson(JSON.stringify(cfg), (res) => {
    const { Bytes, Width, Height, Status } = res;
    const canvas = document.getElementById(canvasId);
    if (Status !== "done") {
      console.error(res);
      return;
    }
    const imageData = new ImageData(new Uint8ClampedArray(Bytes), Width, Height);
    canvas.width = Width;
    canvas.height = Height;
    canvas?.getContext("2d")?.putImageData(imageData, 0, 0);
  });
}
export function wasmScript() {
  const script = document.createElement("script");
  script.src = "/_file/data/static/wasm_exec.js";
  return script;
}
export function raytracerScript() {
  const script = document.createElement("script");
  script.textContent = `
    setTimeout(() => {
      console.log("Loading raytracer.wasm")
      const go = new Go();
      WebAssembly.instantiateStreaming(fetch("/_file/data/static/raytracer.wasm"), go.importObject).then((result) => {
          go.run(result.instance);
      });
    }, 1000)
  `;
  return script;
}