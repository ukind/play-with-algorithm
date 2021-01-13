"use strict";
const alternatingSum = (arr) => {
    const alternateOne = [];
    const alternateTwo = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            alternateOne.push(arr[index]);
        }
        else {
            alternateTwo.push(arr[index]);
        }
    }
    const resA = alternateOne.reduce((prev, current) => (prev += current), 0);
    const resB = alternateTwo.reduce((prev, current) => (prev += current), 0);
    return [resA, resB];
};
console.log(alternatingSum([10, 20, 30, 40, 50]));
