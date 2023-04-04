import { Circle, createCircle, dist } from '@tronicart/geometry';

type PackableMethods = {
  hitboxes(): Circle[];
};

export type Packable<T = void> = T extends void ? PackableMethods : T & PackableMethods;

export type PackableFactory<T extends Packable> = (x: number, y: number, index: number) => T;

export type PackingConfiguration<T extends Packable> = {
  surfaceLeft?: number;
  surfaceTop?: number;
  surfaceWidth: number;
  surfaceHeight: number;
  count: number;
  maxFailures?: number;
  factory: PackableFactory<T>;
  random?: () => number;
};

let packingInstanceId = 0;

/**
 * Returns a list of non colliding Packable objects
 *
 * @export
 * @template T
 * @param {PackingConfiguration<T>} {
 *   surfaceWidth,
 *   surfaceHeight,
 *   count,
 *   factory,
 *   surfaceLeft = 0,
 *   surfaceTop = 0,
 *   maxFailures = 300,
 *   random = Math.random
 * }
 * @return {*}  {T[]}
 */
export function pack<T extends Packable>({
  surfaceWidth,
  surfaceHeight,
  count,
  factory,
  surfaceLeft = 0,
  surfaceTop = 0,
  maxFailures = 500,
  random = Math.random
}: PackingConfiguration<T>): T[] {
  const items: T[] = [];
  const instance = ++packingInstanceId;
  let failures = 0;

  const log = () =>
    console.log(
      `[packing:${instance}] ${items.length}/${count} (failures=${failures} maxFails=${maxFailures})`
    );

  const outOfBounds = (x, y) =>
    x < surfaceLeft ||
    x > surfaceLeft + surfaceWidth ||
    y < surfaceTop ||
    y > surfaceTop + surfaceHeight;

  const hitboxesOutOfBounds = (hitboxes: Circle[]) => {
    for (const hitbox of hitboxes) {
      if (outOfBounds(hitbox.x, hitbox.y)) {
        return true;
      }
    }
    return false;
  };

  const hitboxesCollide = (hitboxesA: Circle[], hitboxesB: Circle[]) => {
    for (const hitbox of hitboxesA) {
      for (const otherHitbox of hitboxesB) {
        if (otherHitbox.intersects(hitbox)) {
          return true;
        }
      }
    }
    return false;
  };

  while (items.length < count) {
    const x = surfaceLeft + random() * surfaceWidth;
    const y = surfaceTop + random() * surfaceHeight;
    const item: T = factory(x, y, items.length - 1);

    const isOutsideSurface = hitboxesOutOfBounds(item.hitboxes());
    const badItem =
      isOutsideSurface ||
      Boolean(items.find((other) => hitboxesCollide(item.hitboxes(), other.hitboxes())));

    if (!badItem) {
      items.push(item);
      failures = 0;
      log();
      continue;
    }

    if (++failures >= maxFailures) {
      console.warn(
        `[packing:${instance}] Packing algorithm stopped prematurely after too many failures`
      );
      break;
    } else {
      log();
    }
  }

  return items;
}

/**
 * Given a line, computes the hitboxes to cover it
 *
 * @export
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [hitboxSize=4]
 * @return {*}  {Circle[]}
 */
export function computeLineHitboxes(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  hitboxSize = 4
): Circle[] {
  const lineLen = dist(x1, y1, x2, y2);
  const hitboxCount = lineLen / hitboxSize;
  const diffX = x2 - x1;
  const diffY = y2 - y1;
  const stepX = diffX / hitboxCount;
  const stepY = diffY / hitboxCount;
  const hitboxes: Circle[] = [];

  for (let i = 0; i < hitboxCount; i++) {
    hitboxes.push(createCircle(x1 + i * stepX, y1 + i * stepY, hitboxSize));
  }

  return hitboxes;
}
