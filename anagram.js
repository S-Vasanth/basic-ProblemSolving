function anagram(s,t){
  if(s.length!==t.length){
    return false
  }
  let sMap={};
  let tMap={}
 for(let i=0;i<s.length;i++){
    sMap[s[i]]=sMap[s[i]]?sMap[s[i]] +1 : 1
    tMap[t[i]]=tMap[t[i]]?tMap[t[i]]+1 : 1
 }
//  {
//   c:1
//   a:1
//   t:1
//  }
 for(let i in sMap){
    if(sMap[i]!==tMap[i]){
      return false
    }
 }
 return true
}

console.log(anagram('cat','atc'))
