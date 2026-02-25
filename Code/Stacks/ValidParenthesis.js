// https://leetcode.com/problems/valid-parentheses/description/

const word = '[({)}]';
const stack = [];

const pairs = {
  ')': '(',
  ']': '[',
  '}': '{'
};

for (let ch of word) {
  if (!pairs[ch]) {
    stack.push(ch); // opening bracket
  } else {
    if (stack.pop() !== pairs[ch]) {
      console.log(false);
      return;
    }
  }
}

console.log(stack.length === 0);
