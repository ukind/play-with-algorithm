"use strict";
const calcTwoDigit = (digit) => {
    const raw = digit.toString().split('');
    return raw.reduce((prev, next) => parseInt(prev, 10) + parseInt(next, 10), 0);
};
console.log(calcTwoDigit(99));
