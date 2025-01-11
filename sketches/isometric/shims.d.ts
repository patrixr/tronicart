export {};

declare global {
  interface Window {
    $fx: {
      fxrand: () => number;
      isPreview: boolean;
      preview: () => void;
    };
  }
}
