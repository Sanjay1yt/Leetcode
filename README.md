# Leetcode

Array

1.container with most water
    ---two pointer method
    let's consider left as staring index and right last index -
    check which has minimum height and take that as height and calculate stating and ending to get a width
    area = (height * width) if width is greater than initial width update the value
    next if left pointer height is lesser then right more left pointer else move right pointer

2.two sum 
    ---hashmap method
    let's initialize the empty map, for every iteration subtract the current value with target value(target-value).
    now check the value with map whether resulted value is presented, if not set the current value with index in the map.
    if its present get the index for the value which we stored in map and also take our current iteration index, then break
    the loop and return the value 

3.check number is palindrome 
   step 1 - we we module any number with ten we get remaining value ( definitely it will be last number).
   step 2 - initial a variable (ex-sum) and value is 0, now we need to arrange our reversed number one by one.(here if we multiple our variable sum with 10 and add out module value ,  and store the updated value)
   step 3 - we need to remove the last value from our original user input value (so divide the original value with 10 and remove the pointed value)

4.best time to buy and sell stocks
    ---sliding window method(same as two pointer)
    here first we declare a maxProfit as - 0 and 1st value as our first buy price. now we check that if current price is less than buy price is yes(we change the buy price value), and also we check that max for our maxProfit and (current price - buy price).if the value is greater than out maxProfit we change the value for maxProfit

5.contains duplicate
    ---using new set()
    we need to check, if array values are duplicate. we declared a empty set and for every iteration we are checking if the current values has in set, if yes(just stop the loop and return true), else add current value in set

6.maximum subArray
    ---here we use a method like sliding window.
    1st if array is empty just return zero,else it contains one element just return them as 1st value.
    now our main concept - initially we are maintaining a largestSum as array 1st value and consider a totalSubArrayAs 0...in every loop we add totalSubArrayAs + currentIndex value and check the which is maximum value(because [-2,1,-3,4,-1,2,1,-5,4] in this array the sub array is [4,-1,2,1] ans answer is 6. here after -2 the value is 1,so now totalSubArrayAs 1, before that value is in minus(-),so what ever the value if its minus remove them and consider the current positive value as starting sub array and calculate from that). and check the maximum of totalSubArrayAs and totalSubArrayAs (because may be the older sub array may have the maximum value)
