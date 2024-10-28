/*as a normal palindrome method we can convert a number into string 
and use two pointer method(left and right).but we implemented without using anu inbuilt method */

const checkIsNumberPalindrome = (number) => {
  let userInput = number;
  let sum = 0;
  while (userInput > 0) {
    const lastNumber = userInput % 10;
    sum = sum * 10 + lastNumber;
    userInput = (userInput / 10) << 0;
  }
  return sum === number;
};

console.log(checkIsNumberPalindrome(121));
