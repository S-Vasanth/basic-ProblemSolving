let first = 0;
let second = 1;

for (let i = 2; i < 10; i++) {
  console.log(first);
  let temp = first;
  first = second;
  second = temp + first;
}
// --------------------
var num = 10;
var first1 = 0;
var second1 = 1;

for (i = 2; i < 10; i++) {
  console.log(first1);
  var temp1 = first1;
  first1 = second1;
  second1 = temp1 + second1;
}
