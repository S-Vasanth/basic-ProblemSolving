const arr = [484,325,676,322,322,656,878];

function findUnitDigits(arr){
    let res = {};
    for(let num of arr){
        let unitDigit = Math.floor(num / 100);
        res[unitDigit] = res[unitDigit] ? res[unitDigit] + 1 : 1;
    }
    
    let max=0
    let maxnum;
    for(let key in res){
        if(res[key]>max){
            max=res[key]
            maxnum=key
        }
    }
   console.log(maxnum+"occur"+max+"time")
}


findUnitDigits(arr)