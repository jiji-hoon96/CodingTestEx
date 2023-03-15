function randomArray(n) {
  // n까지 숫자 배열 생성
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  // 숫자 2개씩 묶어서 배열 생성
  const pairs = [];
  for (let i = 0; i < n; i += 2) {
    pairs.push([arr[i], arr[i + 1]]);
  }

  // 랜덤으로 조합
  pairs.sort(() => Math.random() - 0.5);

  // 섞인것을 이어붙임
  const result = [];
  for (let pair of pairs) {
    result.push(pair[0]);
    if (pair[1] !== undefined) {
      // 짝이 홀수일때 undefined 제거
      result.push(pair[1]);
    }
  }

  // n이 홀수인 경우 마지막 숫자를 랜덤한 위치에 삽입
  if (n % 2 === 1) {
    const lastNum = result.pop();
    const idx = Math.floor(Math.random() * (n - 1));
    result.splice(idx, 0, lastNum);
  }

  console.log(result);
}

randomArray(30);
randomArray(10);
randomArray(20);
randomArray(17);
randomArray(5);
