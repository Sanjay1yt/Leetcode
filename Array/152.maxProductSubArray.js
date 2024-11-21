var maxProduct = function (value) {
    let currentMin = 1,
      currentMax = 1,
      maximumSubArray = Math.max(...value);
  
    for (let i = 0; i < value.length; i++) {
      if (value[i] === 0) {
        currentMin = 1;
        currentMax = 1;
        maximumSubArray = Math.max(maximumSubArray, 0);
        continue;
      }

      let tempMax = currentMax;
      currentMax = Math.max(value[i], value[i] * tempMax, value[i] * currentMin);
      currentMin = Math.min(value[i], value[i] * tempMax, value[i] * currentMin);
  
      maximumSubArray = Math.max(maximumSubArray, currentMax);
    }
    return maximumSubArray;
  };
  console.log(maxProduct([2,3,-2,4]))