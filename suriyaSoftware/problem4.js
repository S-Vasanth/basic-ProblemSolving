// input--->[1,2,3,4,5]
// output--->[5*0,4*1,3,2*3,1*4]--->[0,4,3,6,4]

function revNum(arr) {
  let n = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  console.log(mid);
  for (let i = 0; i < mid; i++) {
    let temp = arr[i];
    arr[i] = arr[n] * i;
    arr[n] = temp * n;
    n--;
  }

  return arr;
}
console.log(revNum([1, 2, 3, 4, 5]));
