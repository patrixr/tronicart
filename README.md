# Tronicart - Creative Workspace

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)


This monorepo is designed for creative coding, mainly with P5.js, but not limited to it. It uses pnpm as a package manager and Turbo Repo as a monorepo tool. Sketches are located in the `/sketches` folder, while reusable packages are located in the `/packages` folder.

Here are a few sketch outputs I've generated thanks to these tools:

![](./assets/creative-coding-collage.png)

## Getting Started

To get started with this monorepo, you'll need to install pnpm globally:

```bash
npm install -g pnpm
```

Then, install the dependencies:

```bash
pnpm install
```

## Creating a New Sketch

To create a new TypeScript sketch, use the following command:

```bash
pnpm generate:p5-ts
```

This will create a new sketch in the `/sketches` folder, with the following structure:

```bash
/sketches
  /my-new-sketch
    main.ts
    package.json
    /public
      index.html
      style.css
```

You can then start the development server for your sketch using the following command:

```bash
turbo run serve --filter=<sketchName>
```

This will start a development server at `http://localhost:3033` that automatically rebuilds your sketch as you make changes.

## Running the Playground Sketch

A playground sketch exists for fiddling around. To run the playground sketch, use the following command:

```bash
pnpm run playground
```

This will start a development server at `http://localhost:3033` that allows you to experiment with different sketches and packages.

## Packages

This monorepo contains several reusable packages for creative coding, located in the `/packages` folder. Some of the most important packages are:

-   [@tronicart/p5-fest](./packages/p5-fest/): A collection of utilities and helpers for P5.js.
-   [@tronicart/p5-flow-field](./packages/p5-flow-field/): A function for creating and manipulating 2D flow fields.
-   [@tronicart/data-structures](./packages/data-structures/): A collection data structures for creative coding.
-   [@tronicart/batch-capture](./packages/batch-capture/): Captures screenshots of your sketch in batches.
-   [@tronicart/shapes](./packages/shapes/): A collection of 2D shapes for creative coding.
-   [@tronicart/poisson-disk-sampling](./packages/poisson-disk-sampling/): function for generating 2D points that are uniformly spaced apart.

## Contributing

If you'd like to contribute to this monorepo, please open an issue or submit a pull request on GitHub. Contributions are always welcome!
