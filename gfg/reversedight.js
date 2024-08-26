// You are given an integer N, reverse the digits of given number N, ensuring that the reversed number has no leading zeroes. Return the resulting reversed number.

// Example 1:

// Input: 200
// Output: 2
// Explanation: By reversing the digts of 
// number, number will change into 2.
// Example 2:

// Input : 122
// Output: 221
// Explanation: By reversing the digits of 
// number, number will change into 221.


function reverseDight(num){
    rev=0
    console.log('df')
    while(num>0){
        last=Math.floor(num%10)
        rev=rev*10+last
        num=Math.floor(num/10)
    }
    console.log(rev)
}
reverseDight(221)
reverseDight(200)