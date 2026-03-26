let arr=[1,0,2,3,0,4,0,1];

function solution(nums){
let j=-1;
for(let i=0;i<nums.length;i++){
    if(nums[i]===0){
    j=i;
    break;
}}

for(let i=j+1;i<nums.length;i++){
    if(arr[i]!==0){
        [arr[i],arr[j]]=[arr[j],arr[i]];
    j++;
            }
        }
        console.log(nums);
}
solution(arr);
