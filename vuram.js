var arr=[1,3,4,3,5,6,6,5,7]
var new_arr=[]
for(var i=0;i<arr.length;i++){
    if(new_arr.indexOf(arr[i])==-1){
        new_arr.push(arr[i])
    }
 }
console.log(new_arr)

