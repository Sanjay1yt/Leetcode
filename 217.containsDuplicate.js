var containsDuplicate = (values) => {
  const uniqueValues = new Set();
  for (element of values) {
    if (uniqueValues.has(element)) {
      return true;
    }
    uniqueValues.add(element);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
