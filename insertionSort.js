function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentElemet = arr[i];
    var pos = i;
    while (currentElemet < arr[pos - 1] && pos > 0) {
      arr[pos] = arr[pos - 1];
      pos = pos - 1;
    }
    arr[pos] = currentElemet;
  }
  return arr;
}
console.log(insertionSort([2, 3, 4, 5, 1]));

//source amuls acadamy
