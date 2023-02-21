var num=10
var first=0
var second=1

for(i=0;i<10;i++){
   console.log(first)
   var temp=first
   first=second
   second=temp+second
}