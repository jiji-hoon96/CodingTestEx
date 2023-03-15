function solution(s) {
  let answer;
  let stack = [];
  for (i of s) {
    if (!isNaN(i)) {
      stack.push(Number(i));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (i === "+") {
        stack.push(lt + rt);
      } else if (i === "*") {
        stack.push(lt * rt);
      } else if (i === "/") {
        stack.push(lt / rt);
      } else if (i === "-") {
        stack.push(lt - rt);
      }
    }
  }
  console.log(stack);
}

let str = "352+*9-";
console.log(solution(str));
