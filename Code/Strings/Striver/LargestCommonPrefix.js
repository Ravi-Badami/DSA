 let str = ["flower", "flow", "flight"];

function solution(str){
    if(str.length===0) return "";
    str.sort();;
    let commonPrefix="";
    let first=str[0];
    let last=str[str.length-1];
    
    
    //compare characters from both strings
    for(let i=0;i<Math.min(first.length,last.length);i++){
        if(first[i]!==last[i]){
            return commonPrefix;
        }
        commonPrefix+=first[i];
    }
    return commonPrefix;
}
console.log(solution(str));