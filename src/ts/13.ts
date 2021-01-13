const alphabeticShift = (input: string): string => {
  const splitInput = Array.from(input);
  const chartCodeValue = splitInput.map((val: string) => {
    const minAllowed = 'a'.charCodeAt(0);
    const maxAllowed = 'z'.charCodeAt(0);
    let chartCode = val.charCodeAt(0);
    if ((chartCode += 1) >= minAllowed && chartCode <= maxAllowed) {
      return chartCode;
    }

    return chartCode - maxAllowed + minAllowed - 1;
  });

  return chartCodeValue.map((el: number) => String.fromCharCode(el)).join('');
};

console.log(alphabeticShift('crazy'));
