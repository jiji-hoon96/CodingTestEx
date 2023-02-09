function solution(n, count, card) {
  // n => 카드 수
  // k => k 번째로 큰 수를 출력
  // card => 각 카드
  let answer;
  let temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
    let 내림차순 = Array.from(temp).sort((a, b) => b - a);
    answer = 내림차순[count - 1];
  }
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
