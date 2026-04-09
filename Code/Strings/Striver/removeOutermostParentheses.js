let s='()(()())(())';
function solution(s){
    let result='';
    let level=0;
    for(let char of s){

        if(char==='('){
            if(level>0) result+=char;
            level++;
        }
        else if(char===')'){
            level--;
            if(level>0) result+=char;
        }
    }
    console.log(result);
    }
solution(s)