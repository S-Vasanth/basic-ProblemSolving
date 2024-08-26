let arr=[3,5,7,9,9,7,7,7,6,5,4,3,1]

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

///////////////// another method /////////////////////////

function decoding(input) {
   let count=1
   let res=""
   for(let i=0;i<input.length;i++){
    if(input[i]!==input[i+1]){
        //res=res+input[i]+count
        console.log(`${input[i]}:${count}`)
        count=1
    }else{
      count++
    }
   }
   console.log(res)
  }
  decoding([2,2,3,3,4,4,5]);