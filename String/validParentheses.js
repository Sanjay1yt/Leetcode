var isValid = function (value) {
  if (value.length % 2 !== 0) {
    return false;
  }
  const matchedParentheses = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let currentIndex = 0;
  const openBrackets = [];
  while (currentIndex < value.length) {
    if (matchedParentheses.has(value[currentIndex])) {
      openBrackets.push(value[currentIndex]);
    } else if (
      !openBrackets.length ||
      matchedParentheses.get(openBrackets.pop()) !== value[currentIndex]
    ) {
      return false;
    }
    currentIndex++;
  }
  return !openBrackets.length;
};
console.log(isValid("()[]{}"));
