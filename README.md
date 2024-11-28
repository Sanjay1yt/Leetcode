# Leetcode

1.two sum 
    ---hashmap method
    let's initialize the empty map, for every iteration subtract the current value with target value(target-value).
    now check the value with map whether resulted value is presented, if not set the current value with index in the map.
    if its present get the index for the value which we stored in map and also take our current iteration index, then break
    the loop and return the value 

3.Longest substring without repeating characters(lengthOfLongestSubstring)
    ---here we are going to use sliding window technique,first we initialize a totalLength to keep track of our sub array length, and start value - from where our sub array started.and we have unique char where we maintain our unique sub array values. now our main loop which iterate user input, first check if current values present in unique char set if not then add into unique char set and check Math.max of our current total length and (current index - our start value) and +1 (why + one because they asked the length so which means 0 index means value will be one and so on...) now check again when our current iteration value has present in unique char array then use while loop to delete until our unique char does'nt contain our current value and increase a start value (example input - "abccab") - now until abc all is unique so now unique set has (a,b,c) now our next value is c and currently our start value is 0, so remove a set until our current value c is not present in it - so first remove (a) and increase start value to 1, then one by one, after then our condition breaks and every thing is empty and our remaining logic will run so it will agin set a new (c) values ini unique set and check Math.max.

5.Longest palindromic substring
    here first we handle a base case where its empty,or length 1 , next we handle if value is 2 and its palindrome then return it, if its more than 2 our actually logic will be applied.we first we iterate through the initial to end and first we check current iterating value and next value to the current value are same, if yes we pass to our palindromicSubstring function with stat value as current i and end as i+1 in the palindromicSubstring function we initialize leftPointer and rightPointer as start and end, because now this is our current substring now we check in while loop where condition as left - 1 and right - 1 is equal if yes we expand out left and right , and we expand as much as condition satisfy at last we splice a string based on left and right and check current sub string is larger than existing result if yes update your result.

11.container with most water
    ---two pointer method
    let's consider left as staring index and right last index -
    check which has minimum height and take that as height and calculate stating and ending to get a width
    area = (height * width) if width is greater than initial width update the value
    next if left pointer height is lesser then right more left pointer else move right pointer

15.three sum
    ---here we are going to use method for sorted array + two sum 2 method (2pointer).first we sort the user input array in ascending order.first our main loop which we going to consider as 1st value and check if the previous values and current value is same if true just ignore the iteration because to avoid duplication...and inner loop here we are going to use two sum 2 method - so initialize a left pointer as i + 1 and right pointer as last index- to add 1st value + left pointer value + right pointer value = > we need to check three condition, 1. if its "greater tha zero" reduce the right pointer, 2. if its "lesser than 0" increase the left pointer, 3. if the value is equals to 0 than push the current index values and left pointer value and right pointer value in new array, the reduce the both left and right value (note* we need to handle some logics to avoid the duplicates here for inner loop - run 2 while loop first for left pointer check if current left pointer value and previous left pointer are same if yes just increase the left pointer to avoid duplication until its not same, then for right pointer check if current right pointer value and previous right pointer are same if yes just decrease the right pointer to avoid duplication until its not same)

20.valid parentheses
    ---here we used a new method like manually handle stack(like that method),because initially i thought to use a two pointer start and end value to check each opening has valid closing but in that ("()[]{}") this scenario will not work because every thing has a valid opening and closing parentheses, next i thought to use same tow pointer like mid point and decrease left and increase right-same above example wont work......in this solution we have declared a initial matchedParentheses object to know which openings has which closing, then from 0 to length we are iterating, and also we have openBrackets array to keep track how many parentheses are opened, at first we check if current value is open bracket if yes we push in openBrackets array, else we check if openBrackets does'nt have length there are no opening bracket at but closing bracket is coming so return false, || we take(pop) the last pushed value from openBrackets and we get the correct closing brackets for the popped value from matchedParentheses and we check current value is equal to the value which is taken from matchedParentheses object.
    at last we check and return if array has length because if its had a value then some closing brackets are missing.

53.maximum subArray
    ---here we use a method like sliding window.
    1st if array is empty just return zero,else it contains one element just return them as 1st value.
    now our main concept - initially we are maintaining a largestSum as array 1st value and consider a totalSubArrayAs 0...in every loop we add totalSubArrayAs + currentIndex value and check the which is maximum value(because [-2,1,-3,4,-1,2,1,-5,4] in this array the sub array is [4,-1,2,1] ans answer is 6. here after -2 the value is 1,so now totalSubArrayAs 1, before that value is in minus(-),so what ever the value if its minus remove them and consider the current positive value as starting sub array and calculate from that). and check the maximum of totalSubArrayAs and totalSubArrayAs (because may be the older sub array may have the maximum value)

121.best time to buy and sell stocks
    ---sliding window method(same as two pointer)
    here first we declare a maxProfit as - 0 and 1st value as our first buy price. now we check that if current price is less than buy price is yes(we change the buy price value), and also we check that max for our maxProfit and (current price - buy price).if the value is greater than out maxProfit we change the value for maxProfit

125.validPalindrome
    first in sting we need to convert them into lower case and also remove the non alpha numeric values. next your loop should run in length o string/2 take current first value and last value as initially and check if both are same , if yes move to next in two pointer method else return false

153.maximum product of sub array
    ---in this problem we need to handle , (0 and also keep track of minimum and maximum because multiplying a negative with negative gives a positive value).initially we assigned a currentMin, and currentMax as 1 and maximumSubArray max value of user input(because if the array contains one value and we need to return that as maximumSubArray).first we handle the 0 part. if current iterating value is 0 just reset our currentMin and currentMax as 1 and ignore the loop.next we are keep a temp variable and store the currentMax value and change our currentMax value by comparing Math.max(current iterating value, current iterating * temp ,current iterating * currentMin)  same all three comparison for currentMin also using Math.min. and for maximum sub array we getting a Math.max by comparing(maximumSubArray,currentMax). why we are using a temp to store currentMax because if we directly store in currentMax and in next step we comparing a currentMin - in that step it will affect

3.check number is palindrome 
   step 1 - we we module any number with ten we get remaining value ( definitely it will be last number).
   step 2 - initial a variable (ex-sum) and value is 0, now we need to arrange our reversed number one by one.(here if we multiple our variable sum with 10 and add out module value ,  and store the updated value)
   step 3 - we need to remove the last value from our original user input value (so divide the original value with 10 and remove the pointed value)

167.two sum 2
    ---here we used two pointer method, advantage we have sorted array here , so validate left and right value. if sum value is greater than target value reduce right pointer else if value is lesser than target value increase the left pointer. if its equal to targeted value then return the left +1 and right index+1. because in the question 1st value index is 2 and last is length of array.

217.contains duplicate
    ---using new set()
    we need to check, if array values are duplicate. we declared a empty set and for every iteration we are checking if the current values has in set, if yes(just stop the loop and return true), else add current value in set

238.product of array except self
    --- here we used left and right approach we iterate through from left to right and take a product, same reverse loop from right to lef we iterate and take a product.
    first we initialize a array with same input size -- declare a left product array and iterate except current value we should take the before all product value and store in current index, same as vice versa for right to left iteration.
    so, now we have left product array and right product array . in 3rd loop wee need to multiple current index of left product value and right product value and store in result array - and that is our output

242.valid Anagram
    ---here we used Hash map method to solve this problem.first we construct a hash for valid string (1st parameter) like unique words and how many times its repeated count.second we iterate a un arranged string word(anagram,2nd parameter) . and for every same word we use to reduce the count in the hash map.





