let arr=[2, 5, 1, 3, 110];
let largest=-Infinity;
let secondLargest=-Infinity;

for(let i=0;i<arr.length;i++){
if(largest<arr[i]){
    secondLargest=largest;
    largest=arr[i];
}else if(secondLargest<arr[i]){
    secondLargest=arr[i];
}
}
console.log(largest);
console.log(secondLargest);