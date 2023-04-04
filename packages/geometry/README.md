# @tronicart/shapes

`@tronicart/shapes` is a TypeScript package that provides simple shape classes used for creative coding. The package currently provides only one shape class, `Circle`.

## Installation

To install `@tronicart/shapes`, use the following command:

```bash
npm install @tronicart/shapes
```

## Usage

### Creating a Circle

To create a new `Circle` shape, import the `createCircleShape` function from the package and call it with the center X and Y coordinates and the diameter of the circle:

```typescript
import { createCircleShape } from '@tronicart/shapes';

const myCircle = createCircleShape(100, 100, 50);
```

This will create a new `Circle` object with a center at `(100, 100)` and a diameter of `50`.

### Checking for Intersection

To check if a point intersects with the circle, call the `intersects` method on the `Circle` object with the X and Y coordinates of the point:

```typescript
const isIntersecting = myCircle.intersects(75, 75);
```

This will return `true` if the point `(75, 75)` is inside the circle, and `false` otherwise.

### Retrieving the Shape Type

To retrieve the type of the shape, call the `kind` method on the `Circle` object:

```typescript
const shapeType = myCircle.kind();
```

This will return a symbol representing the type of the shape. For a `Circle` object, the symbol will be `Symbol('Circle')`.

### Creating a Random Shape

To create a random `Circle` object, import the `createRandomShape` function from the package and call it with the X and Y coordinates and the size of the shape:

```typescript
import { createRandomShape } from '@tronicart/shapes';

const someShape = createRandomShape(50, 50, 100);
```
