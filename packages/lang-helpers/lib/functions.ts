export function present<T>(obj: T): obj is Exclude<typeof obj, null | undefined> {
  return obj !== null && obj !== undefined;
}

export function repeat(n: number, cb: (i: number) => any) {
  for (let i = 0; i < n; ++i) {
    cb(i);
  }
}
