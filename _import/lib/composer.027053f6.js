export function compose(defaults, effects) {
  let idx = 0;
  let end;
  const pipeline = (ctx) => {
    const next = idx === effects.length - 1 ? end : pipeline;
    effects[idx++](ctx, next);
  };
  return (ctx, next) => {
    idx = 0;
    end = next;
    pipeline({
      state: {
        ...defaults,
        ...ctx.state
      },
      p5: ctx.p5
    });
  };
}
export function isolate(effects) {
  let idx = 0;
  let state;
  let fxList = Array.isArray(effects) ? effects : [effects];
  const pipeline = (ctx) => {
    if (idx >= fxList.length)
      return;
    effects[idx++](ctx, pipeline);
  };
  return (ctx, next) => {
    idx = 0;
    state = ctx.state;
    pipeline({
      state,
      p5: ctx.p5
    });
    next({
      state,
      p5: ctx.p5
    });
  };
}
export function compile(stateFactory, effects) {
  let state = stateFactory();
  const next = (ctx) => {
    state = ctx.state;
  };
  return {
    draw: (p5) => {
      for (const fx of effects) {
        fx(
          {
            state,
            p5
          },
          next
        );
      }
    },
    reset: () => {
      state = stateFactory();
    }
  };
}
