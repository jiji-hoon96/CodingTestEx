function solution(arr1, arr2) {
  let answer = [];
  let newArr1 = arr1.sort((a, b) => a - b);
  let newArr2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < newArr1.length; i++) {
    for (let j = 0; j < newArr2.length; j++) {
      if (newArr1[i] === newArr2[j]) answer.push(newArr1[i]);
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
