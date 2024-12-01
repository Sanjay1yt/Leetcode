const countSubstrings = (userInput) => {
  let totalLength = userInput.length;
  const palindromicSubstring = ({ start, end }) => {
    let leftPointer = start;
    let rightPointer = end;
    let substringCount = 0;
    while (
      leftPointer >= 0 &&
      rightPointer < userInput.length &&
      userInput[leftPointer] === userInput[rightPointer]
    ) {
      leftPointer--;
      rightPointer++;
      substringCount++;
    }
    return substringCount;
  };
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === userInput[i + 1]) {
      totalLength += palindromicSubstring({ start: i, end: i + 1 });
    }
    if (userInput[i - 1] === userInput[i + 1]) {
      totalLength += palindromicSubstring({ start: i - 1, end: i + 1 });
    }
  }
  return totalLength;
};

console.log(countSubstrings("aaaaa"));
