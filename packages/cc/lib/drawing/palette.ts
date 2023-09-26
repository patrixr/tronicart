import type P5 from 'p5';
import ColorScheme from 'color-scheme';
import { getGlobalP5 } from '../p5/configure';

export module Palette {
  const ALL_SCHEMES = ['mono', 'contrast', 'triade', 'tetrade', 'analogic'] as const;
  const ALL_VARIATIONS = ['default', 'pastel', 'soft', 'light', 'hard', 'pale'] as const;

  export type PaletteScheme = typeof ALL_SCHEMES[number];
  export type PaletteVariation = typeof ALL_VARIATIONS[number];
  export type PaletteConfiguration = {
    p5?: P5;
    scheme?: PaletteScheme;
    variation?: PaletteVariation;
    hue?: number;
    distance?: number;
  };

  let p5: P5;
  let index = 0;
  let colors: string[] = [];
  let configured = false;
  let savedConfig: PaletteConfiguration = null;

  export function configure(config: PaletteConfiguration = {}) {
    p5 = config.p5 ?? getGlobalP5();

    const {
      hue = p5.floor(p5.random(0, 360)),
      variation = p5.random([...ALL_VARIATIONS]),
      scheme = p5.random([...ALL_SCHEMES]),
      distance = p5.random(0, 1)
    } = config;

    console.log('Palette config:');
    console.log({ hue, variation, scheme, distance });

    colors = new ColorScheme()
      .from_hue(hue)
      .distance(distance)
      .scheme(scheme)
      .variation(variation)
      .colors()
      .map((c) => `#${c}`);

    colors = p5.shuffle(colors);
    configured = true;

    savedConfig = {
      ...config
    };
  }

  export function reload() {
    prepare();
    configure(savedConfig);
  }

  export function prepare() {
    if (!configured) {
      configure();
    }
  }

  export function nextColor() {
    prepare();
    return p5.color(colors[index++ % colors.length]);
  }

  export function intToColor(i: number) {
    prepare();
    return p5.color(colors[Math.floor(i) % colors.length]);
  }

  export function peekNextColor() {
    prepare();
    return p5.color(colors[(index + 1) % colors.length]);
  }

  export function allColors() {
    prepare();
    return colors.map((c) => p5.color(c));
  }

  export function colorCount() {
    prepare();
    return colors.length;
  }
}
