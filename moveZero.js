let arr = [0,1,0,0,0,3,12]

let i=0
for(let j=0;j<arr.length;j++){
    if(arr[j]!==0){
        let temp=arr[j]
        arr[j]=arr[i]
        arr[i]=temp
        i++
    }
}

console.log(arr)