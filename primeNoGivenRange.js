// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = 5
const higherNumber = 15

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for(var i=lowerNumber;i<=higherNumber;i++){
    var flag=true
      for(var j=2;j<i;j++){
        if(i%j==0){
          flag=false
          break
         }
      }
      if(flag){
        console.log(i)
    }
}
