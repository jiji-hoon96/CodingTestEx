function solution(s) {
  let answer = "YES";
  let stack = [];

  for (x of s) {
    // 1. for 문을 돌면서 ( 이면 stack에 push
    // 2. ( 이외에 것이면 pop
    x === "(" ? stack.push("(") : stack.pop("(");
  }
  // 3. stack 의 length 가 0보다 크면 NO
  if (stack.length > 0) answer = "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
