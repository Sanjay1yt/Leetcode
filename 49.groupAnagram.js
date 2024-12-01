var primeCharacterList = {
  a: 2,
  b: 3,
  c: 5,
  d: 7,
  e: 11,
  f: 13,
  g: 17,
  h: 19,
  i: 23,
  j: 29,
  k: 31,
  l: 37,
  m: 41,
  n: 43,
  o: 47,
  p: 53,
  q: 59,
  r: 61,
  s: 71,
  t: 73,
  u: 79,
  v: 83,
  w: 89,
  x: 97,
  y: 101,
  z: 103,
};
var groupAnagrams = function (userInput) {
  const result = {};
  userInput.forEach((ele) => {
    let product = 1;
    for (let i = 0; i < ele.length; i++) {
      product = product * primeCharacterList[ele[i]];
    }
    if (!result[product]) {
      result[product] = [ele];
    } else {
      result[product].push(ele);
    }
  });
  return Object.values(result);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
