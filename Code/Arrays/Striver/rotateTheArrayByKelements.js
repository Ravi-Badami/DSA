let nums = [1, 2, 3, 4, 5, 6, 7];
let nums2 = [1, 2, 3, 4, 5, 6, 7];
let k = 2
let direction='right'


//BruteForce
function bruteForceSolution(nums,k,direction){
if(nums.length===0) return;

const n=nums.length;

 // Normalize k so that we only do effective rotations
k=k%n;
if(k===0) return nums;

  // Make a copy so we can overwrite safely
const arr=[...nums];// original array as a fresh copy

let temp=new Array(k);

if(direction==='right'){
//Right rotation
//Store the  k elements in temp array
for(let i=0;i<k;i++){
temp[i]=arr[n-k+i];
}

//shift first n-k elements to the right by k positions
for(let i=n-k-1;i>=0;i--){
arr[i+k]=arr[i];
}

//place temp elements at the beginning
for(let i=0;i<k;i++){
arr[i]=temp[i];
        }
    }else if(direction==='left'){

   //Put the first two elements in the temp array
   for(let i=0;i<k;i++){
    temp[i]=arr[i];
   }

   //shift the rest of the elements to the left by k
   for(let i=0;i<n-k;i++){
   arr[i]=arr[i+k];
   }

   //merge the temp array and original array
   for(let i=n-k;i<n;i++){
   arr[i]=temp[i-(n-k)]
         }

    }
    console.log(arr);
}

//bruteForceSolution(nums,2,'right');
//bruteForceSolution(nums,2,'left');




function optimalSolution(nums,k,direction){
function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

let n=nums.length;
k=k%n;
if(k===0) return;

if(direction==='right'){
reverse(nums,0,n-1);
reverse(nums,0,k-1);
reverse(nums,k,n-1);

}else if(direction==='left'){
reverse(nums,0,k-1);
reverse(nums,k,n-1);
reverse(nums,0,n-1);
}
console.log(nums);
}



optimalSolution(nums,2,'right');
optimalSolution(nums2,2,'left');