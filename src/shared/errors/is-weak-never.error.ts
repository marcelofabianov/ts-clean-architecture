export const isWeakNever = (x: never): void => {
  console.error(
    `Never case reached with unexpected value ${x} in ${new Error().stack}`
  );
};
