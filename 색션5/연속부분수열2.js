function solution(m, arr) {
  let answer = 0;
  let n = arr.length; // n= 개수
  // m= 5 :  만들어야되는 수
  let sum = 0;
  let leftindex = 0;
  let rightindex = 0;
  for (rightindex; rightindex < m; rightindex++) {
    sum += arr[rightindex];
    while (sum > m) {
      sum -= arr[leftindex++];
    }
    answer += rightindex - leftindex + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
