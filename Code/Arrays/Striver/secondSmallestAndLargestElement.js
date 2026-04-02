let arr = [11, 2, 4, 7, 7, 5];



function secondLargestElement(arr){
let largest=0;
let secondLargest=0;
let secondSmallest=0;
let smallest=0;
for(let i=0;i<arr.length;i++){
if(arr[i]>largest){
  secondLargest = largest; // update second before changing largest
            largest = arr[i];

}else if (arr[i] > secondLargest && arr[i] !== largest) {
             secondLargest = arr[i];
         }

}
console.log(largest,secondLargest);
}
secondLargestElement(arr);


