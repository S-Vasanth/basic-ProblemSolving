function maxCharArr(arr) {
  let dict = {};
  for (let char of arr) {
    dict[char] = dict[char] ? dict[char] + 1 : 1;
  }
  let maxcharCount = 0;
  let maxChar = "";
  for (keys in dict) {
    if (dict[keys] > maxcharCount) {
      maxcharCount = dict[keys];
      maxChar = keys;
    }
  }
  return `${maxChar} is occur ${maxcharCount} times`;
}
console.log(maxCharArr(["a", "r", "y", "a", "y", "y"]));
