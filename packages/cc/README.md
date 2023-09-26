# @tronicart/cc

`@tronicart/cc` is a TypeScript package that exports a series of useful functions meant to be used within a P5 script.

## Installation

To install the package, use the following command:

```bash
npm install @tronicart/cc
```

## Usage

To use the package in a TypeScript P5 script, import the relevant submodules as follows:

```typescript
import { lerpingColor } from '@tronicart/cc/colors';
```

## Modules

### Colors

The `@tronicart/cc` package provides a `colors` module that exports several functions and types related to colors.

To import the `colors` module, use the following syntax:

```typescript
import * as colors from '@tronicart/cc/colors';
```

#### Available Functions

#### `colorsEqual(c1: P5.Color, c2: P5.Color): boolean`

Returns `true` if the two provided `P5.Color` objects are equal, otherwise `false`.

#### `lerpingColor(config: LerpingColorConfig): LerpingColor`

Creates a new `LerpingColor` object based on the provided `config` object. The `config` object has the following properties:

-   `colors`: An array of `P5.Color` objects to transition between.
-   `rotate` (optional, default `true`): Whether to loop back to the first color after the last color is reached.

The `LerpingColor` object has the following methods:

-   `update(delta?: number): void`: Updates the current color based on the elapsed time since the last update. `delta` is the time elapsed in seconds since the last update (default `0.005`).
-   `color(): P5.Color`: Returns the current color.

#### `copyColor(c: P5.Color): P5.Color`

Returns a copy of the provided `P5.Color` object.

### Palette Module

The `Palette` module is used to generate color schemes for use in P5 sketches. It exports a number of functions that can be used to obtain colors from the generated palette.

```typescript
import { Palette } from '@tronicart/cc/palette';
```

Once the module is imported, you can use any of its exported functions and types.

#### Configuration

The `configure()` function is used to generate a new color palette. It takes an optional `PaletteConfiguration` object as an argument that can contain the following properties:

-   `p5` (optional): A reference to the P5 instance to use for generating colors. If not provided, the global P5 instance will be used.
-   `hue` (optional, default: random): The hue of the color scheme, ranging from 0 to 360.
-   `distance` (optional, default: random): The distance between colors in the color scheme, ranging from 0 to 1.
-   `scheme` (optional, default: random): The color scheme to use, chosen from the `ALL_SCHEMES` array.
-   `variation` (optional, default: random): The variation of the color scheme to use, chosen from the `ALL_VARIATIONS` array.

#### Obtaining Colors

Once the `Palette` module has been configured using `configure()`, you can obtain colors from the generated palette using the following functions:

-   `nextColor()`: Returns the next color in the palette.
-   `peekNextColor()`: Returns the color after the next color in the palette.
-   `allColors()`: Returns an array of all colors in the palette.
-   `colorCount()`: Returns the number of colors in the palette.

#### Reloading

The `reload()` function can be used to reload the last configuration applied by `configure()`

### Pixels Module

To use the `Pixels` module, first import it into your project:

```typescript
import { editPixels } from '@tronicart/cc/pixels';
```

The `Pixels` module provides a `createPixelEditor()` function which returns an object with several methods for modifying the pixels of a P5 instance:

-   `each(cb: PixelCallback)`: Calls the provided callback function for each pixel in the P5 instance.
-   `map(mapper: PixelMapper)`: Maps each pixel in the P5 instance to a new color using the provided mapper function.
-   `getPixel(x: number, y: number): ColorTuple`: Returns the color of the pixel at the specified coordinates as an RGBA tuple.
-   `setPixel(x: number, y: number, c: P5.Color | ColorTuple)`: Sets the color of the pixel at the specified coordinates to the provided color.
-   `index(x: number, y: number): number`: Returns the index of the pixel at the specified coordinates in the P5 instance's pixel array.
-   `begin()`: Begins editing the pixels of the P5 instance.
-   `end()`: Ends editing the pixels of the P5 instance.
-   `open(cb: () => any)`: Opens the pixel editor, calls the provided callback function, and then closes the pixel editor.

Here is an example of its usage it in **global mode**:

```typescript
import { editPixels } from '@tronicart/cc/pixels';

function setup() {
  createCanvas(400, 400);
  background(0);

  const editor = createPixelEditor();

  editor.open();  // begin changes
  editor.each((x, y, [r, g, b, a]) => {
    editor.setPixel(x, y, [255 - r, 255 - g, 255 - b, a]);
  });
  editor.close(); // apply changes
}
```

Here is an example of its usage in **instance mode**:

```typescript
const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(0);

    const editor = createPixelEditor(p5);
    editor.open();  // begin changes
    editor.each((x, y, [r, g, b, a]) => {
      editor.setPixel(x, y, [255 - r, 255 - g, 255 - b, a]);
    });
    editor.close(); // apply changes
  }
}

new P5(sketch);
```

The `editPixels()` function provides a convenient way to edit the pixels of a P5 instance within a callback function. It takes a P5 instance and a callback function as arguments. The callback function is called with a `PixelEditor` object, which can be used to modify the pixels of the P5 instance.

Here is an example of how to use the `editPixels` function to invert the colors of a P5 instance:

```typescript
const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(0);

    editPixels(p5, (editor) => {
      editor.each((x, y, [r, g, b, a]) => {
        editor.setPixel(x, y, [255 - r, 255 - g, 255 - b, a]);
      });
    });
  }
}

new P5(sketch);
```

This will invert the colors of the P5 instance's pixels by subtracting each R, G, and B component from 255.
