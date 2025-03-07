var characterReplacement = function (userInput, count) {
  const characterCounter = {};
  let lengthOfSubstring = 0;
  let start = 0;

  for (let end = 0; end < userInput.length; end++) {
    const char = userInput[end];

    characterCounter[char] = (characterCounter[char] || 0) + 1;

    const maxFrequency = Math.max(...Object.values(characterCounter));

    let lengthOfTheWindow = end - start + 1;

    if (lengthOfTheWindow - maxFrequency > count) {
      const startChar = userInput[start];
      characterCounter[startChar] -= 1;
      start += 1;
    }

    //   lengthOfSubstring = Math.max(lengthOfSubstring, lengthOfTheWindow);
    lengthOfSubstring = Math.max(lengthOfSubstring, end - start + 1);
  }

  return lengthOfSubstring;
};

console.log(characterReplacement("AABABBA", 1)); // Output: 4
