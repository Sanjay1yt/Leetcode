var isPalindrome = function (userInput) {
  const convertedValue = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0; i < convertedValue.length / 2; i++) {
    if (convertedValue[i] !== convertedValue[convertedValue.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("race a car"));
