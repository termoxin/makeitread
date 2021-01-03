export const getDayOfYear = (date: Date) =>
  Math.floor(
    (+date - +new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
