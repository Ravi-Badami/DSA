n = 'abc1 deiou*';

function isVowel(ch) {
ch=ch.toLowerCase();
  return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
}

function solution(n) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (isVowel(n[i])) {
      count++;
    }
  }
  return count;
}
console.log(solution(n));
