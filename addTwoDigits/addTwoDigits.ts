function addTwoDigits(n: any): number {
  let nString = n.toString().split("");

  return parseInt(nString[0]) + parseInt(nString[1]);
}

console.log(addTwoDigits(29));
