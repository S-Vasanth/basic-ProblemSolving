var longestConsecutive = function(nums) {
    
    let set = new Set(nums)   //initializing a blank set
  
    let maxCount = 0   //maintain a maximum count value
    for(let ele of nums){  //again loop over nums array
        if(!set.has(ele-1)){  //check if a element is a starting element of the sequence
            let count = 0  //if so, take count as 0
            while(set.has(ele)){  //start a loop with the condition untill element+1 is present in the set
                ele++   //making the element as element+1
                count++  //incrementing the count
            }
            maxCount = Math.max(maxCount, count)  //maintaining the maximum count value
        }
    }
    return maxCount
};

console.log(longestConsecutive([100,4,200,1,3,2]))