let arr = [2,7,11,15], target = 9;

//BruteForce
//Time O(nsq) and Space O(n)
function solution(arr,target){
let result=[];
for(let i=0;i<arr.length;i++){
let temp=target-arr[i];
for(let j=i+1;j<arr.length;j++){
if(arr[j]===temp){
result.push(i);
result.push(j);
}
}
}
return result;
}
solution(arr,target);

//Optimal
//TIme O(n) and space O(n
function solution(arr,target){
    const map=new Map();
    for(let i=0;i<arr.length;i++){
        let complement=target-arr[i];
        if(map.has(complement)){
            return [map.get(complement),i];
        }
        map.set(arr[i],i);
    }
}
console.log(solution(arr,target));