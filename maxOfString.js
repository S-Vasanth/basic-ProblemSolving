function maxOfString(string) {
  dict = {};
  max = 0;
  maxChar = "";

  for (let char of string) {
    if (dict[char]) {
      dict[char]++;
    } else {
      dict[char] = 1;
    }
  }

  for (let char in dict) {
    if (dict[char] > max) {
      max = dict[char];
      maxChar = char;
    }
  }

  return `${maxChar} is occur ${max} times`;
}

console.log(maxOfString("welcome to fantasy world"));
