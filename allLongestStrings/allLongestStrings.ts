function allLongestStrings(inputArray: string[]): string[] {
  let largestLength = inputArray[0].length;
  for (let i = 1; i < inputArray.length; i++) {
    length = inputArray[0].length;
    if (length > largestLength) {
      largestLength = length;
    }
  }
  let answer = [];
  inputArray.forEach((element: string) => {
    if (element.length === largestLength) answer.push(element);
  });
  return answer;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
