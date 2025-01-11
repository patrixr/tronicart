export function repeat(n: number, cb: (i: number) => any) {
    for (let i = 0; i < n; ++i) {
        cb(i);
    }
}

export default repeat;