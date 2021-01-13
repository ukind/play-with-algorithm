const isAlphabetSequence = (seq: string): boolean => {
  const splitSeq = Array.from(seq);

  const charCode = splitSeq.map((el) => el.charCodeAt(0));
  const allTestPass = [];

  for (let index = 0; index < charCode.length; index+=1) {
    const currentElement = charCode[index];
    const nextElement = charCode[(index += 1)];
    if (currentElement < nextElement) {
      allTestPass.push(true);
      index += 1;
    } else {
      allTestPass.push(false);
    }
  }

  return !allTestPass.includes(false);
};

console.log(isAlphabetSequence('av'));
