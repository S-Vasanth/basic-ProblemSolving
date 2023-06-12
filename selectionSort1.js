function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // let min = i;
      if (arr[j] < arr[i]) {
        // min = j;
        swap(i, j, arr);
      }
    }
  }

  return arr;
}
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(selectionSort([87, 88, 98, 65, 54]));

//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//       console.log(arr);
//     }
//     swap(arr, i, min);
//     console.log("---------------");
//   }
//   return arr;
