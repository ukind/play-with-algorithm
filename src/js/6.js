"use strict";
const one = [2, 4, 7];
const two = [2, 4, 7, 6];
const three = [2, 4, 7, 6, 6];
const four = [2, 4, 7, 6, 6, 8];
function returnAbsoluteValueMinimum(arr) {
    const { length } = arr;
    if (Number.isInteger(length / 2)) {
        if (!(arr[length / 2] < arr[length / 2 - 1])) {
            return arr[length / 2];
        }
        return arr[length / 2 - 1];
    }
    const median = Math.floor(length / 2);
    return arr[median];
}
console.log(returnAbsoluteValueMinimum(one));
