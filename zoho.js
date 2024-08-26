// [23,87,76,98,20]

// [6,56,42,72,2]


function largestDigth(arr){
    let output=[]
    let finalEle
    for(let i=0;i<arr.length;i++){
        let cur=arr[i]
         finalEle= sumMul(cur)
       output.push(finalEle)
    }
    function sumMul(cur){
        let sum=0
        let mul=1
        while(cur>0){
            last=Math.floor(cur%10)
            sum=sum+last
            mul=mul*last
            cur = Math.floor(cur/10)         
        }
        if(sum>mul){
            return sum
        }else{
            return mul  
        }
    }
   console.log(output)
}
largestDigth([23,87,76,98,20])