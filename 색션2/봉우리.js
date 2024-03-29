function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let rangeX = [-1, 0, 1, 0];
  let rangeY = [0, -1, 0, 1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + rangeX[k];
        let ny = j + rangeY[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny < n &&
          ny >= 0 &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
