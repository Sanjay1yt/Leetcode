// function longestPalindromicSubstring(input) {
//   const length = input.length;
//   if (length === 0 || length === 1) {
//     return input;
//   }

//   const dynamicTable = Array.from({ length }, () => Array(length).fill(0));

//   let longest = 1,
//     start = 0;

//   for (let i = 1; i <= input.length; i++) {
//     for (let j = 0; j + i - 1 < input.length; j++) {
//       const end = j + i - 1;

//       if (i === 1) {
//         dynamicTable[j][end] = 1;
//       } else if (i === 2 && input[j] === input[end]) {
//         dynamicTable[j][end] = 1;
//         longest = 2;
//         start = j;
//       } else if (
//         input[j] === input[end] &&
//         dynamicTable[j + 1][end - 1] === 1
//       ) {
//         dynamicTable[j][end] = 1;
//         if (i > longest) {
//           longest = i;
//           start = j;
//         }
//       }
//     }
//   }

//   return input.substring(start, start + longest);
// }

const longestPalindrome = (userInput) => {
  const totalLength = userInput.length;
  let result = userInput[0];
  if (!totalLength || totalLength === 1) {
    return result;
  }
  if (totalLength === 2 && userInput[0] === userInput[1]) {
    return userInput;
  }
  const palindromicSubstring = ({ start, end }) => {
    let leftPointer = start;
    let rightPointer = end;
    while (
      userInput[leftPointer - 1] &&
      userInput[rightPointer + 1] &&
      userInput[leftPointer - 1] === userInput[rightPointer + 1]
    ) {
      leftPointer--;
      rightPointer++;
    }
    const subString = userInput.slice(leftPointer, rightPointer + 1);
    if (subString.length > result.length) {
      result = subString;
    }
  };
  for (let i = 0; i < userInput.length - 1; i++) {
    if (userInput[i] === userInput[i + 1]) {
      palindromicSubstring({ start: i, end: i + 1 });
    }
    if (userInput[i - 1] === userInput[i + 1]) {
      palindromicSubstring({ start: i - 1, end: i + 1 });
    }
  }
  return result;
};

console.log(longestPalindrome("babad"));
