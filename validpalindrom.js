
var isPalindrome = function(s) {
    s=s.toLowerCase()
    let i=0;
    let j=s.length-1
    while(i<j){
        
        if((s[i]<'a'||s[i]>'z')&&(s[i]<'0'||s[i]>'9')){
            i++
            continue
        }  
        if((s[j]<'a'||s[j]>'z')&&(s[j]<'0'||s[j]>'9')){
            j--
            continue
        }
        if(s[i]!==s[j]){
            return false
        }
        i++
        j--
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
