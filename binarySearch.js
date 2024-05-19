
function binarysearch(arr,num){
    let low=0
    let high=arr.length-1
   
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]==num){
            return `num found at ${mid}th position`
        }else if(num>arr[mid]){
            low=mid+1
        }else if(num<arr[mid]){
            high=mid-1
        }else{
            return `num not found`
        }

    }
  
}
console.log(binarysearch([3,4,6,7,8,10,22],22))

