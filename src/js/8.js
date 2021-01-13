"use strict";
function addBorder(pic) {
    let wallLength = 0;
    const res = pic.map((el) => `*${el}*`);
    for (let index = 0; index < pic.length; index += 1) {
        const element = pic[index];
        wallLength = +element.length;
    }
    res.push('*'.repeat((wallLength += 1)));
    res.unshift('*'.repeat((wallLength += 1)));
    return res;
}
console.log(addBorder(['tikus', 'sabun']));
