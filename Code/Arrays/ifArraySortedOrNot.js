const arr = [1, 4, 3, 4, 5];

let flag = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[i - 1]) {
    flag = false;
    break;
  }
}
if (flag === false) {
  console.log('not sorted');
} else {
  console.log('sorted');
}
