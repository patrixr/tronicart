import type { AnyFunc } from "../types"
export function cache<F extends AnyFunc>(f: F): F {
    let result = void 0;

    return ((...args) => {
        if (result !== void 0) return result;
        result = f(...args);
        return result;
    }) as F;
}

export default cache;