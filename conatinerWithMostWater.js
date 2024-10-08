var getMaxArea = function (height) {
    let maxAmount = 0;
    for (let i = 0; i <= height.length - 1; i++) {
      for (let j = i; j <= height.length - 1; j++) {
        let width = Math.abs(i - j);
        const minHeight = Math.min(height[i], height[j]);
        const calculatedWidth = minHeight * width;
        if (calculatedWidth > maxAmount) {
          maxAmount = calculatedWidth;
        }
      }
    }
    return maxAmount;
  }; //brute force method
  
  var maxArea = function (height) {
    let maxAmount = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;
  
    while (leftPointer < rightPointer) {
      const minimumHeight = Math.min(height[leftPointer], height[rightPointer]);
      const width = rightPointer - leftPointer;
      const totalAmount = minimumHeight * width;
      maxAmount = Math.max(maxAmount, totalAmount);
      if (height[leftPointer] < height[rightPointer]) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  
    return maxAmount;
  }; 
 
  