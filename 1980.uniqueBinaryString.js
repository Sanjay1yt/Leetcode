const getGeneratedBinaryValues = (currentBinaryLength) => {
    const binaryStaticValues = [];
    for (let i = 0; i <= currentBinaryLength - 1; i++) {
      const lastValue = binaryStaticValues[0];
      if (!lastValue) {
        binaryStaticValues.push(1);
      } else {
        binaryStaticValues.push(lastValue * (i + 1));
      }
    }
    const fourDigitBinaryValues = [];
  
    const totalLength = currentBinaryLength * currentBinaryLength;
    for (let i = 0; i <= totalLength; i++) {
      let currentIndex = i;
      const currentBinaryValue = [];
  
      for (let j = 0; j < binaryStaticValues.length; j++) {
        if (currentIndex >= binaryStaticValues[j]) {
          currentBinaryValue.push(1);
          currentIndex -= binaryStaticValues[j];
        } else {
          currentBinaryValue.push(0);
        }
      }
      fourDigitBinaryValues.push(currentBinaryValue.join(""));
    }
  
    return fourDigitBinaryValues;
  };
  var findDifferentBinaryString = function (nums) {
    const generateBinaryValues = getGeneratedBinaryValues(nums[0].length);
    const filteredData = generateBinaryValues.filter(
      (ele) => !nums.includes(ele)
    );
    return filteredData[0];
  };
  
  console.log(findDifferentBinaryString(["01","10"]));
  