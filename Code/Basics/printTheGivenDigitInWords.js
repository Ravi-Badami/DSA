//Program to print the given digit in words
n = 1234;
let solution = (n) => {
  let result = [];
  let number=[...String(n)].map(Number);
  console.log(number.length);
  for (let i = 0; i < number.length; i++) {
    switch (number[i]) {
      case 1:
        result.push('one');
        break;
      case 2:
        result.push('two');
        break;

      case 3:
        result.push('three');
        break;

      case 4:
        result.push('four');
        break;

      case 5:
        result.push('five');
        break;

      case 6:
        result.push('six');
        break;

      case 7:
        result.push('seven');
        break;

      case 8:
        result.push('eight');
        break;

      case 9:
        result.push('nine');
        break;

    }
  }
  return result;
};
console.log(solution(1234));


//TODO : implement this with recursion