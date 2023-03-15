function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    } else {
      stack.push(s[i]);
    }
  }
  console.log(answer);
}

let a = "()(((()())(())()))(())";
let b = "(((()(()()))(())()))(()())";
console.log(solution(a));
console.log(solution(b));
