function bubbleSort(arr){
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
         if(arr[j]>arr[j+1]){
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
         }
         console.log(arr)
    }
    console.log("------------------")
   }
   //return arr
}
bubbleSort([64,25,12,22,11])