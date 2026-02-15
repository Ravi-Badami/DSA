const arr = [2, 7, 11, 15];
const target = 9;
let solution;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === target - arr[i]) {
      solution = [arr[i], arr[j]];
    }
  }
}
console.log(solution);
