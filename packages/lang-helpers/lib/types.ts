export type Full<T> = {
  [P in keyof T]-?: T[P];
};

export type RandomFunction = typeof Math.random;

export type Drawable<T = {}> = T & { draw: () => void };

export type IVector = { x: number; y: number; z?: number };
