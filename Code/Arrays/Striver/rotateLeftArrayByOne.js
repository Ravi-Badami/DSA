


//Using shift
// let nums = [1, 2, 3, 4, 5];
// console.log(nums);
//let firstElement=nums.shift();
//nums.push(firstElement);
// console.log(nums);


//Alternative functional style (new array)
//let nums = [1, 2, 3, 4, 5];
//let rotated = nums.slice(1).concat(nums[0]);  // [2,3,4,5,1]



//Without using shift
let nums = [1, 2, 3, 4, 5];
let temp=nums[0];
console.log(nums);

for(let i=1;i<nums.length;i++){
nums[i-1]=nums[i];
}
nums[nums.length-1]=temp;
console.log(nums);

