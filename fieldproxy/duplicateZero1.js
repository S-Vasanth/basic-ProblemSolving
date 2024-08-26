function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }

  console.log(arr);
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // result [1,0,0,2,3,0,0,4]
duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]); // result: [8, 4, 5, 0, 0, 0, 0, 0]
duplicateZeros([1, 2, 3]); // result: [1,2,3]
