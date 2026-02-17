function perfectIndex(size, ops, missingOp, currentTop) {
  let stack = new Array(size);

  for (let i = 0; i <=ops.length; i++) {
   let stack = [];
    let tempArray = [...ops.slice(0, i), missingOp, ...ops.slice(i)];
     let valid = true;

    for (let command of tempArray) {
      const parts = command.split(' ');
      const operator = parts[0];
      const val=parseInt(parts[1]);

      if (operator === 'PUSH') {
        if (stack.length > size) {
          valid = false;
          break;
        }
        stack.push(val);
      } else if (operator === 'POP') {
        if (stack.length === 0) {
          valid = false;
          break;
        }
        stack.pop();
      }
    }
    if (valid && stack.slice(-1)[0] === currentTop) {
      return i;
    }
  }
}

size = 4;
missingOp = 'POP';
ops = ['PUSH 5', 'PUSH 10', 'PUSH 15'];
currentTop = 10;
const result = perfectIndex(size, ops, missingOp, currentTop);
console.log(result);
