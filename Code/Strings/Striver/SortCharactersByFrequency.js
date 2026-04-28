let s='tree';

function solution(s){
    //create frequency 2d array
    let freq=Array(26).fill(0).map((_,i)=>[0,String.fromCharCode(i+97)]);

    //update the 2d array with values
    for(let ch of s){
        freq[ch.charCodeAt(0)-97][0]++;
    }

    //sort the 2d array desecending order and then letter
    freq.sort((a,b)=>{
        if(a[0]!==b[0]) return b[0]-a[0];
        return a[1].localeCompare(b[1]);
    })

    let result=[];
    for(let [count,char] of freq){
        if(count>0) result.push(char);
    }
    return result;
}
console.log(solution(s));


//using map
var frequencySort = function(s) {
   let map=new Map();

   for(let ch of s){
    map.set(ch,(map.get(ch)|| 0)+1);
  }

  let sorted=[...map.entries()].sort((a,b)=>{
if(a[1]!==b[1]) return b[1]-a[1];
return a[0].localeCompare(b[0]);
  })

  let result='';
  for(let [char,count] of sorted){
    if(count>0) result+=char.repeat(count);
  }
  return result;


};