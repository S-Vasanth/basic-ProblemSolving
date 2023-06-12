function evensort(arr) {
  for (let i = 0; i < (arr.length / 2)-1; i++) {
    for (let j = 0; j < arr.length -1 - i; j=j+2) {
      if (arr[j] > arr[j + 2]) {
        let temp = arr[j];
        arr[j] = arr[j + 2];
        arr[j + 2] = temp;
      }
    }
  }
  return arr;
}

console.log(evensort([1, 7, 6, 8, 2, 3, 9, 5, 0,9])); //0,1,2,6
console.log("hola");
