export class Context {
  p5;
  state;
}
export function compose(data, ...effects) {
  const steps = effects.flat();
  let state = { ...data };
  let idx = 0;
  const pipeline = (ctx) => {
    if (!steps[idx])
      return;
    state = ctx.state;
    steps[idx++](ctx, pipeline);
  };
  return (p5) => {
    idx = 0;
    pipeline({ state, p5 });
  };
}
