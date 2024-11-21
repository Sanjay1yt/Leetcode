var twoSum2 = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;
  while (leftPointer !== rightPointer) {
    if (numbers[leftPointer] + numbers[rightPointer] === target) {
      return [++leftPointer, ++rightPointer];
    }
    if (numbers[leftPointer] + numbers[rightPointer] > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return matchedIndex;
};
console.log(twoSum2([2, 7, 11, 15], 9));
