let arr = [2, 5, 1, 3, 10];
let num = 0;
function largestElement(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
     num = arr[i];
    }
  }
  console.log(num);
}

largestElement(arr);
