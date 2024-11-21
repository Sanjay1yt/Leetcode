var decrypt = function (time, count) {
  if (count === 0) {
    return new Array(time.length).fill(0);
  }
  if (count > 0) {
    let counter = 1;
    const result = time.reduce((acc, curr, index) => {
      let totalSum = 0;
      let nextIndex = index + 1 > time.length - 1 ? 0 : index + 1;
      while (counter <= count) {
        totalSum = totalSum + time[nextIndex];
        counter++;
        nextIndex = nextIndex + 1 > time.length - 1 ? 0 : nextIndex + 1;
      }
      counter = 1;
      acc[index] = totalSum;
      return acc;
    }, []);
    return result;
  }
  if (count < 0) {
    const rotationCount = Math.abs(count);
    let counter = 1;
    const result = time.reduce((acc, curr, index) => {
      let totalSum = 0;
      let nextIndex = index - 1 < 0 ? time.length - 1 : index - 1;
      while (counter <= rotationCount) {
        totalSum = totalSum + time[nextIndex];
        counter++;
        nextIndex = nextIndex - 1 < 0 ? time.length - 1 : nextIndex - 1;
      }
      counter = 1;
      acc[index] = totalSum;
      return acc;
    }, []);
    return result;
  }
};
console.log(decrypt([2, 4, 9, 3], -2));   //brute force method
 