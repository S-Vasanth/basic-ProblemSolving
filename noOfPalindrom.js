const str='Hi madam today i drive a racecar'
const strArr=str.split(" ")
let rev=''
let count=0
console.log(strArr)
for(const words of strArr){
    checkPalindrom(words)
}

function checkPalindrom(words){

  for(let i=0;i<words.length;i++){
     rev=words[i]+rev
  }
  if(rev===words){
    console.log(rev)
    count=count+1
  }
  rev=''
}
console.log(count)