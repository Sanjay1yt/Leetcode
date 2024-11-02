var threeSum = function (value) {
  const result = [];
  const sortedValue = value.sort((a, b) => a - b);
  console.log(sortedValue, "sortedValue");
  for (let i = 0; i < sortedValue.length - 1; i++) {
    if (i > 0 && sortedValue[i] === sortedValue[i - 1]) {
      continue;
    }
    let leftPointer = i + 1,
      rightPointer = sortedValue.length - 1;
    while (leftPointer < rightPointer) {
      const totalSum =
        sortedValue[i] + sortedValue[leftPointer] + sortedValue[rightPointer];
      if (totalSum > 0) {
        rightPointer = rightPointer - 1;
      } else if (totalSum < 0) {
        leftPointer = leftPointer + 1;
      } else {
        result.push([
          sortedValue[i],
          sortedValue[leftPointer],
          sortedValue[rightPointer],
        ]);
        leftPointer = leftPointer + 1;
        rightPointer = rightPointer - 1;
        while (
          leftPointer < rightPointer &&
          sortedValue[leftPointer] === sortedValue[leftPointer - 1]
        ) {
          leftPointer = leftPointer + 1;
        }
        while (
          leftPointer < rightPointer &&
          sortedValue[rightPointer] === sortedValue[rightPointer + 1]
        ) {
          rightPointer = rightPointer - 1;
        }
      }
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
