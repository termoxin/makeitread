export const getDayOfYear = (date: Date) =>
  Math.floor(
    (+date - +new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );

export const getFormattedDate = (date: Date) => {
  const month = new Intl.DateTimeFormat("en", {
    month: "2-digit",
  }).format(date);

  const dateNumber = new Intl.DateTimeFormat("en", {
    day: "2-digit",
  }).format(date);

  return `${date.getFullYear()}-${month}-${dateNumber}`;
};
