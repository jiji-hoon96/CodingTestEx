function collectMinerals(array) {
  const rowArray = array.length; // 가로
  const colArray = array[0].split(" ").length; // 세로
  const newArray = Array.from(
    { length: rowArray },
    () => Array.from({ length: colArray }, () => 0) //2차원 배열 생성
  );

  newArray[0][0] = parseInt(array[0].split(" ")[0]);
  for (let i = 1; i < rowArray; i++) {
    newArray[i][0] = newArray[i - 1][0] + parseInt(array[i].split(" ")[0]);
  }
  for (let j = 1; j < colArray; j++) {
    newArray[0][j] = newArray[0][j - 1] + parseInt(array[0].split(" ")[j]);
  }
  for (let i = 1; i < rowArray; i++) {
    for (let j = 1; j < colArray; j++) {
      const maxPrev = Math.max(newArray[i - 1][j], newArray[i][j - 1]);
      newArray[i][j] = maxPrev + parseInt(array[i].split(" ")[j]);
    }
  }
  console.log(newArray[rowArray - 1][colArray - 1]);
}

collectMinerals(["8 3 5", "4 3 4", "2 2 3"]);
