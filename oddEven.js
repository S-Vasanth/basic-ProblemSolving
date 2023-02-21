var num = 10;
var even=[]
var odd=[]
for(var i=1;i<=num;i++){
    if(i%2==0){
        even.push(i)
    }else{
        odd.push(i)
    }  
}
console.log("even:"+even)
console.log("odd:"+odd)

