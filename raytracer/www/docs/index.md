---
toc: false
---

```typescript
const render = (lowRes = false) => {
  const cfg = JSON.parse(JSON.stringify(config));

  if (lowRes) {
    cfg.antialiasing.samples = 1;
    cfg.antialiasing.size = 500;
  }

  RT.renderFromJson(JSON.stringify(cfg), (res) => {
    const { Bytes, Width, Height, Status } = res;
    const canvas = document.getElementById("rt-out");

    if (Status !== "done") {
      console.error(res);
      return;
    }

    const imageData = new ImageData(
      new Uint8ClampedArray(Bytes),
      Width,
      Height
);
    canvas.width = Width;
    canvas.height = Height;
    canvas.getContext("2d").putImageData(imageData, 0, 0);
  });
};
```

# Preview

<div>
    <canvas id="rt-out" width="1200" height="675" style="width: 960px; max-height: 540px; outline: 1px dashed white; margin: 10px;""></canvas>
</div>

# Configuration

```js
const renderButton = view(
  Inputs.button(
    [
      ["Low-res preview", () => render(true)],
      ["Full size", render],
    ],
    { value: 0, label: "Render" }
  )
);
```

### Config

```js
const samples = view(Inputs.range([1, 500], { step: 1, label: "Samples" }));
const size = view(Inputs.range([300, 1200], { step: 1, label: "Width" }));
```

```js
const config = await FileAttachment("data/rtconfig.json").json();
config.antialiasing.samples = samples;
config.size = size;
```

```js
display(config);
```

<script src="_file/data/wasm_exec.js"></script>
<script>
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch("_file/data/raytracer.wasm"), go.importObject).then((result) => {
        go.run(result.instance);
    })
</script>
