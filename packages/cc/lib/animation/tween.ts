import { Full } from '../types'

export interface Tween<T> {
  value(): T;
  incr(): void;
  progress(p?: number): number;
  delta(d?: number): number;
  reverse(): void;
}

const constrain = (val: number, min: number, max: number) => {
  if (val > max) return max;
  if (val < min) return min;
  return val;
}

function createTween<T>(fn: (pct: number) => T) {
  let pct = 0;
  let sign = 1;
  let started = false;
  let step = 0.005;

  const reverse = () => {
    if (!started) {
      pct = 1;
    }
    sign *= -1;
  };

  const incr = () => {
    started = true;
    pct = constrain(pct + sign * step, 0, 1);
  };

  const value = () => {
    return fn(pct);
  };

  const progress = (p?: number) => {
    if (typeof p === 'number') {
      pct = constrain(p, 0, 1);
    }
    return pct;
  };

  const delta = (d?: number) => {
    if (typeof d === 'number') {
      if (d < 0 || d > 1) {
        throw new Error(`Provided delta (${d}) should be within 0 and 1`);
      }
      step = d;
    }
    return step;
  };

  return {
    value,
    incr,
    reverse,
    progress,
    delta
  };
}

type NumericObject = Record<string, number>;
type NumericInput = number | NumericObject;
type Consistent<T extends NumericInput> = T extends number ? number : Full<T>;

function createNumericTween<T extends NumericInput>(
  from: Consistent<T>,
  to: Consistent<T>,
  delta = 0.005
): Tween<T> {
  const tween = createTween<T>((pct) => {
    if (typeof from === 'number') {
      return (from + pct * ((to as number) - from)) as T;
    }

    return Object.keys(from).reduce((acc, key) => {
      return {
        ...acc,
        [key]: from[key] + pct * (to[key] - from[key])
      };
    }, {}) as T;
  });
  tween.delta(delta);
  return tween;
}

export const Tween = {
  createNumericTween,
  createTween
}