let arr=[3,5,7,9,7,7,7,6,5,4,3,1]

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
           if(arr[j]>arr[j+1]){
              let temp=arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=temp

           }
    }
}
console.log(arr)
count=1
let cur=arr[0]
for(let i=1;i<arr.length;i++){
   
   if(cur===arr[i]) {
      count++
   }else{
    console.log(`${cur}:${count}`)
    cur=arr[i]
    count=1

   }
}
console.log(`${cur}:${count}`)