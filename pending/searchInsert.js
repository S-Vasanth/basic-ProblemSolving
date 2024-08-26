function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // If target is not found, return the index where it would be inserted
    return left;
}

// Test cases
let nums1 = [1, 3, 5, 6,9];
let target1 = 5;
let nums2 = [1, 3, 5, 6,9];
let target2 = 2;
let nums3 = [1, 3, 5, 6,9];
let target3 = 7;

console.log(searchInsert(nums1, target1)); // Output: 2
console.log(searchInsert(nums2, target2)); // Output: 1
console.log(searchInsert(nums3, target3)); // Output: 4
