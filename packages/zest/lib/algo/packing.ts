import { dist } from "./coordinates"

export interface Circle {
    readonly x: number;
    readonly y: number;
    readonly diameter: number;
    readonly radius: number;
    intersects: (shape: Circle) => boolean
}

export function createCircle(x: number, y: number, diameter: number): Circle {
    const radius = diameter / 2;
    const intersects = (shape: Circle) => dist(x, y, shape.x, shape.y) <= radius + shape.radius;
    return { radius, diameter, intersects, x,  y };
}

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