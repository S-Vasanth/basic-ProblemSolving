var new_arr=[];
var removedup=(arr)=>{
      for(var i=1;i<arr.length;i++){
          if(new_arr.indexOf(arr[i])==-1){
            new_arr.push(arr[i])
          }
      }
      console.log(new_arr)
}

removedup([9,4,3,3,2,3,1,1,1])


