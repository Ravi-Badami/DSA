arr = [2, 3, 4, 5, 6];

let solution = arr => {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
   return [oddCount, evenCount];


  }
};

console.log(solution(arr));
