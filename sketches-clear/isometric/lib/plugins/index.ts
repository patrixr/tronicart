import { ComposedIsometricObject, IsometricWorld } from '../world';
import type P5 from 'p5';
import { tree } from './tree';
import { terrain } from './terrain';

export function plugins(p5: P5, world: IsometricWorld) {
  return {
    tree: tree(p5, world),
    terrain: terrain(p5, world)
  };
}

export type IsoPlugins = ReturnType<typeof plugins>;

export type IsoPluginFactory<P> = (world: IsometricWorld, props: P) => ComposedIsometricObject;

export type Plugin<P extends any> = <W extends IsometricWorld>(w: W) => any;
