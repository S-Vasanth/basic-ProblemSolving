function revWords(str) {
  let strArr = str.split(" ");
  let n = strArr.length - 1;
  let mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    temp = strArr[i];
    strArr[i] = strArr[n];
    strArr[n] = temp;
    n--;
  }
  console.log(strArr.join(" "));
}

revWords("i have a car key");
