let arr = [13, 46, 24, 52, 20, 9];

function solution(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
  let minIndex = i;

    for (let j = i + 1; j < n; j++) {
    if(arr[j]<arr[minIndex]){
       minIndex = j;

    }
    let temp=arr[minIndex];
    arr[minIndex]=arr[i];
    arr[i]=temp;
    }

  }
  return arr;
}

console.log(solution(arr));
