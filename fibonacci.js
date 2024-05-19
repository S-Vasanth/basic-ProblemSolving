let first = 0;
let second = 1;

for (let i = 2; i < 10; i++) {
  console.log(first)
  let temp=first
  first=second
  second=temp+first
}

