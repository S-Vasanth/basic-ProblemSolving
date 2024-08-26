let strs = ["eat","tea","tan","ate","nat","bat"]

let sortedArr=strs.map((cur)=>cur.split("").sort().join(""))

console.log(sortedArr)

let map={}

for(let i=0;i<sortedArr.length;i++){
    if(map[sortedArr[i]]==undefined){
        map[sortedArr[i]]=[strs[i]]
    }else{
        map[sortedArr[i]].push(strs[i]) 
    }
}

console.log(map)
console.log(Object.values(map))
