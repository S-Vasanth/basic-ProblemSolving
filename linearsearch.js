function linearsearch(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            console.log(`${num}: Found at position ${i}`) 
        }   
    }
    return `Number Not Found`  
}
var result=linearsearch([2,3,4,4,5,6,7],4)
//console.log(result)
