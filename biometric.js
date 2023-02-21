//output:305,847,754,667,686
function getMid(num) {
  return Math.floor(num / 10) % 10;
}
function swap(arr, x, y) {
  let temp = arr[x];
  let midOfY = getMid(arr[y]);
  arr[x] = Math.floor(temp / 100) * 100 + midOfY * 10 + (temp % 10);
  let midOfX = getMid(temp);
  arr[y] = Math.floor(arr[y] / 100) * 100 + midOfX * 10 + (arr[y] % 10);
}
function sortMiddle(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      let first = i;
      let firstElement = getMid(arr[first]);
      let secondElement = getMid(arr[first + 1]);

      if (firstElement > secondElement) {
        swap(arr, first, first + 1);
      }
    }
  }
  return arr;
}

console.log(sortMiddle([867, 687, 345, 807, 754]));
