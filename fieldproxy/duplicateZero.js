function duplicateZeros(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i]);
    if (arr.length == output.length) break;
    if (arr[i] == 0) {
      output.push(0);
      if (arr.length == output.length) break;
    }
  }

  console.log(output);
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // result [1,0,0,2,3,0,0,4]
duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]); // result: [8, 4, 5, 0, 0, 0, 0, 0]
duplicateZeros([1, 2, 3]); // result: [1,2,3]
