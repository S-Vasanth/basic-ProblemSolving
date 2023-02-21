var num=6
if(num>1){
    for(var i=2;i<num;i++){
      var flag=true
        if(num%i==0){
            flag=false
            break
        }
    }
    if(flag){
        console.log(`${num}:this is a prime number`)
    }else{
        console.log(`${num}:this is not a prime number`)
    }
}else{
    console.log(num+":this not a prime number")
} 
