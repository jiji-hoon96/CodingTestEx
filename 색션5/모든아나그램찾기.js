function compareMaps(s문자열, t문자열) {
  if (s문자열.length < t문자열.length) return false; // s문자열이 무조건 t문자열보다 길어야함
  if (s문자열.size !== t문자열.size) return false; // 해쉬 사이즈 2개가 들어올때 길이가 둘이 같아야함
  for (let [key, value] of s문자열) {
    if (!t문자열.has(key) || t문자열.get(key) !== value) return false; // t문자열의 해쉬 key 와 value 가 s문자열의 투포인터에 없으면 false
  }
  return true; // 상단의 조건들을 제외하면 true
}

function solution(s문자열, t문자열) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();
  // t문자열의 해쉬를 저장
  for (x of t문자열) {
    tH.has(x) ? tH.set(x, tH.get(x) + 1) : tH.set(x, 1);
  }
  //s문자열의 해쉬를 t문자열 길이-1 까지 해쉬저장
  for (i = 0; i < t문자열.length - 1; i++) {
    sH.has(s문자열[i])
      ? sH.set(s문자열[i], sH.get(s문자열[i]) + 1)
      : sH.set(s문자열[i], 1);
  }
  let lt = 0;
  for (let rt = t문자열.length - 1; rt < s문자열.length; rt++) {
    sH.has(s문자열[rt])
      ? sH.set(s문자열[rt], sH.get(s문자열[rt]) + 1)
      : sH.set(s문자열[rt], 1);
    if (compareMaps(sH, tH)) answer++; // 아나그램이 될 수 없는 조건을 마지막에 조건문으로 걸러줌 (true 일때만 answer ++)
    sH.set(s문자열[lt], sH.get(s문자열[lt]) - 1); //슬라이딩 윈도우를 하기위해서 해당 lt 자리값을 0으로 만들어줘서 lt ++
    if (sH.get(s문자열[lt]) === 0) sH.delete(s문자열[lt]);
    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
