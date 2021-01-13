"use strict";
const data = ['aba', 'aa', 'ad', 'vcd', 'aba'];
const findLongestString = (arr) => {
    let lengthString = 0;
    for (let index = 0; index < arr.length; index += 1) {
        const element = arr[index];
        lengthString =
            lengthString < element.length ? element.length : lengthString;
    }
    return arr.filter((el) => el.length === lengthString);
};
console.log(findLongestString(data));
