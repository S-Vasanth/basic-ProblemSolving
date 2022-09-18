function revNum(num){
    var palin=num
    var rev=0
    while(num!=0){
       last=num%10
       rev=rev*10+last
       num=Math.floor(num/10)   
    }
    if(rev==palin){
        console.log("it is palindrome")        
    }
    console.log(rev)   
}
revNum(893)