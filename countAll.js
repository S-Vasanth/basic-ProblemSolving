let arr=[1,2,3,4]
//output:[1,3,6,10]
for(let i=1;i<arr.length;i++){
   arr[i]=arr[i]+arr[i-1]
}
console.log(arr)