var num = 153;
var temp = num;
var sum = 0;
while (num > 0) {
  digit = num % 10;
  sum = sum + digit * digit * digit;
  num = Math.floor(num / 10);
}
console.log(sum);

if (temp == sum) {
  console.log("this is amstorng");
} else {
  console.log("this is not a amstorng");
}
