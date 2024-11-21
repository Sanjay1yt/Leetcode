var twoSum = function (nums, target) {
  const constructedHaspMapValues = new Map();
  for (const [index, numElement] of nums.entries()) {
    const previousNumberWithIndex = constructedHaspMapValues.get(
      target - numElement
    );

    if (previousNumberWithIndex >= 0) {
      return [previousNumberWithIndex, index];
    }
    constructedHaspMapValues.set(numElement, index);
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
