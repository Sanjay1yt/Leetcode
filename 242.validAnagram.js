var isAnagram = function (s, t) {
    if(s.length !==t.length){
        return false
    }
  const firstHashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!firstHashMap.has(s[i])) {
      firstHashMap.set(s[i], 1);
    } else {
      firstHashMap.set(s[i], firstHashMap.get(s[i]) + 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!firstHashMap.get(t[i])) {
      return false;
    } else {
      firstHashMap.set(t[i], firstHashMap.get(t[i]) - 1);
    }
  }
  return true;
};
console.log(isAnagram("ab", "a"));
