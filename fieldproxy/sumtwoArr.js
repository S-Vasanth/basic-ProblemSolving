function twoSumArr(arr1, arr2) {
  let output = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    val = arr1[i] + arr2[i];
    if (val >= 10) {
      n = val % 10;
      carry = Math.floor(val / 10);
      arr1[i - 1] = arr1[i - 1] + carry;
      output.unshift(n);
    } else {
      output.unshift(val);
    }
  }
  console.log(output);
}
twoSumArr([3, 8, 8], [5, 6, 4]); //[9,5,2]
