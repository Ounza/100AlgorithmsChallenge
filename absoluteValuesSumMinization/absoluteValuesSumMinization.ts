function absoluteValuesSumMinimization(a: number[]): number {
  let x = a.length;
  if (x % 2 === 0) {
    return a[x / 2 - 1];
  } else {
    return a[Math.floor(x / 2)];
  }
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
