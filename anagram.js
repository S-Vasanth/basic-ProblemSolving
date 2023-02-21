function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1;
    tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
  }
  for (let keys in sMap) {
    if (sMap[keys] != tMap[keys]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("cat", "cat"));
