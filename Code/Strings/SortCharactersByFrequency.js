let s='tree';

function solution(s){
let map=new Map();

for(let ch of s){
map.set(ch,(map.get(ch)|| 0 ) +1 );
}


let sortedArray=[...map.entries()].sort((a,b)=>{
if(a[1]!==b[1]) return b[1]-a[1];
return a[0].localeCompare(b[0]);
})

let result='';
for(let [char,value] of sortedArray){
if(value>0) result+=char.repeat(value);
}
return result;
}


console.log(solution(s));