var year=2000
if((year%4==0)&&(year%100!==0)){
    console.log("this is leap year")
}else if((year%400==0)&&(year%100==0)){
    console.log("this is leap year")
}else{
    console.log("this in not a leap year")
}