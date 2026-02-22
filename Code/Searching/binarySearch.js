let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function solution(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

}

console.log(solution(arr, 4));
