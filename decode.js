function decoding(input) {
 let count=1
 let res=""
 for(let i=0;i<input.length;i++){
  if(input[i]!==input[i+1]){
      res=res+input[i]+count
      count=1
  }else{
    count++
  }
 }
 console.log(res)
}
decoding("aabbbbbc");
