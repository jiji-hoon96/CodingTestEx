function solution(test) {
  let testCount = test.length; // 테스트 3번
  let student = test[0].length; // 학생수 4명
  let answer = 0;
  for (let i = 1; i <= student; i++) {
    for (let j = 1; j <= student; j++) {
      let cnt = 0;
      for (let k = 0; k < testCount; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < student; s++) {
          //테스트 횟수만큼 for문

          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === testCount) answer++;
    }
  }
  return answer;
}
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
