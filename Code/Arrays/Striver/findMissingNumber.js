let arr= [8, 2, 4, 5, 6, 3, 1];

//Time=O(nsq) and Space=O(1)
//function bruteForce(arr){
//    for(let i=1;i<=arr.length;i++){
//    let currentVal=i;
//
//    let found=false;
//        for(let j=0;j<arr.length;j++){
//
//        if(arr[j]===currentVal){
//
//        found=true;
//
//        break;
//        }
//        }
//        if(!found){
//        console.log(currentVal,"is not present in the array");
//        }
//    }
//}
//bruteForce(arr);

//Time=O(n) and Space=O(n)
//function betterApproach(arr){
//let n=arr.length;
//let hash=new Array(n+1).fill(0);
//for(let i=0;i<n;i++){
//hash[arr[i]-1]++;
//}
//for(let i=0;i<n;i++){
//if(hash[i]===0){
//console.log(i+1,'is missing in the array');
//        }
//    }
//}
//betterApproach(arr)

//Time=O(n) and Space=O(1)
function formulaApproach(arr){
let n=arr.length+1;
let sum=0;
for(let i=0;i<arr.length;i++){
sum+=arr[i];
}
let expSum=(n*(n+1))/2;
let missingNum=expSum-sum;
console.log(missingNum);

};
formulaApproach(arr);