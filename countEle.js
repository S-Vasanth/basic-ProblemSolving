function countEle(str){
    let map={}
    let max=0
    let maxEle
    for(let i=0;i<str.length;i++){
        if(map[str[i]]){
            map[str[i]]=map[str[i]]+1
        }else{
            map[str[i]]=1
        }
    }
 console.log(map)

    for(ele in map){
        if(map[ele]>max){
              max=map[ele]
              maxEle=ele

        }
       
        //console.log(`${ele}=${map[ele]}`)
    }
    console.log(max)
    console.log(maxEle)
}

countEle('vasanth')