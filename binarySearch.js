function getMid(low,high){
   return Math.floor((low+high)/2)
}
function binarysearch(arr,num){
    let low=0
    let high=arr.length-1
   
    console.log(low,high)
    while(low<=high){
        const mid=getMid(low,high)
        const currentElement=arr[mid]
        if(num==currentElement){
            return `Number found at ${mid}`
        }else if(num>currentElement){
             low=mid+1  
            //  return low
        }else{
              high=mid-1
            // return high
        }
    }
    return `number not found`
}

console.log(binarysearch([3,4,6,7,8,10,22],22))

