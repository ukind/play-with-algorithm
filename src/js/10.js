"use strict";
const tes = [3, 6, -2, -5, 7, 3];
const productAdjacents = (arr) => {
    let largetProduct = arr[0] * arr[1];
    for (let index = 0; index < arr.length - 1; index += 1) {
        const product = arr[index] * arr[index + 1];
        largetProduct = largetProduct < product ? product : largetProduct;
    }
    return largetProduct;
};
console.log(productAdjacents(tes));
