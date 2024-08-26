let arr=[1,2,3,4]
//output:[1,3,6,10]
for(let i=1;i<arr.length;i++){
   arr[i]=arr[i]+arr[i-1]
}
console.log(arr)


//------------------------------------------------------


let arr1=[1,2,3,4]
//output:[1,3,7,15]
for(let i=1;i<arr1.length;i++){
   let res=sum(i)
   arr1[i]=res
}
function sum(i){
   total=0
   for(let j=0;j<=i;j++){
      total=total+arr1[j]
   }
   return total
}
console.log(arr1)