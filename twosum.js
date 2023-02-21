function twoSum(arr, target) {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (target - ele in dict) {
      return [dict[target - ele], i];
    }
    dict[ele] = i;
  }
}
console.log(twoSum([4, 0, 6, 2, 8], 8));

// let dict = {};
// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   if (target - ele in dict) {
//     console.log([dict[target - ele], i]);
//   }
//   dict[ele] = i;
// }
