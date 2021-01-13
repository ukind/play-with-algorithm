const calcTwoDigit = (digit: number): number => {
  const raw = digit.toString().split('');
  return raw.reduce(
    (prev: string | number, next: string | number): number =>
      parseInt(prev as string, 10) + parseInt(next as string, 10),
    0
  );
};

console.log(calcTwoDigit(99));
