var lengthOfLongestSubstring = function (value) {
    if (!value.length) {
      return 0;
    }
    let totalLength = 0;
    let start = 0;
    const uniqueChar = new Set();
    for (let i = 0; i < value.length; i++) {
      const currentValue = value[i];
      while (uniqueChar.has(currentValue)) {
        uniqueChar.delete(value[start]);
        start += 1;
      }
      uniqueChar.add(currentValue);
      totalLength = Math.max(totalLength, i - start + 1);
    }
    return totalLength;
  };
  console.log(lengthOfLongestSubstring("bcaabcd"));