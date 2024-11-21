var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let largestSum = nums[0];
  let totalSubArraySum = 0;
  if (nums.length === 1) {
    return largestSum;
  }
  for (element of nums) {
    totalSubArraySum = Math.max(element, totalSubArraySum + element);
    largestSum = Math.max(totalSubArraySum, largestSum);
  }
  return largestSum;
};
console.log(maxSubArray([1]));
