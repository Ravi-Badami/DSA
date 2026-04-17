let  s = "paper", t = "title";
function solution(s,t){
let arrayOfS=new Array(256).fill(0);
let arrayOfT=new Array(256).fill(0);

for(let i=0;i<s.length;i++){
    let charOfS=s.charCodeAt(i);
    let charOfT=t.charCodeAt(i);

    if(arrayOfS[charOfS]!==arrayOfT[charOfT]){
        console.log("Not isomorphic");
        return;
    }
    arrayOfS[charOfS]=i+1;
    arrayOfT[charOfT]=i+1;
}
console.log("Isomorphic");
}
solution(s,t);