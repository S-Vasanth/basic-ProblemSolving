function removeDuplicateWord(input) {
  let dict = {};
  let result = [];
  let arr = input.split(" ");
  //console.log(arr);
  for (let word of arr) {
    if (dict[word] === undefined) {
      result.push(word);
    }
    dict[word] = true;
  }
  return result.join(" ");
}
console.log(removeDuplicateWord("welcome welcome to ride ride"));
