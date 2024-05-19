// Given a number N. Count the number of digits in N which evenly divide N.

// Note :- Evenly divides means whether N is divisible by a digit i.e. leaves a remainder 0 when divided.
 

// Example 1:

// Input:
// N = 12
// Output:
// 2
// Explanation:
// 1, 2 both divide 12 evenly
// Example 2:

// Input:
// N = 23
// Output
// 0
// Explanation:
// 2 and 3, none of them
// divide 23 evenly

function countEven(n){
    let temp=n
    let count=0
while(temp>0){
    last=Math.floor(temp%10)
    if(n%last===0){
         count++
         console.log(last)
    }
    temp=Math.floor(temp/10)
}
console.log(count)
}
countEven(125)