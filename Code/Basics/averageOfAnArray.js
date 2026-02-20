//Program for average of an array

arr =[1, 2, 3, 4, 5]

let solution=(arr)=>{
let avg=0;
for(let i=0;i<arr.length;i++){
avg+=arr[i];
}
return avg/arr.length;
}

console.log(solution(arr));