function evensort(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 2]) {
        let temp = arr[j];
        arr[j] = arr[j + 2];
        arr[j + 2] = temp;
      }
    }
  }
  return arr;
}

console.log(evensort([1, 3, 6, 5, 2, 7, 0, 8])); //0,1,2,6
console.log("hola");
