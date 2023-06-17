import { AnyFunc, Supplier } from './types';

export function present<T>(obj: T): obj is Exclude<typeof obj, null | undefined> {
  return obj !== null && obj !== undefined;
}

export function repeat(n: number, cb: (i: number) => any) {
  for (let i = 0; i < n; ++i) {
    cb(i);
  }
}

export function cache<F extends AnyFunc>(f: F): F {
  let result = void 0;

  return ((...args) => {
    if (result !== void 0) return result;
    result = f(...args);
    return result;
  }) as F;
}
