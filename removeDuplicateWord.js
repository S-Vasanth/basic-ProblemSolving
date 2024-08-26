// function removeDuplicateWord(input) {
//   let dict = {};
//   let result = [];
//   let arr = input.split(" ");
//   //console.log(arr);
//   for (let word of arr) {
//     if (dict[word] === undefined) {
//       result.push(word);
//     }
//     dict[word] = true;
//   }
//   return result.join(" ");
// }
// console.log(removeDuplicateWord("welcome welcome to ride ride"));


function removeDuplicateWord(arr) {
  let dict = {};
  let result = [];

  for (let i of arr) {
    
    if (dict[i] === undefined) {
      result.push(i);
    }
    dict[i] = true;
  }
  return result;
}
console.log(removeDuplicateWord([1,3,4,3,5,6,6,5,7]))