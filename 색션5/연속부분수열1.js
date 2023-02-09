function solution(number, m) {
  //이 문제의 핵심은 연속수열
  let answer = 0;
  let n = number.length; // n= 개수
  // m= 6 :  만들어야되는 수
  let sum = 0;
  let leftindex = 0;
  let rightindex = 0;
  for (rightindex; rightindex < n; rightindex++) {
    sum += number[rightindex];

    if (sum === m) answer++;
    if (sum > m) {
      sum -= number[leftindex];
      leftindex++;
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(a, 6));
