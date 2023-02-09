function solution(s) {
  let answer;
  let sH = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  for (x of s) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  for (let [key, value] of sH) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
