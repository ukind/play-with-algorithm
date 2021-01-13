const one: Array<number> = [2, 4, 7];
const two: Array<number> = [2, 4, 7, 6];
const three: Array<number> = [2, 4, 7, 6, 6];
const four: Array<number> = [2, 4, 7, 6, 6, 8];

function returnAbsoluteValueMinimum(arr: Array<number>): number {
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
