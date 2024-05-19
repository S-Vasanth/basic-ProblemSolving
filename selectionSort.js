function swap(i,start,arr){
    let temp=arr[i]
    arr[i]=arr[start]
    arr[start]=temp
}


function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let start=i
        for(let j=i+1;j<arr.length;j++){     
            if(arr[j]<arr[start]){
                start=j
            }
        }
        swap(i,start,arr)
        console.log(arr)
    }
    console.log("----------")
  console.log(arr)
}
selectionSort([7,4,10,8,3,1])