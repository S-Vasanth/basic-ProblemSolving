

let arr=[1,1,1,2,2,2,5,7,7,7]

let i = 0

for(let j=0;j<arr.length;j++){
    if(arr[j]!=arr[j+1]){
        let temp=arr[j] 
        arr[j]=arr[i]
        arr[i]=temp
        i++
    }
}
console.log(arr)






//[1,1,1,2,2,2,5,7,7]