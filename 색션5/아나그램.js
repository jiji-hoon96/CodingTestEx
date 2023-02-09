function solution(str1, str2) {
  let answer = "YES";
  let aH = new Map();
  let bH = new Map();
  for (x of str1) {
    aH.has(x) ? aH.set(x, aH.get(x) + 1) : aH.set(x, 1);
  }
  for (x of str2) {
    bH.has(x) ? bH.set(x, bH.get(x) + 1) : bH.set(x, 1);
  }
  for (x of str1) {
    if (aH.get(x) !== bH.get(x)) answer = "NO";
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
let c = "abaCC";
let d = "Caaab";
console.log(solution(a, b));
console.log(solution(c, d));
