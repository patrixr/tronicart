# @tronicart/p5-flow-field

`@tronicart/p5-flow-field` is a TypeScript library for creating and manipulating 2D flow fields, with the ability to spawn particles that follow the flow. It is designed to be used with the P5 library

## Installation

You can install `@tronicart/p5-flow-field` using npm:

```bash
npm install @tronicart/p5-flow-field
```

## Usage

The entry point for the library is the `createFlowField` function, which creates a new instance of a `FlowField`.

```typescript
import { createFlowField, FlowField } from '@tronicart/flow-field';

const flowField: FlowField = createFlowField(800, 600, 20);
```

Once you have a `FlowField` instance, you can spawn particles and update the flow field.

```typescript
// Spawn 10 particles
flowField.spawnParticles(10);

// Update the flow field
flowField.update();
```

You can also set a vortex point in the flow field, which will affect the direction of the flow.

```typescript
// Set a vortex point at (400, 300)
flowField.setVortex(createVector(400, 300));
```

## API

### `FlowField`

The `FlowField` class represents a 2D flow field.

#### Constructor

```typescript
createFlowField(width: number, height: number, tileSize: number, p5?: P5 | P5.Graphics);
```

##### Parameters

-   `width`: The width of the flow field.
-   `height`: The height of the flow field.
-   `tileSize`: The size of each tile in the grid.
-   `p5`: The p5.js instance to use. This is optional and defaults to the global `window` instance.

#### `spawnParticles`

This method spawns a specified number of particles in the flow field.

```typescript
public spawnParticles(count: number, particleUpdateMathod?: UpdateCallback): FlowFieldParticle[];
```

##### Parameters

-   `count`: The number of particles to spawn.
-   `particleUpdateMathod`: An optional callback function called on each update tick for each particle.

##### Return Value

This method returns an array of the newly created `FlowFieldParticle` objects.

#### `setVortex`

This method sets the vortex point in the flow field.

```typescript
public setVortex(center: P5.Vector): void;
```

##### Parameters

-   `center`: A `p5.Vector` object representing the center of the vortex.

#### `reset`

This method regenerates the flow field.

```typescript
public reset(): void;
```

#### `update`

This method updates the flow field and all of its particles.

```typescript
public update(debug = false): void;
```

##### Parameters

-   `debug`: An optional boolean value that enables debug mode. When debug mode is enabled, the flow field will be drawn to the screen.

#### `particleCount`

This method returns the number of particles in the flow field.

```typescript
public particleCount(): number;
```
