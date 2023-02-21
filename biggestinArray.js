var arr=[2,3,4,8,6,1,7]
var big=arr[0]
var small=arr[0]
for(var i=0;i<arr.length;i++){  
    if(arr[i]>big){
        big=arr[i]
    }
    if(arr[i]<small){
        small=arr[i]
    }
}
console.log(big)
console.log(small)