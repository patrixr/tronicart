import type P5 from 'p5';

let configurableP5: P5 = window as any as P5;

export const overrideGlobalP5 = (p5: P5) => {
  configurableP5 = p5;
};

export const getGlobalP5 = () => {
  return configurableP5;
};
