function swap(arr,i,j){
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
    
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
               swap(arr,i,j)
            }
            console.log(arr)
        }
        console.log("---------------")
    } 
    return arr
}
console.log(selectionSort([64,25,12,22,11])) 