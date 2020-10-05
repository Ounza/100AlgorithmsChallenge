function adjacentElementsProduct(inputArray: number[]): number {
  let answer = Number.MIN_VALUE;
  for (let i = 0; i < inputArray.length; i++) {
    let currentAnswer = inputArray[i] * inputArray[i + 1];
    if (currentAnswer > answer) {
      answer = currentAnswer;
    }
  }
  return answer;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
