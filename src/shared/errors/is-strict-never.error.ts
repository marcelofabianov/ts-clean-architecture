export const isStrictNever = (x: never): never => {
  throw new Error(`Never case reached with unexpected value ${x}`);
};
