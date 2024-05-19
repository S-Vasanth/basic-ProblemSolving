// different between closest Element
// input--->[5,8,9,12]
// output--->1

function diffBetweenClosestEle(arr) {
  let diff = Infinity;
  let pos = null;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i + 1] - arr[i] < diff) {
      diff = arr[i + 1] - arr[i];
      pos = i;
    }
  }
  console.log(diff)
  return pos != null
    ? `the closest numbers are ${arr[pos]},${
        arr[pos + 1]
      } differance is ${diff} `
    : -1;
}
console.log(diffBetweenClosestEle([1,2,5,7,12]));
