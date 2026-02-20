n = 12321;

let solution = n => {
  let reverse=0;
  let temp = Math.abs(n);

  while (temp != 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  if (n === Math.abs(reverse)) {

    return true;
  } else {
  console.log(n,reverse)
    return false;
  }
};

console.log(solution(n));
