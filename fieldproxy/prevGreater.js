function prevGreater(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      output.push(arr[i]);
    } else if (arr[i] > arr[i - 1]) {
      output.push(arr[i]);
    }
  }
  console.log(output);
}

prevGreater([2, 1, 0, 4, 7, 8, 0, 7, 5, 3, 10]);
