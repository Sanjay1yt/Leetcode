var search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    let currentPointer = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[currentPointer] === target) {
      return currentPointer;
    }
    if (nums[currentPointer] < target) {
      leftPointer = currentPointer + 1;
    } else {
      rightPointer = currentPointer - 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
