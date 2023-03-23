# Poissondisk Sampling Library Documentation

## Introduction

This library provides a function for generating 2D points that are uniformly spaced apart using Poissondisk sampling technique. It includes a configuration object with options for customizing the sampling area and the minimum distance between points.

## Installation

To use this library, you can install it via npm:

```bash
npm install @tronicart/poisson-disk-sampling
```

## API Documentation

### Configuration Object

The configuration object for the `poissonDiskSampling` function.

```typescript
type PoissondiskSamplingConfig = {
  surfaceWidth: number;
  surfaceHeight: number;
  radius: number;
  createVector?: VectorFactory;
  maxRetry?: number;
  random?: RandomFunction;
};
```

#### Properties

-   `surfaceWidth`: The width of the sampling area.
-   `surfaceHeight`: The height of the sampling area.
-   `radius`: The minimum distance between each point.
-   `createVector`: A function that creates a new vector object. This is optional in case you use your own custom vectors
-   `maxRetry`: The maximum number of attempts to generate a new point before giving up. This is optional and defaults to 30.
-   `random`: A function that returns a random number between 0 and 1. This is optional and defaults to the built-in `Math.random` function.

### PoissonDiskSampling

The main function for generating points:

```typescript
export function poissonDiskSampling(config: PoissondiskSamplingConfig): any;
```

#### Parameters

-   `config`: A configuration object that defines the sampling area and the minimum distance between points.

#### Return Value

This function returns an array of 2D points that are uniformly spaced apart.

### PoissonDiskSamplingP5

This function is a convenience wrapper for `poissondiskSampling` function with p5.js library.

```typescript
export function poissondiskSamplingP5(p5: P5, radius: number, maxRetry?: number): any;
```

#### Parameters

-   `p5`: The p5.js instance. When using P5 in global mode, you may pass `window` instead
-   `radius`: The radius of the disks.
-   `maxRetry`: The maximum number of attempts to generate a new point before giving up. This is optional and defaults to 30.

The surface area will be inferred from the P5 configuration

#### Return Value

This function returns an array of `p5.Vector` objects that are uniformly spaced apart.

## License

This library is licensed under the MIT License.
