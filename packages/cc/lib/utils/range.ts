export function range(n: number): number[] {
  return [...Array(Math.floor(n)).keys()];
}

export default range;