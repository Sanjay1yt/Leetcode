var isValid = function (value) {
  if (value.length % 2 !== 0) {
    return false;
  }
  const matchedParentheses = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const openBrackets = [];
  for (valueElement of value) {
    if (matchedParentheses.has(valueElement)) {
      openBrackets.push(valueElement);
    } else if (
      !openBrackets.length ||
      matchedParentheses.get(openBrackets.pop()) !== valueElement
    ) {
      return false;
    }
  }
  return !openBrackets.length;
};
console.log(isValid("()[]{}"));
