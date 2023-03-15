function solution(s) {
  let answer = "YES";
  let stack = [];

  for (x of s) {
    x === "(" ? stack.push("(") : stack.pop("(");
  }
  if (stack.length > 0) answer = "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
