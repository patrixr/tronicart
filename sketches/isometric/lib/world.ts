import type { IVector } from '@tronicart/cc/types';
import type P5 from 'p5';
import type { Color } from 'p5';
import { createCube, CubeProps } from './cube';
import { createPlane, PlaneProps } from './plane';
import { createLine, LineProps } from './line';
import { createPoint, PointProps } from './point';

// ----------------------------------------------------------------
// 		Types
// ----------------------------------------------------------------

export type Quad = [IVector, IVector, IVector, IVector];

export enum IsoObjectTypes {
  Cube,
  Plane,
  Line,
  Point,
  Composition
}

export type IsometricObject = {
  draw(p5: P5 | P5.Graphics): void;
  readonly quads: number;
  readonly type: IsoObjectTypes;
};

export type ComposedIsometricObject = IsometricObject & {
  readonly type: IsoObjectTypes.Composition;
};

export type ColorProps = {
  color?: Color;
  opacity?: number;
};

export type IsoCell = { location: IVector; obj: IsometricObject };

export type ObjectCreatorMethod<P> = (
  x: number,
  y: number,
  z?: number,
  props?: P
) => IsometricObject;

// ----------------------------------------------------------------
// 		Entry point
// ----------------------------------------------------------------

export function createIsometricWorld(cellSize: number) {
  const cells: IsoCell[] = [];
  const presence: Record<string, number> = {};

  // --- (private) adds an object to a cell
  const hashKey = (x, y, z) => `${Math.floor(x)}-${Math.floor(y)}-${Math.floor(z)}`;

  const add = (x: number, y: number, z: number, obj: IsometricObject) => {
    const key = hashKey(x, y, z);

    presence[key] ??= 0;
    presence[key]++;

    for (let i = 0; i < cells.length; ++i) {
      const { location, obj: other } = cells[i];

      if (x > location.x) continue;
      if (y > location.y) continue;
      if (z > location.z) continue;
      if (obj.quads > other.quads) continue;

      cells.splice(i, 0, {
        location: { x, y, z },
        obj
      });

      return;
    }

    cells.push({
      location: { x, y, z },
      obj
    });
  };

  // --- (public) main api

  const convertCoordinates = (x: number, y: number, z: number) => {
    const rx = ((x - y) * cellSize * Math.sqrt(3)) / 2;
    const ry = ((x + y) * cellSize) / 2 - cellSize * z;
    return { x: rx, y: ry };
  };

  const clear = () => (cells.length = 0);

  const draw = (p5: P5 | P5.Graphics, rootX: number, rootY: number) => {
    cells.forEach(({ location, obj }) => {
      const { x, y } = convertCoordinates(location.x, location.y, location.z);
      p5.push();
      p5.translate(rootX + x, rootY + y);
      obj.draw(p5);
      p5.pop();
    });
  };

  const cube = (x: number, y: number, z: number, props: CubeProps = {}) => {
    add(x, y, z, createCube(cellSize, props));
  };

  const plane = (x: number, y: number, z = 0, props: PlaneProps = {}) => {
    add(x, y, z, createPlane(cellSize, props));
  };

  const point = (x: number, y: number, z = 0, props: PointProps = {}) => {
    add(x, y, z, createPoint(props));
  };

  const line = (
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    props: LineProps = {}
  ) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dz = z2 - z1;
    const { x, y } = convertCoordinates(dx, dy, dz);
    add(x1, y1, z1, createLine(x, y, props));
  };

  const lookup = (type?: IsoObjectTypes) =>
    type ? cells.find((cell) => cell.obj.type === type) : cells;

  return {
    draw,
    add,
    point,
    cube,
    plane,
    clear,
    line,
    cellSize,
    lookup,
    createCube,
    createPlane
  };
}

export type IsometricWorld = ReturnType<typeof createIsometricWorld>;
