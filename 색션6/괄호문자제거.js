function solution(s) {
  let answer;
  let stack = [];
  for (x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      console.log(stack);
      stack.push(x);
    }
  }
  //return stack;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
