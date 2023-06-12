function prevGreater(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) continue;
    else if (arr[i] < arr[i - 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}

prevGreater([2, 1, 0, 4, 7, 8, 0, 7, 5, 3, 10]);
