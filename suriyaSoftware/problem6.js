// input : ------>[2,8,3,6,4,9,7]
// even index multiple by 3---->[2*3,8,3*3,6,4*3,9,7*3]
// [6,8,9,6,12,9,21]
// add if 15->1+5=6------>[6,8,9,6,3,9,3]
// sum of arr ----->[35]
// output return true if sum of arr divide by 10,else return false

function splitAdd(arr) {
  let total = 0;
  let output = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    arr[i] = arr[i] * 3;
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 10) {
      output.push(sumDigit(arr[j]));
    } else {
      output.push(arr[j]);
    }
  }

  function sumDigit(n) {
    let sum = 0;
    while (n > 0) {
      digit = n % 10;
      sum = sum + digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  for (let k = 0; k < output.length; k++) {
    total = total + output[k];
  }

  if (total % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(splitAdd([2, 8, 3, 6, 4, 9, 7])); //[6,8,6,3,9,3]
