function insertionSort(arr) {
  for(let i=1;i<arr.length;i++){
     let currentElement=arr[i]
     let pos=i
     while(currentElement<arr[pos-1] && pos>0){
       arr[pos]=arr[pos-1]
       pos=pos-1
     }
     arr[pos]=currentElement
  }
  return arr
}
console.log(insertionSort([2, 3, 4, 5, 1]));

//source amuls acadamy
