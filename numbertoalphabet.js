function numtoalpha1(str){
    let output=''
    let ele='';
    for(let i=0;i<str.length;i++){
        if(str[i]>='a' && str[i]<='z'){
             ele=str[i]
        }else{
            let j=0
            let k=parseInt(str[i])
            while(j<k){
                output=output+ele
                k--
            }
        }
    }
    console.log(output)

}
numtoalpha1('a3b2c4')
//aaabbcccc


function numtoalpha(str){
    let output=''
    for(let i=0;i<str.length;i++){
        if(str[i]>='a' && str[i]<='z'){
            output=output+str[i]
        }else{
            let k=parseInt(str[i])
            for(let j=0;j<k;j++){
                output=output+str[i-1]
            }
        }
    } 
    console.log(output)

}
numtoalpha('aaa3bbbb2ccccc4d3')
//aaaaaabbbbbbcccccccc