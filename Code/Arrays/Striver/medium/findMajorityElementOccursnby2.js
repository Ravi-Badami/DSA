let arr = [7, 0, 0, 1, 7, 7, 2, 7, 7];

function solution(arr){
let count=0;
let candidate=0;

for(let i=0;i<arr.length;i++){
if(count===0){
candidate=arr[i];
count=1;
}else if(candidate===arr[i]){
count++;
}else{
count--;
}
}

return candidate;
}
console.log(solution(arr));