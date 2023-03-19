export function present<T>(obj: T): obj is Exclude<typeof obj, null | undefined> {
  return obj !== null && obj !== undefined;
}
