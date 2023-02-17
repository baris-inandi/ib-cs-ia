export const toValidTimeString = (s: number) => {
  return (s < 10 ? "0" + s : s).toString();
};

export const isNumeric = (n: string) => {
  return n.match(/\d*/);
};
