// Brute force
// Time-complexity = O(n)
// space complexity = O(n)

//let arr=[1,1,2,2,3,3,4,4];
//let uniArr=new Set();
//for(let i=0;i<arr.length;i++){
//if(!uniArr.has(arr[i])){
//uniArr.add(arr[i]);
//}
//}
//
//console.log(uniArr);



//Optimized- two pointers
// Time-complexity = O(n)
// space complexity = O(1)

let arr=[1,1,2,2,3,3,4,4];
let i=0;
for(let j=1;j<arr.length;j++){
if(arr[i]!=arr[j]){
i++;
arr[i]=arr[j];
}
}
arr.length=i+1;
console.log(arr);