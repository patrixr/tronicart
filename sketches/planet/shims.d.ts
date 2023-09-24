export {};

declare global {
  interface Window {
    fxrand: () => number;
  }
}
